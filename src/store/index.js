import { createStore } from "vuex";

export default createStore({
  state: {
    onTree: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    onFloor: [],
    inBasket: [],
  },
  getters: {},
  mutations: {
    SHUFFLE_APPLES_ON_TREE(state) {
      state.onTree.sort(() => 0.5 - Math.random());
    },
    DROP_APPLE(state) {
      state.onFloor.push(state.onTree.pop());
      setTimeout(() => {
        state.inBasket.push(state.onFloor.shift())
      }, 1000);
    },
    
  },
  actions: {},
});
