<template>
  <div id="tree">
    <img src="../assets/images/tree.svg" alt="" />
    <Apple
      v-for="i in TOTAL_APPLE_COUNT"
      :key="i"
      :style="{
        top : topPositions[i-1] + 'px',
        left: leftPositions[i-1]+ 'px',
        display: APPLES_IN_BASKET.some((x) => x == i) ? 'none' : '',
      }"
      :class="[
        DROPPED_APPLES.some((x) => x === i) ? 'dropped-apple' : '',
      ]"
    />

  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Apple from "./Apple.vue";

export default {
  data() {
    return {
      topPositions: [],
      leftPositions: [],
    };
  },
  computed: {
    ...mapGetters([
      "TOTAL_APPLE_COUNT",
      "APPLES_ON_TREE",
      "DROPPED_APPLES",
      "APPLES_IN_BASKET",
    ]),
  },
  components: { Apple },
  created() {
    for (let i=0;i<this.TOTAL_APPLE_COUNT;i++) {
      this.topPositions.push(150 + Math.random() * 100);
      this.leftPositions.push(50 + Math.random() * 550);
    }
  },
};
</script>

<style lang="scss">
@import "../assets/css/apple.scss";
#tree {
  width: 700px;
  height: 800px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -400px;
  margin-left: -350px;
}

.shake {
  animation: shake 3s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
}
@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }
  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }
  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }
  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
