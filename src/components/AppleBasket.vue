<template>
  <div id="appleBasket">
    <img src="../assets/images/basket.svg" alt="" />
    <Apple
      v-for="(i, index) in this.$store.state.inBasket"
      class="apple"
      :class="'a' + (index + 1)"
      :key="index"
    ></Apple>
    <!-- elmalar düşme sırasına göre konumlanan yerlerine gider. -->
  </div>
</template>

<style scoped>
#appleBasket {
  width: 100px;
  position: absolute;
  bottom: 100px;
  right: 20%;
  display: flex;
}
.a1 {
  top: 20px;
  right: 65px;
  position: absolute;
  transform: rotate(-25deg);
  z-index: 1;
}
.a2 {
  top: 20px;
  right: 40px;
  position: absolute;
  transform: rotate(-19deg);
  z-index: 1;
}
.a3 {
  top: 20px;
  right: 15px;
  position: absolute;
  z-index: 1;
}
.a4 {
  top: 20px;
  right: -5px;
  position: absolute;
  transform: rotate(29deg);
  z-index: 1;
}
.a5 {
  top: -2px;
  right: 60px;
  position: absolute;
  transform: rotate(-9deg);
  z-index: 1;
}
.a6 {
  top: -2px;
  right: 35px;
  position: absolute;
  transform: rotate(20deg);
  z-index: 1;
}
.a7 {
  top: -2px;
  right: 15px;
  position: absolute;
  z-index: 1;
}

.a8 {
  top: -5px;
  right: -5px;
  position: absolute;
  z-index: 1;
}
.a9 {
  top: -25px;
  right: 50px;
  position: absolute;
  transform: rotate(29deg);
  z-index: 1;
}
.a10 {
  top: -25px;
  right: 25px;
  position: absolute;
  z-index: 1;
}
.a11 {
  top: -25px;
  right: 5px;
  position: absolute;
  transform: rotate(-20deg);
  z-index: 1;
}
.a12 {
  top: -45px;
  right: 30px;
  position: absolute;
  transform: rotate(-20deg);
  z-index: 1;
}
</style>
