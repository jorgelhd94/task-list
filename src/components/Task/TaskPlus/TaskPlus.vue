<script setup>
import Icon from '../../UI/Icon/Icon.vue';

// eslint-disable-next-line no-undef
const emit = defineEmits(['clickBtn']);
</script>

<template>
  <div class="flex mb-2 p-2 items-center" @click="emit('clickBtn')">
    <div
      class="flex-none w-5 h-5 ring-2 ring-blue-500 text-center rounded mr-3 active:opacity-30"
    >
      <Icon name="plus" :size="20" color="#007fff"/>
    </div>
    <div class="flex-auto text-gray">Type to add new task</div>
  </div>
</template>

<style scoped>
div {
  cursor: pointer;
}

.text-gray {
  color: #8a94a6;
}
</style>
