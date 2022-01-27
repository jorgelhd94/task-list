<script setup>
import Icon from '../../../UI/Icon/Icon.vue';
import { formatDate } from '../../../../includes/utils';

// eslint-disable-next-line no-undef
const props = defineProps({
  task: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div
    class="flex flex-row flex-nowrap w-full justify-between items-center my-4 cursor-pointer"
  >
    <div class="flex p-1 items-center">
      <div
        class="flex-none w-7 h-7 text-center rounded mr-3 active:opacity-30"
        :class="[props.task.isDone ? 'bg-gray-400' : 'border border-gray-500']"
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
    <div class="flex-auto">{{ task.task }}</div>

    <div
      class="bg-gray-200 px-3 rounded-full text-gray-400 font-medium inline-flex items-center"
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
</template>
