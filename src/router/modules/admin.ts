import { RouteRecordRaw } from "vue-router";

export default {
  name: "admin",
  path: "/admin",
  redirect: "/admin/user",
  component: () => import("@/layouts/Admin.vue"),
  meta: {
    isClick: true,
    title: "Dashboard",
    icon: "fab fa-delicious",
  },
  children: [
    {
      name: "admin.user",
      path: "user",
      component: () => import("@/views/admin/User.vue"),
      meta: {
        auth: true,
        isClick: true,
        title: "分析页",
      },
    },
  ],
} as RouteRecordRaw;
