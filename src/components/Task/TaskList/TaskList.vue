<script setup>
import TaskItem from './TaskItem/TaskItem.vue'
</script>

<template>
  <div>
      <TaskItem :is-done="true"></TaskItem>
      <TaskItem :is-done="true"></TaskItem>
      <TaskItem :is-done="false"></TaskItem>
  </div>
</template>