<script setup>
import ButtonControl from '../../../UI/Buttons/ButtonControl.vue';
import ButtonOption from '../../../UI/Buttons/ButtonOption.vue';

// eslint-disable-next-line no-undef
const props = defineProps({
  isTextEqual: {
    type: Boolean,
    required: true,
  },
  isTextEmpty: {
    type: Boolean,
    required: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
});

// eslint-disable-next-line no-undef
const emit = defineEmits(['clickCancel', 'clickDelete', 'clickSubmit']);

function submitButton() {
  if (props.isTextEmpty) {
    emit('clickDelete');
  } else if (props.isTextEqual) {
    emit('clickCancel');
  } else {
    emit('clickSubmit');
  }
}

// Customize submit button
function getLabel() {
  let label = 'Save';
  if (props.isTextEmpty) {
    label = 'Delete';
  } else if (props.isTextEqual) {
    label = 'Ok';
  }

  return label;
}

function getIcon() {
  let label = 'save';
  if (props.isTextEmpty) {
    label = 'trash';
  } else if (props.isTextEqual) {
    label = 'x';
  }

  return label;
}

function getClass() {
  const colorBg = props.isTextEmpty ? 'bg-red-600' : 'bg-blue-700';
  return colorBg + ' text-white';
}
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
          class="mr-1 md:mb-0 sm:mb-2"
        >
          <span
            class="lg:mr-2 border-2 border-gray-400 rounded-full px-2 text-gray-400 text-sm"
            >0</span
          >
        </ButtonOption>
        <ButtonOption
          v-if="!isTextEmpty"
          label="Delete"
          icon="trash"
          icon-color="rgb(220 38 38)"
          :active="!props.isTextEmpty"
          class="md:mb-0 sm:mb-2"
          @click="emit('clickDelete')"
        />
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
          :label="getLabel()"
          :is-loading="loading"
          :show-icon="true"
          :icon="getIcon()"
          icon-color="#ffffff"
          icon-class="inline lg:hidden "
          :custom-class="getClass()"
          :active="true"
          @click="submitButton"
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
