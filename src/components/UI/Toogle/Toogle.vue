<script setup>
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { ref } from 'vue';

const props = defineProps({
  text1: {
    type: String,
    default: '1',
  },
  text2: {
    type: String,
    default: '2',
  },
});

const emit = defineEmits(['toogleChange']);

const isFirst = ref(true);
const classActive = ref('text-blue-500 font-medium');

const toogleChange = (option) => {
  isFirst.value = option;
  emit('toogleChange', option);
};
</script>

<template>
  <div
    class="h-6 bg-gray-300 ring-2 ring-gray-300 rounded-full flex cursor-pointer z-0 relative"
  >
    <div
      class="w-1/2 h-6 ring-2 ring-gray-300 bg-white rounded-full absolute transition"
      :class="[isFirst ? 'left-0' : 'right-0']"
    ></div>
    <div
      class="flex-auto h-6 px-2"
      :class="[isFirst ? classActive : 'text-gray-500']"
      @click="toogleChange(true)"
    >
      Open <span class="font-normal">{{ text1 }}</span>
    </div>
    <div
      class="flex-auto h-6 px-2"
      :class="[!isFirst ? classActive : 'text-gray-500']"
      @click="toogleChange(false)"
    >
      Done <span class="font-normal">{{ text2 }}</span>
    </div>
  </div>
</template>

<style scoped>
.absolute {
  z-index: -1;
}
</style>
