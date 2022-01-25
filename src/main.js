import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.css';
import 'mosha-vue-toastify/dist/style.css';
import router from './router';
import store from './store';
import { getAuth } from './includes/firebase';

let app;

const auth = getAuth();

auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App);
    app.use(router);
    app.use(store);
    app.mount('#app');
  }
});
