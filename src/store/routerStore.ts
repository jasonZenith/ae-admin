import { defineStore } from "pinia";
import { useRouter } from "vue-router";

const routerStore = defineStore("routerStore", {
  state: () => {
    return {
      routes: getRoutes(),
    };
  },
  // getters: {
  //   get(state) {
  //     return state.username;
  //   },
  // },
});

function getRoutes() {
  const router = useRouter();

  const routes = router
    .getRoutes()
    .filter((route) => route.children.length)
    .map((route) => {
      return route;
    });
  return routes;
}

export default routerStore;
