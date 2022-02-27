import { userStore, apiUserStore } from "@/store";
import { RouteLocationNormalized, Router } from "vue-router";

class Guard {
  constructor(private router: Router) {}
  public run() {
    this.router.beforeEach(async (to, from) => {
      let token = userStore.get("token");
      if (this.isLogin(to, token) === false) return { name: "login" };
      await this.getUserInfo();
    });
  }

  private getUserInfo() {
    let token = userStore.get("token");
    if (token) {
      const userInfo = apiUserStore().getUserInfo();
      return userInfo;
    }
  }

  private isLogin(route: RouteLocationNormalized, token: any) {
    return Boolean(!route.meta.auth || (route.meta.auth && token));
  }
}
export default function (router: Router) {
  const guard = new Guard(router);
  guard.run();
}
