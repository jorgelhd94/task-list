<script setup>
import Layout from '../components/Layout/Layout.vue';
import TaskManager from '../components/Task/TaskManager/TaskManager.vue';
</script>

<template>
  <div>
    <Layout>
      <div class="flex flex-row mb-2">
        <h1 class="text-2xl">Tasks</h1>
      </div>
      <TaskManager />
    </Layout>
  </div>
</template>
