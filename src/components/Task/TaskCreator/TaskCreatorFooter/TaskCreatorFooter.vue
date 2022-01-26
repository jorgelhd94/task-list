<script setup>
import { ref } from 'vue';
import ButtonControl from '../../../UI/Buttons/ButtonControl.vue';
import ButtonOption from '../../../UI/Buttons/ButtonOption.vue';

const submitLabel = ref('Ok');
const submitIcon = ref('x');
</script>

<template>
  <div
    class="flex flex-wrap flex-row border-t border-gray-200 w-full md:p-2 sm:pb-0 xs:pb-2 bg-footer justify-start items-center"
  >
    <!-- Open Button -->
    <div class="flex-none mr-2 lg:mr-8 md:mb-0 sm:mb-2">
      <ButtonControl
        label="Open"
        icon="maximize-2"
        icon-color="#4E5D78"
        custom-class="bg-gray-200"
        :active="false"
      />
    </div>
    <!-- Options -->
    <div class="flex-auto">
      <div class="flex flex-row flex-wrap items-center">
        <ButtonOption
          label="Today"
          icon="calendar"
          icon-color="#8A94A6"
          :active="false"
          class="mr-1 md:mb-0 sm:mb-2"
        />
        <ButtonOption
          label="Public"
          icon="unlock"
          icon-color="#8A94A6"
          :active="false"
          class="mr-1 md:mb-0 sm:mb-2"
        />
        <ButtonOption
          label="Normal"
          icon="sun"
          icon-color="#8A94A6"
          :active="false"
          class="mr-1 md:mb-0 sm:mb-2"
        />
        <ButtonOption
          label="Estimation"
          :show-icon="false"
          :active="false"
          class="md:mb-0 sm:mb-2"
        >
          <span
            class="lg:mr-2 border-2 border-gray-400 rounded-full px-2 text-gray-400 text-sm"
            >0</span
          >
        </ButtonOption>
      </div>
    </div>
    <!-- Submit -->
    <div class="flex-auto">
      <div class="flex flex-row flex-wrap justify-end">
        <ButtonControl
          label="Cancel"
          :show-icon="false"
          :active="true"
          custom-class="bg-gray-200"
          class="mr-2 hidden lg:inline"
        />
        <ButtonControl
          :label="submitLabel"
          :show-icon="true"
          :icon="submitIcon"
          icon-color="#ffffff"
          icon-class ="inline lg:hidden "
          custom-class="bg-blue-700 text-white"
          :active="true"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-footer {
  background-color: #fafbfb;
}
</style>
