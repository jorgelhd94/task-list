<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import ButtonControl from '../../../UI/Buttons/ButtonControl.vue';
import ButtonOption from '../../../UI/Buttons/ButtonOption.vue';

// eslint-disable-next-line no-undef
const props = defineProps({
  isTextEmpty: {
    type: Boolean,
    required: true,
  },
});

// eslint-disable-next-line no-undef
const emit = defineEmits(['clickCancel', 'clickSubmit']);

const store = useStore();
const isCreating = computed(() => store.state.task.isCreating);
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
        :active="!props.isTextEmpty"
      />
    </div>
    <!-- Options -->
    <div class="flex-auto">
      <div class="flex flex-row flex-wrap items-center">
        <ButtonOption
          label="Today"
          icon="calendar"
          icon-color="#8A94A6"
          :active="!props.isTextEmpty"
          class="mr-1 md:mb-0 sm:mb-2"
        />
        <ButtonOption
          label="Public"
          icon="unlock"
          icon-color="#8A94A6"
          :active="!props.isTextEmpty"
          class="mr-1 md:mb-0 sm:mb-2"
        />
        <ButtonOption
          label="Normal"
          icon="sun"
          icon-color="#8A94A6"
          :active="!props.isTextEmpty"
          class="mr-1 md:mb-0 sm:mb-2"
        />
        <ButtonOption
          label="Estimation"
          :show-icon="false"
          :active="!props.isTextEmpty"
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
          @click="emit('clickCancel')"
        />
        <ButtonControl
          :label="props.isTextEmpty ? 'Ok' : 'Add'"
          :is-loading="isCreating"
          :show-icon="true"
          :icon="props.isTextEmpty ? 'x' : 'plus'"
          icon-color="#ffffff"
          icon-class="inline lg:hidden "
          custom-class="bg-blue-700 text-white"
          :active="true"
          @click="props.isTextEmpty ? emit('clickCancel') : emit('clickSubmit')"
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
