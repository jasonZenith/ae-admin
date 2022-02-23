import { App } from "vue";
import { setupAntDesign } from "./antd";
import { setupTailwindcss } from "./tailwindcss";

export function setupPlugins(app: App) {
  setupTailwindcss();
  setupAntDesign(app);
}
