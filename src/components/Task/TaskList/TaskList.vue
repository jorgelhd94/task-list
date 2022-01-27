<script setup>
import TaskItem from './TaskItem/TaskItem.vue';

// eslint-disable-next-line no-undef
const props = defineProps({
  tasks: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div>
    <TaskItem v-for="task in props.tasks" :key="task.docID" :task="task"></TaskItem>
  </div>
</template>
