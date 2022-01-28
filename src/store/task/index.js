import {
  getAuth,
  taskCollection,
  db,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
} from '../../includes/firebase';

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
    async updateTask(state, payload) {
      const taskRef = doc(db, 'tasks', payload.id);

      await updateDoc(taskRef, {
        task: payload.text,
        modified_on: new Date().toString(),
        uid: getAuth().currentUser.uid,
      });
    },
    async deleteTask(state, payload) {
      await deleteDoc(doc(db, 'tasks', payload));
    },
    async changeState(state, payload) {
      const taskRef = doc(db, 'tasks', payload.id);

      await updateDoc(taskRef, {
        isDone: payload.isDone,
      });
    },
  },
};
