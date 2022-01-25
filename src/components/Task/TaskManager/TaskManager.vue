<script setup>
import { ref } from 'vue';
import TaskPlus from '../TaskPlus/TaskPlus.vue';
import TaskCreator from '../TaskCreator/TaskCreator.vue';

const showCreator = ref(false);
</script>

<template>
  <div>
    <TaskPlus v-if="!showCreator" @click-btn="showCreator = true" />
    <TaskCreator v-if="showCreator" @click-outside="showCreator = false" />
  </div>
</template>
