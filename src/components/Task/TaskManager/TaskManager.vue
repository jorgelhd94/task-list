<script setup>
import { ref } from 'vue';
import TaskPlus from '../TaskPlus/TaskPlus.vue';
import TaskCreator from '../TaskCreator/TaskCreator.vue';

const showCreator = ref(false);
const taskText = ref('');

function updateText(newText) {
  taskText.value = newText;
}
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
  </div>
</template>
