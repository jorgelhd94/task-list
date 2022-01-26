<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  document.getElementById('editor').focus();
});
</script>

<template>
  <div
    id="editor"
    class="w-full px-2 focus:border-0"
    data-placeholder="Type to add new task"
    contenteditable
  ></div>
</template>

<style scoped>
#editor:hover {
  cursor: text;
}
#editor:focus {
  outline: none;
  color: #04142f;
}

#editor:empty:before {
  content: attr(data-placeholder);
  color: #8a94a6;
}
</style>
