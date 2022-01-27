<script setup>
import { ref, computed } from 'vue';
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
import TaskPlus from '../TaskPlus/TaskPlus.vue';
import TaskCreator from '../TaskCreator/TaskCreator.vue';
import TaskList from '../TaskList/TaskList.vue';

const showCreator = ref(false);
const taskText = ref('');
const tasks = ref([]);

const sortComments = computed(() => {
  return tasks.value.slice().sort((a, b) => {
    if (this.sort === '1') {
      return new Date(b.modified_on) - new Date(a.modified_on);
    }
    return new Date(a.modified_on) - new Date(b.modified_on);
  });
});

async function getTasks() {
  let q = null;
  q = query(taskCollection, where('uid', '==', getAuth().currentUser.uid));

  await onSnapshot(q, (querySnapshot) => {
    tasks.value = [];
    querySnapshot.forEach((document) => {
      const task = {
        ...document.data(),
        docID: document.id,
      };
      console.log(task);
      tasks.value.push(task);
    });
  });
}

getTasks();
console.log(tasks.value);
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

    <TaskList></TaskList>
  </div>
</template>
