import { reactive } from "vue";

export interface MenuItem {
  title: string;
  icon?: string;
  active?: boolean;
}

export interface Menu extends MenuItem {
  children?: MenuItem[];
}

export const menus: Menu[] = reactive([
  {
    title: "错误页面",
    icon: "fa-solid fa-bug",
    active: true,
    children: [
      {
        title: "403错误",
        active: true,
      },
      {
        title: "404错误",
      },
    ],
  },
  {
    title: "其他页面",
    icon: "fab fa-artstation",
    children: [
      {
        title: "其他",
      },
    ],
  },
]);
