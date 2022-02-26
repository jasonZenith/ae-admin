import "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    title: string;

    // 访问权限
    permission?: string[];
    // 是否认证
    auth?: boolean;
    // 是否选中
    isClick?: boolean;
    // 菜单标题是否显示
    icon?: string;
  }
}
