import "vue-router";
import { boolean } from "yup";

declare module "vue-router" {
  interface RouteMeta {
    auth?: boolean;

    // 路由是否在菜单显示
    show?: boolean;
    // 菜单标题是否显示
    title?: boolean;
    icon: string;
  }
}
