import { createStore } from "vuex";

export default createStore({
  state: {
    totalAppleCount : 0,
    onTree: [],
    onFloor: [],
    inBasket: [],
    droppedApples: [],
  },
  getters: {
    TOTAL_APPLE_COUNT(state) {
      return state.totalAppleCount;
    },
    APPLES_ON_TREE(state) {
      return state.onTree;
    },
    APPLES_ON_FLOOR(state) {
      return state.onFloor;
    },
    DROPPED_APPLES(state) {
      return state.droppedApples;
    },
    APPLES_IN_BASKET(state) {
      return state.inBasket;
    },
  },
  mutations: {
      CREATE_APPLES_ON_TREE(state) {
      state.totalAppleCount = Math.floor(Math.random() * 10 + 10);
      for (var i = 1; i <= state.totalAppleCount; i++) {
        state.onTree.push(i);
      }
    },
    DROP_APPLE(state) {
      let droppedApple = state.onTree.pop();
      state.droppedApples.push(droppedApple);
      state.onFloor.push(droppedApple);

      setTimeout(() => {
        state.inBasket.push(state.onFloor.shift());
      }, 2000);
      //elmaların ağaçtan düşüşü 1 saniye sürdüğü ve 1 saniyede yerde durduğu için toplam 2sn
    },
  },
  actions: {},
});
