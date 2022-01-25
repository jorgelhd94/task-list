<script setup>
import Icon from '../Icon/Icon.vue';
// eslint-disable-next-line no-undef
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <div>
    <button
      class="font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
      :class="{
        'bg-purple-600 text-white': props.active,
        'bg-white': !props.active,
      }"
    >
      <icon class="mr-2 fas" :name="props.icon" size="14"></icon>
      {{ props.label }}
    </button>
  </div>
</template>
