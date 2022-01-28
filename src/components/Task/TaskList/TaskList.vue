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
    <transition-group name="slide-fade">
      <div v-for="task in props.tasks" :key="task.docID">
        <TaskItem :task="task" />
      </div>
    </transition-group>
  </div>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
