<script setup>
import { ref } from 'vue';
import Button from '../components/UI/Buttons/Button.vue';
import Login from '../components/Auth/Login.vue';
import Register from '../components/Auth/Register.vue';

let login = ref(true);

function changeSign() {
  login.value = !login.value;
}
</script>

<template>
  <div
    class="flex flex-wrap w-full overflow-y-hidden gradient py-8 items-center justify-center"
  >
    <div
      class="flex-none relative w-full md:w-2/3 lg:w-1/3 bg-gray-200 rounded-lg shadow"
    >
      <div class="flex flex-col p-8 items-center">
        <img src="../assets/img/iconapp.svg" width="50" alt="Logo" />
        <h1>Simple Task</h1>

        <div class="flex-1 mt-4">
          <div class="flex flex-row">
            <Button
              label="Sign In"
              icon="key"
              :active="login"
              @click="changeSign"
            />
            <Button
              label="Sign Up"
              icon="user-plus"
              :active="!login"
              @click="changeSign"
            />
          </div>
        </div>

        <div class="flex-auto w-full mt-4">
          <hr class="border-b border-gray-300" />
        </div>

        <div v-show="login" class="flex-auto w-full mt-4">
          <Login />
        </div>

        <div v-show="!login" class="flex-auto w-full mt-4">
          <Register @change-to-login="changeSign" />
        </div>
      </div>

      <footer class="flex-auto mb-4">
        <p class="text-sm text-center text-gray-500 mb-3">
          Created by
          <a
            href="https://github.com/jorgelhd94/"
            class="hover:text-purple-800"
            target="_blank"
            >JCode Studio</a
          >
        </p>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.gradient {
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(334deg, #6b97f7, #343286, #1b0846);

  background-size: 180% 180%;
  animation: gradient-animation 6s ease infinite;
}

@keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
