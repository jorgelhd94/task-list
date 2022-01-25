<script setup>
import { onMounted, onUnmounted } from 'vue';
import Icon from '../../UI/Icon/Icon.vue';

// eslint-disable-next-line no-undef
const emit = defineEmits(['clickOutside']);
let flag = 0;

function handler(e) {
  const elem = document.getElementById('creator-container');
  if (elem) {
    if (!elem.contains(e.target)) {
      //   emit('clickOutside');
      if (flag === 1) emit('clickOutside');;
      flag++;
    }
  }
}

onMounted(() => {
  window.addEventListener('click', handler);
});

onUnmounted(() => {
  window.removeEventListener('click', handler);
});
</script>

<template>
  <div
    id="creator-container"
    class="flex flex-col border border-color rounded mb-4 p-4 shadow-md"
  >
    <div class="flex flex-row">
      <div class="flex-none w-6 h-6 border-2 border-primary rounded mr-3">
        <Icon name="plus" :size="20" color="#007fff" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.border-color {
  border-color: #f1f3f4;
}

.border-primary {
  border-color: #007fff;
}
</style>
