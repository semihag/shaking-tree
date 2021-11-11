import { createStore } from "vuex";

export default createStore({
  state: {
    onTree: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    onFloor: [],
    inBasket: [],
    droppedApples: [],
  },
  getters: {
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
    SHUFFLE_APPLES_ON_TREE(state) {
      state.onTree.sort(() => 0.5 - Math.random()); 
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
