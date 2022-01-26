<script setup>
import { onMounted } from 'vue';

// eslint-disable-next-line no-undef
const props = defineProps({
  taskText: {
    type: String,
    required: true,
  },
});

// eslint-disable-next-line no-undef
const emit = defineEmits(['updateText']);

onMounted(() => {
  setCursorLast();
});

function setCursorLast() {
  let tag = document.getElementById('editor');

  if (tag.childNodes.length > 0) {
    // Creates range object
    let setpos = document.createRange();

    // Creates object for selection
    let set = window.getSelection();

    // Set start position of range
    setpos.setStart(tag.childNodes[0], tag.childNodes[0].length);

    // Collapse range within its boundary points
    // Returns boolean
    setpos.collapse(true);

    // Remove all ranges set
    set.removeAllRanges();

    // Add range with respect to range object.
    set.addRange(setpos);
  }

  // Set cursor on focus
  tag.focus();
}

function inputEditor(event) {
emit('updateText', event.target.textContent)
}
</script>

<template>
  <div
    id="editor"
    class="w-full px-2 focus:border-0"
    data-placeholder="Type to add new task"
    contenteditable
    @input="inputEditor"
  >
    {{ props.taskText }}
  </div>
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
