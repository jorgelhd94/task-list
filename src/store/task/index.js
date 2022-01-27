import { getAuth, taskCollection, addDoc } from '../../includes/firebase';

export default {
  namespaced: true,
  state() {
    return {
      isCreating: false,
    };
  },
  getters: {},
  mutations: {
    toogleCreating(state) {
      state.isCreating = !state.isCreating;
    },
  },
  actions: {
    async createTask({ commit }, payload) {
      commit('toogleCreating');
      const task = {
        task: payload,
        isDone: false,
        modified_on: new Date().toString(),
        uid: getAuth().currentUser.uid,
      };
      await addDoc(taskCollection, {
        ...task,
      });
      commit('toogleCreating');
    },
  },
};
