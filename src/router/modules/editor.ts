import { RouteRecordRaw } from "vue-router";

export default {
  name: "editor",
  path: "/editor",
  component: () => import("@/layouts/Editor.vue"),
  children: [
    {
      name: "markdown",
      path: "markdown",
      component: () => import("@/views/editor/Markdown.vue"),
    },
  ],
} as RouteRecordRaw;
