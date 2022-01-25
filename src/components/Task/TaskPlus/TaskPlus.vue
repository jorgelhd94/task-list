<script setup>
import Icon from '../../UI/Icon/Icon.vue';

// eslint-disable-next-line no-undef
const emit = defineEmits(['clickBtn']);
</script>

<template>
  <div class="flex mb-2 p-4" @click="emit('clickBtn')">
    <div
      class="flex-none w-6 h-6 border-2 border-primary rounded mr-3 active:opacity-30"
    >
      <Icon name="plus" :size="20" color="#007fff" />
    </div>
    <div class="flex-auto text-gray">Type to add new task</div>
  </div>
</template>

<style scoped>
div {
  cursor: pointer;
}
.border-primary {
  border-color: #007fff;
}

.text-gray {
  color: #8a94a6;
}
</style>
