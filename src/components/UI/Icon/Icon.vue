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
});

function iconSvg() {
  return feather.icons[props.name].toSvg({
    width: props.size,
    height: props.size,
    color: props.color,
  });
}
</script>

<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <span v-html="iconSvg()"></span>
</template>
