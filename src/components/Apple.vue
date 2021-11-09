<template>
  <div>
    <img :class="{ drop: dropped }" src="../assets/fresh-apple.svg" />
  </div>
</template>

<script></script>

<style scoped>
img {
  width: 40px;
  height: 30px;
}
.apple {
  animation: drop ;
  animation-duration: 2s;

}
@keyframes drop {
  to {
    top: 720px;
  }
}
</style>
