import { createApp } from "vue";
import App from "./App.vue";
import VueTyper from "vue3-typer";
import VueKinesis from "vue-kinesis";

const app = createApp(App);

app.use(VueKinesis);
app.use(VueTyper);
app.mount("#app");
