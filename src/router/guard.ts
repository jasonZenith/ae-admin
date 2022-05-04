import { CacheEnum } from "@/enums/cacheEnum";
import { apiUserStore, historyTabStore } from "@/store";
import utils from "@/utils";
import { RouteLocationNormalized, Router } from "vue-router";

class Guard {
  constructor(private router: Router) {}
  public run() {
    this.router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
      if (this.isLogin(to, this.hasToken()) === false) {
        return { name: "login" };
      }
      // await this.getUserInfo();
      historyTabStore().addHistoryTab(to);
    });
  }

  private hasToken() {
    const token = utils.store.get(CacheEnum.TOKEN_NAME);
    return token;
  }

  private getUserInfo() {
    if (this.hasToken()) {
      const userInfo = apiUserStore().getUserInfo();
      return userInfo;
    }
  }

  private isLogin(route: RouteLocationNormalized, token: any) {
    const state = Boolean(!route.meta.auth || (route.meta.auth && token));

    if (!state) {
      utils.store.set(CacheEnum.CACHE_ROUTER_NAME, route.name as String);
    }
    return state;
  }
}
export const setupRouterGuard = function (router: Router) {
  const guard = new Guard(router);
  guard.run();
};
