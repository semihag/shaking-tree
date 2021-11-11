import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import Apple from "./components/Apple.vue";

const app = createApp(App);

app.use(store);
app.component("Apple", Apple);//Apple componentı hem sepette hem ağaçta görüneceğinden global tanımladım.
app.mount("#app");
