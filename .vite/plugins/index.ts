import vue from "@vitejs/plugin-vue";
import { Plugin } from "vite";
import { setupMockPlugin } from "./mock";

export function setupVitePlugins(isBuild: boolean, env: Record<string, any>) {
  const plugins: Plugin[] = [vue()];
  plugins.push(setupMockPlugin(isBuild));
  return plugins;
}
