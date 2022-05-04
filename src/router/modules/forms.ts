import { RouteRecordRaw } from "vue-router";

export default {
  name: "forms",
  path: "/forms",
  component: () => import("@/layouts/Admin.vue"),
  meta: {
    isClick: false,
    icon: "fab fa-buffer",
    title: "表单页面",
    auth: true,
  },
  children: [
    {
      name: "forms.basicform",
      path: "basicform",
      component: () => import("@/views/forms/BasicForm.vue"),
      meta: {
        isClick: false,
        title: "基本表单",
      },
    },
    {
      name: "forms.simpleform",
      path: "simpleform",
      component: () => import("@/views/forms/SimpleForm.vue"),
      meta: {
        isClick: false,
        title: "简易表单",
      },
    },
  ],
} as RouteRecordRaw;
