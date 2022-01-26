<script setup>
import Header from './Header/Header.vue';
</script>

<template>
  <div>
    <Header />
    <div class="container mx-auto px-4 lg:w-3/4 sm:w-full mt-8">
      <slot />
    </div>
  </div>
</template>
