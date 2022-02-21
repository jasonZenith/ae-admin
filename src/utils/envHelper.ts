import _ from "lodash";

class EnvNew {
  public env = {} as ImportMetaEnv;
  constructor() {
    this.env = this.getEnvs();
  }
  private getEnvs(): ImportMetaEnv {
    const env = import.meta.env;
    const envs: any = _.cloneDeep(env);
    Object.entries(env as Record<string, any>).forEach(([key, value]) => {
      if (value === "true" || value === "false") {
        envs[key] = value === "true" ? true : false;
      } else if (/^\d+$/.test(value)) {
        envs[key] = Number(value);
      } else if (value === "null" || value === "undefined") {
        envs[key] = value === "null" ? null : undefined;
      } else {
        envs[key] = value;
      }
    });
    return envs;
  }
}

const envNew = new EnvNew();
export default envNew;
