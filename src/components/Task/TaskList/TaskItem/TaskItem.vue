<script setup>
/* eslint-disable vue/no-v-html */
import { ref } from 'vue';
import { useStore } from 'vuex';
import Icon from '../../../UI/Icon/Icon.vue';
import TaskUpdate from '../../TaskUpdate/TaskUpdate.vue';
import { formatDate } from '../../../../includes/utils';

// eslint-disable-next-line no-undef
const props = defineProps({
  task: {
    type: Object,
    required: true,
  },
});

const showUpdate = ref(false);

const store = useStore();

async function changeState() {
  store.dispatch('task/changeState', {
    id: props.task.docID,
    isDone: !props.task.isDone,
  });
}
</script>

<template>
  <div
    v-if="!showUpdate"
    class="flex flex-row flex-nowrap w-full justify-between items-center my-4 cursor-pointer"
  >
    <div class="flex-none p-1 items-center">
      <div
        class="flex-none w-7 h-7 text-center rounded mr-3 active:opacity-30"
        :class="[props.task.isDone ? 'bg-gray-400' : 'border border-gray-500']"
        @click="changeState"
      >
        <Icon
          v-if="props.task.isDone"
          name="check"
          :size="22"
          color="white"
          custom-class="w-full inline-flex"
        />
      </div>
    </div>

    <!-- Editor -->
    <div
      class="flex-auto w-3/5 md:w-4/5 border-0"
      contenteditable="true"
      @click="showUpdate = true"
      @keydown="showUpdate = true"
      v-html="task.task"
    ></div>

    <!-- Date -->
    <div
      class="flex-none w-max bg-gray-200 px-3 rounded-full text-gray-400 font-medium inline-flex items-center"
      style="color: rgb(138, 148, 166)"
    >
      <Icon
        name="calendar"
        :size="18"
        color="rgb(138, 148, 166)"
        custom-class="mr-2"
      />
      {{ formatDate(task.modified_on) }}
    </div>
  </div>

  <TaskUpdate
    v-if="showUpdate"
    :task-id="task.docID"
    :task-text="task.task"
    @click-close="showUpdate = false"
  >
    <div
      class="flex-none w-7 h-7 text-center rounded mr-3 active:opacity-30"
      :class="[props.task.isDone ? 'bg-gray-400' : 'border border-gray-500']"
      @click="changeState"
    >
      <Icon
        v-if="props.task.isDone"
        name="check"
        :size="22"
        color="white"
        custom-class="w-full inline-flex"
      />
    </div>
  </TaskUpdate>
</template>

<style scoped>
div[contenteditable]:hover {
  cursor: pointer;
}
div[contenteditable]:focus {
  outline: none;
}
</style>
