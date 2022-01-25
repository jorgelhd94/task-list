<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';
import { getAuth, signInWithEmailAndPassword } from '../../includes/firebase';
import { showMsg } from '../../includes/utils';
import ButtonSubmit from '../UI/Buttons/ButtonSubmit.vue';

const store = useStore();
const router = useRouter();

const schema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required(),
});

const { errors, handleSubmit } = useForm({
  validationSchema: schema,
});

const { value: email } = useField('email');
const { value: password } = useField('password');

const loading = ref(false);

const onSubmit = handleSubmit(async (values) => {
  const auth = getAuth();
  loading.value = true;

  await signInWithEmailAndPassword(auth, values.email, values.password)
    .then(() => {
      // Signed in
      store.commit('toogleAuth');
      showMsg('Welcome!!', 'info');
      
      router.push({
        name: 'home',
      });
      // ...
    })
    .catch((error) => {
      const errorMessage = error.message;
      showMsg('Error!!\n' + errorMessage, 'danger');
    });

  loading.value = false;
});
</script>

<template>
  <form @submit="onSubmit">
    <div class="w-full mb-3">
      <label
        class="block uppercase text-gray-600 text-xs font-bold mb-2"
        for="email"
        >Email</label
      ><input
        v-model="email"
        name="email"
        type="email"
        class="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
        placeholder="Email"
      />
      <span class="text-red-500 text-sm">{{ errors.email }}</span>
    </div>
    <div class="w-full mb-3">
      <label
        class="block uppercase text-gray-600 text-xs font-bold mb-2"
        for="password"
        >Password</label
      ><input
        v-model="password"
        name="password"
        type="password"
        class="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
        placeholder="Password"
      />
      <span class="text-red-500 text-sm">{{ errors.password }}</span>
    </div>
    <div class="relative w-full text-center mb-3">
      <ButtonSubmit label="Sign In" :loading="loading" />
    </div>
  </form>
</template>
