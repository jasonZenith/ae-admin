import { MenuItemParams } from "#/menu";
import { defineStore } from "pinia";
import { RouteRecordNormalized, useRouter } from "vue-router";
import { router } from "@/router";

const menuStore = defineStore("menuStore", {
  state: () => {
    return {
      // routes: getRoutes(),
      menus: [] as RouteRecordNormalized[],
    };
  },
  // getters: {
  //   get(state) {
  //     return state.username;
  //   },
  // },
  actions: {
    menuInit() {
      this.menus = this.getRoutes();
      return this.menus;
    },

    // 通过路由获取菜单项
    getRoutes() {
      const routes = router
        .getRoutes()
        .filter((route) => route.children.length)
        .map((route) => {
          return route;
        });
      return routes;
    },
  },
});

export default menuStore;
