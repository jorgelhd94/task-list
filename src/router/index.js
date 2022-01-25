import { createRouter, createWebHistory } from 'vue-router';
import store from '../store';
import Auth from '../views/Auth.vue';
import Home from '../views/Home.vue';

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/login', name: 'login', component: Auth },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from) => {
//   // ...
//   // explicitly return false to cancel the navigation
//   return false
// })

router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && !store.state.userLoggedIn) {
    next({ name: 'login' });
  } else next();
});

export default router;
