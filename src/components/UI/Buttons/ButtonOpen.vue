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
      class="font-medium px-4 py-2 bg-active rounded inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
      :class="{
        opacity: props.active,
        'opacity-50': !props.active,
      }"
    >
      <icon
        class="mr-2"
        :name="props.icon"
        :size="18"
        :color="props.iconColor"
      ></icon>
      {{ props.label }}
    </button>
  </div>
</template>

<style scoped>
.bg-active {
  background-color: #eaf0f5;
}
</style>
