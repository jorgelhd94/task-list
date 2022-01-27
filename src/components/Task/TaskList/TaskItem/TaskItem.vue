<script setup>
import Icon from '../../../UI/Icon/Icon.vue';

// eslint-disable-next-line no-undef
const props = defineProps({
  isDone: {
    type: Boolean,
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
        :class="[props.isDone ? 'bg-gray-400' : 'border border-gray-500']"
      >
        <Icon
          v-if="props.isDone"
          name="check"
          :size="22"
          color="white"
          custom-class="w-full inline-flex"
        />
      </div>
    </div>
    <div class="flex-auto">Hola perro</div>
    <div>Fecha</div>
  </div>
</template>
