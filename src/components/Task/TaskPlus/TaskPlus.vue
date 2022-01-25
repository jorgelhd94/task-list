<script setup>
import Icon from '../../UI/Icon/Icon.vue';
</script>

<template>
  <div class="flex">
    <div class="flex-none w-6 h-6 border-2 border-primary rounded mr-3">
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
