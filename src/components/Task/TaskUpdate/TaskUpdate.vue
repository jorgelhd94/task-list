<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { showMsg } from '../../../includes/utils';
import TaskEditor from './TaskUpdateEditor/TaskUpdateEditor.vue';
import TaskFooter from './TaskUpdateFooter/TaskUpdateFooter.vue';
import { useStore } from 'vuex';

// eslint-disable-next-line no-undef
const props = defineProps({
  taskId: {
    type: String,
    required: true,
  },
  taskText: {
    type: String,
    required: true,
  },
});

// eslint-disable-next-line no-undef
const emit = defineEmits(['clickClose', 'textEditor']);

let flag = 0;

// Handler close editor
onMounted(() => {
  window.addEventListener('click', handler);
});

onUnmounted(() => {
  window.removeEventListener('click', handler);
});

function handler(e) {
  const elem = document.getElementById('creator-container');
  if (elem) {
    if (!elem.contains(e.target)) {
      if (flag === 1) {
        emit('clickClose');
      }
      flag++;
    }
  }
}

// Manage Text
const isTextEmpty = ref(false);
const isTextEqual = ref(true);
const loading = ref(false);
let textEditor = '';

function checkText(text) {
  isTextEmpty.value = text.length > 0 ? false : true;
  isTextEqual.value = text === props.taskText;
  textEditor = text;
}

// Store and submit

const store = useStore();

// Submit task
async function submitTask() {
  loading.value = true;
  try {
    await store.dispatch('task/updateTask', {
      id: props.taskId,
      text: textEditor,
    });
    showMsg('Task was updated successfully!!', 'info');
    emit('clickClose');
  } catch (error) {
    showMsg('Error updating task ' + error, 'danger');
  }
  loading.value = false;
}
async function deleteTask() {
  try {
    const confirmDelete = confirm('Are you sure?');
    if (confirmDelete) {
      loading.value = true;
      await store.dispatch('task/deleteTask', props.taskId);
      showMsg('Task was remove successfully!!', 'info');
      emit('clickClose');
    }
  } catch (error) {
    showMsg('Error removing task ' + error, 'danger');
  }
  loading.value = false;
}
</script>

<template>
  <div
    id="creator-container"
    class="flex flex-col border border-color rounded mb-4 shadow-md"
  >
    <div class="flex-none">
      <div class="flex flex-row flex-nowrap justify-between mb-4 p-2">
        <!-- Plus Button -->
        <div class="flex-none w-5 h-5 mr-2">
          <slot></slot>
        </div>
        <!-- Editor -->
        <div class="flex-auto w-4/5">
          <TaskEditor :task-text="props.taskText" @update-text="checkText" />
        </div>
        <!-- User Icon -->
        <div class="flex-none w-5 h-5">
          <div
            class="flex items-center justify-center rounded-md text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
          >
            <svg
              width="20"
              fill="currentColor"
              height="20"
              class="text-gray-800"
              :class="{ 'opacity-40': isTextEmpty }"
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
      <TaskFooter
        :is-text-equal="isTextEqual"
        :is-text-empty="isTextEmpty"
        :loading="loading"
        @click-cancel="emit('clickClose')"
        @click-delete="deleteTask"
        @click-submit="submitTask"
      />
    </div>
  </div>
</template>

<style scoped>
.border-color {
  border-color: #f1f3f4;
}
</style>
