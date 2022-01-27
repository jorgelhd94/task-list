<script setup>
import feather from 'feather-icons';

// eslint-disable-next-line no-undef
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: 'black',
  },
  size: {
    type: Number,
    required: true,
  },
  customClass: {
    type: String,
    default: '',
  },
});

function iconSvg() {
  return feather.icons[props.name].toSvg({
    width: props.size,
    height: props.size,
    color: props.color,
    class: props.customClass,
  });
}
</script>

<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <span v-html="iconSvg()"></span>
</template>
