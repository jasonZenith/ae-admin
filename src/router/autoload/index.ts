import moduleAutoloadRoutes from "./modules";
import envNew from "@/utils/envHelper";
import { autoRoutes } from "./views";
import { RouteRecordRaw } from "vue-router";

let routes = [] as RouteRecordRaw[];
if (envNew.env.VITE_ROUTE_AUTOLOAD) {
  routes = autoRoutes;
} else {
  routes = moduleAutoloadRoutes();
}

export default routes;
