import { RouteRecordRaw } from "vue-router";

export default function moduleAutoloadRoutes() {
  const modules = import.meta.globEager("../modules/**/*.ts");

  const modulesRoutes = [] as RouteRecordRaw[];
  Object.keys(modules).forEach((key) => {
    modulesRoutes.push(modules[key].default);
  });
  return modulesRoutes;
}
