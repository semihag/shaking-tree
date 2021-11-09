<template>
  <div id="tree">
    <img src="../assets/tree_001.svg" alt="" />
    <Apple v-for="i in 10" class="apple" :class="'a' + i" :key="i"></Apple>
  </div>
</template>

<script>
import Apple from "./Apple.vue";

export default {
  components: {
    Apple,
  },
};
</script>

<style scoped>
#tree {
  width: 700px;
  height: 800px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -400px;
  margin-left: -350px;
}
.apple {
  position: absolute;
  z-index: 1;
}
.a1 {
  top: 80px;
  left: 300px;
  transform: rotate(9deg);
}
.a2 {
  top: 100px;
  left: 400px;
  transform: rotate(4deg);
}
.a3 {
  top: 200px;
  left: 150px;
  transform: rotate(-4deg);
}
.a4 {
  top: 200px;
  left: 280px;
  transform: rotate(-15deg);
}
.a5 {
  top: 210px;
  left: 400px;
}
.a6 {
  top: 190px;
  left: 550px;
}
.a7 {
  top: 300px;
  left: 90px;
}
.a8 {
  top: 330px;
  left: 200px;
  transform: rotate(-9deg);
}
.a9 {
  top: 300px;
  left: 350px;
  transform: rotate(15deg);
}
.a10 {
  top: 280px;
  left: 580px;
}
.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
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
