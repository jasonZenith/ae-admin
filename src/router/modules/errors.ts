import { RouteRecordRaw } from "vue-router";

export default {
  name: "error",
  path: "/error",
  component: () => import("@/layouts/Admin.vue"),
  meta: {
    isClick: false,
    icon: "fa-solid fa-bug",
    title: "error错误页面",
    auth: true,
  },
  children: [
    {
      name: "error.403",
      path: "403",
      component: () => import("@/views/errors/403.vue"),
      meta: {
        isClick: false,
        title: "403错误",
      },
    },
    {
      name: "error.404",
      path: "404",
      component: () => import("@/views/errors/404.vue"),
      meta: {
        isClick: false,
        title: "404错误",
      },
    },
    {
      name: "error.500",
      path: "500",
      component: () => import("@/views/errors/500.vue"),
      meta: {
        isClick: false,
        title: "500错误",
      },
    },
  ],
} as RouteRecordRaw;
