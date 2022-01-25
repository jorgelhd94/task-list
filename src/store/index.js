import { createStore } from 'vuex';
import { getAuth, signOut } from '../includes/firebase';


export default createStore({
  state() {
    return {
      userLoggedIn: false,
    };
  },
  mutations: {
    toogleAuth(state) {
      state.userLoggedIn = !state.userLoggedIn;
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
      commit('toogleAuth');
    },
  }
});
