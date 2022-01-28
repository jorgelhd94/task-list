import { createStore } from 'vuex';
import { getAuth, signOut } from '../includes/firebase';
import task from './task';

export default createStore({
  modules: {
    task,
  },
  state: {
    userLoggedIn: false,
  },
  mutations: {
    toogleAuth(state) {
      state.userLoggedIn = !state.userLoggedIn;
    },
    setLogout(state) {
      state.userLoggedIn = false;
    },
  },
  actions: {
    init_login({ commit }) {
      const user = getAuth().currentUser;
      if (user) {
        commit('toogleAuth');
      }
    },
    async signout({ commit }) {
      await signOut(getAuth());
      commit('setLogout');
    },
  },
});
