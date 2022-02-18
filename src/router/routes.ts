import { RouteRecordRaw } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue"),
  },
] as RouteRecordRaw[];

export { routes };