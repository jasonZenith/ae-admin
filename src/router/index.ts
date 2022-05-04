import { App } from "vue";
import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import { routes } from "./routes";
import autoload from "./autoload";
import { apiUserStore } from "@/store";
// import { autoRoutes } from "./autoloads";
// import guard from "./guard";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [...routes, ...autoload],
});

export function setupRouter(app: App) {
  // guard(router);
  apiUserStore().getUserInfo();
  app.use(router);
}
