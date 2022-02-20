import { App } from "vue";

export function registerGlobComp(app: App) {
  const globalComponents = import.meta.globEager("./globalComp/*.vue");
  Object.entries(globalComponents).forEach(([root, module]) => {
    const compName = root.replace(/\.\/globalComp\/|\.vue/g, "");
    app.component(`${compName}`, module.default);
  });
}
