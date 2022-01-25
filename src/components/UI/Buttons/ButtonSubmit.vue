<script setup>
// eslint-disable-next-line no-undef
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  loading: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <div>
    <button
      class="bg-purple-800 text-white active:bg-purple-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
      type="submit"
      :disabled="loading"
    >
      <i v-show="loading" class="fas fa-spinner fa-spin mr-1"></i>
      {{ props.label }}
    </button>
  </div>
</template>

<style scoped>
button[disabled] {
  cursor: not-allowed;
}
</style>
