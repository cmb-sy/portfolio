import { createApp } from "vue";
import App from "./App.vue";
import VWave from "v-wave";

const app = createApp(App);

app.use(VWave, {
  color: "red",
  initialOpacity: 0.5,
  easing: "ease-in",
});

app.mount("#app");
