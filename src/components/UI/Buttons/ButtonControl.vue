<script setup>
import Icon from '../Icon/Icon.vue';
// eslint-disable-next-line no-undef
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  customClass: {
    type: String,
    default: '',
  },
  iconClass: {
    type: String,
    default: '',
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
      class="font-medium px-2 lg:px-4 py-2 rounded inline-flex items-center text-base font-bold text-xs ease-linear transition-all duration-150"
      :class="[props.active ? 'opacity' : 'opacity-50', props.customClass]"
    >
      <icon
        v-if="props.showIcon"
        class="lg:mr-2"
        :class="props.iconClass"
        :name="props.icon"
        :size="24"
        :color="props.iconColor"
      ></icon>

      <span class="hidden lg:inline">
        {{ props.label }}
      </span>
    </button>
  </div>
</template>

<style scoped>
.bg-active {
  background-color: #eaf0f5;
}
</style>
