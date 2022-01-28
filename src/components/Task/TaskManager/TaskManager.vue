<script setup>
import { ref, computed, onMounted } from 'vue';
import {
  getAuth,
  taskCollection,
  // doc,
  // getDoc,
  onSnapshot,
  query,
  where,
  // onSnapshot,
} from '../../../includes/firebase';
import { showMsg } from '../../../includes/utils';
import TaskPlus from '../TaskPlus/TaskPlus.vue';
import TaskCreator from '../TaskCreator/TaskCreator.vue';
import TaskList from '../TaskList/TaskList.vue';

const showCreator = ref(false);
const taskText = ref('');

function updateText(newText) {
  taskText.value = newText;
}

// Task List
const tasks = ref([]);

const getTasks = async () => {
  let q = null;
  q = query(taskCollection, where('uid', '==', getAuth().currentUser.uid));

  await onSnapshot(
    q,
    (querySnapshot) => {
      const listTask = [];
      querySnapshot.forEach((document) => {
        const task = {
          ...document.data(),
          docID: document.id,
        };
        listTask.push(task);
      });
      tasks.value = [...listTask];
    },
    (error) => {
      // ...
      showMsg('Connection error!! ' + error, 'error');
    }
  );
};

onMounted(getTasks);

const sortTasks = computed(() => {
  const taskList = [...tasks.value];
  return taskList.sort((a, b) => {
    return new Date(b.modified_on) - new Date(a.modified_on);
  });
});
</script>

<template>
  <div>
    <TaskPlus v-if="!showCreator" @click-btn="showCreator = true" />
    <TaskCreator
      v-if="showCreator"
      :task-text="taskText"
      @click-close="showCreator = false"
      @text-editor="updateText"
    />

    <TaskList :tasks="sortTasks" />
  </div>
</template>
