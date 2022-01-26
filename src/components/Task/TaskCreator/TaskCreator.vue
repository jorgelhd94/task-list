<script setup>
import { onMounted, onUnmounted } from 'vue';
import TaskEditor from './TaskCreatorEditor/TaskCreatorEditor.vue';
import TaskFooter from './TaskCreatorFooter/TaskCreatorFooter.vue';
import Icon from '../../UI/Icon/Icon.vue';

// eslint-disable-next-line no-undef
const emit = defineEmits(['clickOutside']);
let flag = 0;

function handler(e) {
  const elem = document.getElementById('creator-container');
  if (elem) {
    if (!elem.contains(e.target)) {
      //   emit('clickOutside');
      if (flag === 1) emit('clickOutside');
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
    class="flex flex-col border border-color rounded mb-4 shadow-md"
  >
    <div class="flex-auto">
      <div class="flex flex-row mb-4 p-2">
        <!-- Plus Button -->
        <div class="flex-none w-5 h-5 ring-2 ring-blue-500 rounded mr-2">
          <Icon name="plus" :size="20" color="#007fff" />
        </div>
        <!-- Editor -->
        <div class="flex-auto">
          <TaskEditor />
        </div>
        <!-- User Icon -->
        <div class="flex-none">
          <div
            class="flex items-center justify-center w-full rounded-md text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
          >
            <svg
              width="20"
              fill="currentColor"
              height="20"
              class="text-gray-800 opacity-40"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1523 1339q-22-155-87.5-257.5t-184.5-118.5q-67 74-159.5 115.5t-195.5 41.5-195.5-41.5-159.5-115.5q-119 16-184.5 118.5t-87.5 257.5q106 150 271 237.5t356 87.5 356-87.5 271-237.5zm-243-699q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zm512 256q0 182-71 347.5t-190.5 286-285.5 191.5-349 71q-182 0-348-71t-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-auto">
      <TaskFooter />
    </div>
  </div>
</template>

<style scoped>
.border-color {
  border-color: #f1f3f4;
}

</style>
