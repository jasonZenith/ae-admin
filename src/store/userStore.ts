import { userApi, UserResult } from "@/apis/userApi";
import { defineStore } from "pinia";

// 定义用户信息状态
const apiUserStore = defineStore("user", {
  state: () => {
    return {
      info: {} as null | UserResult,
    };
  },
  actions: {
    async getUserInfo() {
      const res = await userApi.info();
      this.info = res.result;
    },
  },
});
export { apiUserStore };
