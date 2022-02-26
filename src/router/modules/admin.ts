import { RouteRecordRaw } from "vue-router";

export default {
  name: "admin",
  path: "/admin",
  component: () => import("@/layouts/Admin.vue"),

  children: [
    {
      name: "admin.user",
      path: "user",
      component: () => import("@/views/admin/User.vue"),
    },
  ],
} as RouteRecordRaw;
