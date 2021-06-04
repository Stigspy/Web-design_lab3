import { createStore } from "vuex";
const store = createStore({
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  actions: {},
  getters: {
    COUNT_STATE(state) {
      return state.count;
    },
  },
});

export default store;
