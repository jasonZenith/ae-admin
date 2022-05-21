import { createApp } from "vue"
import App from "./App.vue"
import "@/styles/global.scss"
import { setupRouter, router } from "@/router"
import { setupPlugins } from "@/plugins"
import { registerGlobComp } from "@/components/registGlobComp"
import { setupRouterGuard } from "./router/guard"

const bootstrap = async () => {
  const app = createApp(App)

  setupPlugins(app)

  registerGlobComp(app)

  setupRouter(app)

  setupRouterGuard(router)

  app.mount("#app")
}

bootstrap()
