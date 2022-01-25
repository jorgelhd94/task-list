<script setup>
import { useStore } from 'vuex';

const store = useStore();
store.dispatch('init_login');
</script>

<template>
  <router-view></router-view>
</template>
