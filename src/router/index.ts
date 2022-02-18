import { App } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";
import autoload from "./autoload";

const router = createRouter({
  history: createWebHistory(),
  routes: [...routes, ...autoload],
});

export function setupRouter(app: App) {
  app.use(router);
}
