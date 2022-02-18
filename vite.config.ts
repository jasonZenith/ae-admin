import { ConfigEnv, UserConfigExport, loadEnv } from "vite";
import { alias } from "./.vite/alias";
import { parseEnv } from "./.vite/parseEnv";
import { setupVitePlugins } from "./.vite/plugins";

export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  const isBuild = command === "build";
  const root = process.cwd();
  const env = parseEnv(loadEnv(mode, root));

  return {
    plugins: setupVitePlugins(isBuild, env),
    resolve: {
      alias,
    },
  };
};
