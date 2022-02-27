import { RouteRecordRaw } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/auth/Login.vue"),
  },
  {
    path: "/:any(.*)",
    name: "notFound",
    component: () => import("@/viewsComps/error/VoidError.vue"),
  },
] as RouteRecordRaw[];

export { routes };
