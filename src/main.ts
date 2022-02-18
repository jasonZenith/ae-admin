import { createApp } from "vue";
import App from "./App.vue";
import { setupRouter } from "@/router";
import { setupPlugins } from "@/plugins";

const app = createApp(App);
setupRouter(app);
setupPlugins(app);
app.mount("#app");
