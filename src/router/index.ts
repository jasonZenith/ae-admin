import { App } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";
import autoload from "./autoload";
// import { autoRoutes } from "./autoloads";
import guard from "./guard";

const router = createRouter({
  history: createWebHistory(),
  routes: [...routes, ...autoload],
});

export function setupRouter(app: App) {
  guard(router);
  app.use(router);
}
