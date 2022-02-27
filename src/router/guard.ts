import { CacheEnum } from "@/enums/cacheEnum";
import { apiUserStore } from "@/store";
import utils from "@/utils";
import { RouteLocationNormalized, Router } from "vue-router";

class Guard {
  constructor(private router: Router) {}
  public run() {
    this.router.beforeEach(async (to, from) => {
      if (this.isLogin(to, this.hasToken()) === false) {
        return { name: "login" };
      }
      await this.getUserInfo();
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
export default function (router: Router) {
  const guard = new Guard(router);
  guard.run();
}
