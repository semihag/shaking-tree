<template>
  <div>
    <button :disabled="animated" @click="shakeTree">Shake Tree</button>
    <Tree :class="{ shake: animated }"> </Tree>
    <AppleBasket></AppleBasket>
    <p>{{ this.$store.state }}</p>
  </div>
</template>

<script>
import Tree from "./components/Tree.vue";
import AppleBasket from "./components/AppleBasket.vue";

export default {
  name: "App",
  components: {
    Tree,
    AppleBasket,
  },
  data() {
    return {
      animated: false,
      dropped: false,
    };
  },
  methods: {
    shakeTree() {
      this.animated = true;
      setTimeout(() => {
        this.animated = false;
      }, 3000);
      this.$store.commit("DROP_APPLE");
    },
    dropApples() {},
    createAppleOnTrees() {},
  },
  created() {
    this.$store.commit("SHUFFLE_APPLES_ON_TREE");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button {
  position: absolute;
  top: 700px;
  left: 5%;
  background-color: green;
  color: aliceblue;
  border-radius: 5px;
  font-family: fantasy;
  font-size: 26px;
  cursor: pointer;

}
button:disabled{
  background-color: gray;
}
p {
  position: absolute;
  top: 70%;
}
</style>
