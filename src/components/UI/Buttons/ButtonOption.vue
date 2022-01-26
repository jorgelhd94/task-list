<script setup>
import Icon from '../Icon/Icon.vue';
// eslint-disable-next-line no-undef
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  showIcon: {
    type: Boolean,
    default: true,
  },
  icon: {
    type: String,
    default: 'unlock',
  },
  iconColor: {
    type: String,
    default: 'black',
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
      class="font-medium px-4 py-2 bg-active border rounded inline-flex items-center text-gray font-bold text-xs ease-linear transition-all duration-150"
      :class="{
        'opacity': props.active,
        'opacity-50': !props.active,
      }"
    >
      <icon
        v-if="props.showIcon"
        class="mr-2"
        :name="props.icon"
        :size="18"
        :color="props.iconColor"
      ></icon>
      <slot></slot>

      {{ props.label }}
    </button>
  </div>
</template>

<style scoped>
.bg-active {
  background-color: transparent;
}

.text-gray {
  color: #8a94a6;
}
</style>
