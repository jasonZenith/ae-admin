import { userApi, UserResult } from "@/apis/userApi";
import { defineStore } from "pinia";

export interface IData {
  expire?: number;
  token: string;
  [key: string]: any;
}

// 定义set localStorage，与 get localStorage
class UserStore {
  set(key: string, data: IData) {
    if (data.expire) {
      data.expire = new Date().getTime() + data.expire * 1000;
    }
    localStorage.setItem(key, JSON.stringify(data));
  }
  get(key: string) {
    const item = localStorage.getItem(key);
    if (item) {
      const data: IData = JSON.parse(item);
      const expire = data.expire;
      const nowTime = new Date().getTime();
      if (expire && expire < nowTime) {
        localStorage.removeItem(key);
        return null;
      }
      return data;
    }
    return null;
  }
}

const userStore = new UserStore(); // 定义set localStorage，与 get localStorage

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
export { userStore, apiUserStore };
