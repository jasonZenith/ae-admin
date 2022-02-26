import { RouteRecordRaw } from "vue-router";

export default {
  name: "editor",
  path: "/editor",
  component: () => import("@/layouts/Editor.vue"),
  meta: {
    isClick: false,
    title: "编辑器",
    icon: "fab fa-artstation",
  },
  children: [
    {
      name: "markdown",
      path: "markdown",
      component: () => import("@/views/editor/Markdown.vue"),
      meta: {
        isClick: false,
        title: "Markdown",
      },
    },
  ],
} as RouteRecordRaw;
