<script setup>
import ButtonOpen from '../../../UI/Buttons/ButtonOpen.vue';
import ButtonOption from '../../../UI/Buttons/ButtonOption.vue';
</script>

<template>
  <div class="flex flex-row border-t border-gray-200 w-full p-2 bg-footer justify-start">
    <!-- Open Button -->
    <div class="flex-none mr-8">
      <ButtonOpen
        label="Open"
        icon="maximize-2"
        icon-color="#4E5D78"
        :active="true"
      />
    </div>
    <!-- Options -->
    <div class="flex-none">
      <div class="flex flex-row">
        <ButtonOption
          label="Today"
          icon="calendar"
          icon-color="#8A94A6"
          :active="false"
          class="mr-1"
        />
        <ButtonOption
          label="Public"
          icon="unlock"
          icon-color="#8A94A6"
          :active="false"
          class="mr-1"
        />
        <ButtonOption
          label="Normal"
          icon="sun"
          icon-color="#8A94A6"
          :active="false"
          class="mr-1"
        />
        <ButtonOption label="Estimation" :show-icon="false" :active="false">
          <span class="mr-1 border border-gray-400 rounded-xl px-1 text-gray-400">0</span>
        </ButtonOption>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-footer {
  background-color: #fafbfb;
}
</style>
