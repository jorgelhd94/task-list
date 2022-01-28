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
const tasksUndone = ref([]);
const tasksDone = ref([]);

const getTasks = async () => {
  let q = null;

  // Tasks undone
  q = query(
    taskCollection,
    where('uid', '==', getAuth().currentUser.uid),
    where('isDone', '==', false)
  );

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
      tasksUndone.value = [...listTask];
    },
    (error) => {
      // ...
      showMsg('Connection error!! ' + error, 'error');
    }
  );

  // Tasks Done
  q = query(
    taskCollection,
    where('uid', '==', getAuth().currentUser.uid),
    where('isDone', '==', true)
  );

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
      tasksDone.value = [...listTask];
    },
    (error) => {
      // ...
      showMsg('Connection error!! ' + error, 'error');
    }
  );
};

onMounted(getTasks);

const sortTasksDone = computed(() => {
  const taskList = [...tasksDone.value];
  return taskList.sort((a, b) => {
    return new Date(b.modified_on) - new Date(a.modified_on);
  });
});

const sortTasksUndone = computed(() => {
  const taskList = [...tasksUndone.value];
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

    <TaskList :tasks="sortTasksDone" />
    <TaskList :tasks="sortTasksUndone" />

    <div
      v-if="sortTasksDone.length === 0"
      class="flex flex-col w-full items-center"
    >
      <div class="relative">
        <img width="300" src="../../../assets/img/list.svg" alt="" />
        <h1
          class="absolute bottom-0 left-1/4 text-3xl font-bold text-gray-500 tracking-wider"
        >
          Empty list
        </h1>
      </div>
    </div>
  </div>
</template>
