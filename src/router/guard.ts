import store from "@/store";
import { RouteLocationNormalized, Router } from "vue-router";

class Guard {
  constructor(private router: Router) {}
  public run() {
    this.router.beforeEach((to, from) => {
      let token = store.userStore.get("token");
      if (this.isLogin(to, token) === false) return { name: "login" };
    });
  }
  private isLogin(route: RouteLocationNormalized, token: any) {
    return Boolean(!route.meta.auth || (route.meta.auth && token));
  }
}
export default function (router: Router) {
  const guard = new Guard(router);
  guard.run();
}
