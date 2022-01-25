<script setup>
import { ref } from 'vue';
import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';
import {
  getAuth,
  createUserWithEmailAndPassword,
  userCollection,
  doc,
  setDoc,
} from '../../includes/firebase';
import { showMsg } from '../../includes/utils';
import ButtonSubmit from '../UI/Buttons/ButtonSubmit.vue';

// eslint-disable-next-line no-undef
const emit = defineEmits(['changeToLogin']);

const schema = yup.object({
  name: yup.string().required().min(3).max(50),
  email: yup.string().required().email(),
  password: yup.string().required().min(6).max(32),
  repeat: yup
    .string()
    .required()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

const { errors, handleSubmit } = useForm({
  validationSchema: schema,
});

const { value: name } = useField('name');
const { value: email } = useField('email');
const { value: password } = useField('password');
const { value: repeat } = useField('repeat');

const loading = ref(false);

const onSubmit = handleSubmit(async (values) => {
  const auth = getAuth();
  let user = null;

  loading.value = true;
  await createUserWithEmailAndPassword(auth, values.email, values.password)
    .then((userCredential) => {
      user = userCredential.user;
    })
    .catch((error) => {
      const errorMessage = error.message;
      showMsg('Error!!\n' + errorMessage, 'danger');
    });

  if (user) {
    try {
      await setDoc(doc(userCollection, user.uid), {
        name: values.name,
      });

      showMsg('User was registred successfully!!', 'info');
      emit('changeToLogin');
    } catch (e) {
      showMsg('Error adding document', 'danger');
    }
  }

  loading.value = false;
});
</script>

<template>
  <form @submit="onSubmit">
    <div class="w-full mb-3">
      <label
        class="block uppercase text-gray-600 text-xs font-bold mb-2"
        for="name"
      >
        Name </label
      ><input
        v-model="name"
        name="name"
        type="text"
        class="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
        placeholder="Name"
      />
      <span class="text-red-500 text-sm">{{ errors.name }}</span>
    </div>
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
    <div class="w-full mb-8">
      <label
        class="block uppercase text-gray-600 text-xs font-bold mb-2"
        for="repeat"
        >Repeat password</label
      ><input
        v-model="repeat"
        type="password"
        name="repeat"
        class="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
        placeholder="Repeat password"
      />
      <span class="text-red-500 text-sm">{{ errors.repeat }}</span>
    </div>
    <div class="w-full text-center mb-3">
      <ButtonSubmit label="Sign Up" :loading="loading" />
    </div>
  </form>
</template>
