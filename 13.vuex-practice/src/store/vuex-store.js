import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  actions: {
    incrementGradually(context) {
      setTimeout(() => {
        context.commit("increment");
      }, 2000);
    },
  },
  mutations: {
    increment(state, value = 1) {
      console.log("increment in store");
      state.counter = state.counter + value;
    },
    decrement(state, value = 1) {
      console.log("decrement in store");
      state.counter = state.counter - value;
    },
  },
  getters: {
    getCounter(state) {
      return state.counter;
    },
    normalizedCounter(_, getters) {
      return getters.getCounter * 0.1 - 1;
    },
  },
});

export default store;
