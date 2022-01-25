<script setup>
import Header from './Header/Header.vue';
</script>

<template>
  <div>
    <Header />
    <div class="container mx-auto px-4 w-1/2 mt-8">
      <slot />
    </div>
  </div>
</template>
