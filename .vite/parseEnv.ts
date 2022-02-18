import _ from "lodash";

export function parseEnv(env: Record<string, string>) {
  const envClone: any = _.cloneDeep(env);
  Object.entries(env).forEach(([key, value]) => {
    if (value === "true" || value === "false") {
      envClone[key] = value === "true" ? true : false;
    } else if (/^\d+$/.test(value)) {
      envClone[key] = Number(value);
    } else {
      envClone[key] = envClone[key];
    }
  });

  return envClone;
}
