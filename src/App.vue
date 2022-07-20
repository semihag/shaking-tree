<template>
  <div>
    <button
      :disabled="shaking || this.$store.state.onTree.length == 0"
      @click="shakeTree"
    >
      Shake Tree
    </button>
    <Tree :class="{ shake: shaking }" />
    <AppleBasket />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
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
      shaking: false,
      n: 2,
    };
  },
  computed: {
    ...mapGetters({
      onTree: "GET_APPLES_ON_TREE",
    }),
  },
  methods: {
    shakeTree() {
      if (this.$store.state.onTree.length == 0) {
        return alert("No Apples Left!");
      } else {
        const self = this;
        this.shaking = true;
        setTimeout(() => {
          self.shaking = false;
          for (let i = 1; i <= self.n; i++) {
            setTimeout(() => {
              self.$store.commit("DROP_APPLE");
            }, i * 500); //elmalar farklı zamanda düşsün
          }
          self.n = self.n == 3 ? 2 : 3; //her sallantıdan sonra sırasıyla 2 veya 3 elma düşmesi sağlanır
        }, 3000);
        //3 saniye ağacın sallanma süresi.
      }
    },
  },
  created() {
    this.$store.commit("CREATE_APPLES_ON_TREE");
    //Elmalar her zaman farklı sırada düşmesi için sıralı diziyi karıştırdım.
  },
};
</script>

<style lang="scss">
$general-font: "MedievalSharp", cursive;
#app {
  font-family: $general-font;
  text-align: center;
  margin-top: 60px;

  button {
    position: absolute;
    top: 700px;
    left: 5%;
    background-color: green;
    color: aliceblue;
    border-radius: 5px;
    font-family: $general-font;
    font-size: 26px;
    cursor: pointer;

    &:disabled {
      background-color: gray;
      cursor: not-allowed;
    }
  }
}
</style>
