import { createApp } from "vue";
import App from "./App.vue";
import "@/styles/global.scss";
import { setupRouter } from "@/router";
import { setupPlugins } from "@/plugins";
import { registerGlobComp } from "@/components/registGlobComp";

const bootstrap = async () => {
  const app = createApp(App);
  setupRouter(app);
  registerGlobComp(app);
  setupPlugins(app);
  app.mount("#app");
};

bootstrap();
