export interface IData {
  expire?: number;
  token?: string;
  [key: string]: any;
}

interface GetReturnParams extends IData {
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
  get(key: string): any {
    const item = localStorage.getItem(key);
    if (item) {
      const cache: IData = JSON.parse(item);
      const expire = cache.expire;
      const nowTime = new Date().getTime();
      if (expire && expire < nowTime) {
        localStorage.removeItem(key);
        return null;
      }
      return cache;
    }
    return null;
  }
}

const userStore = new UserStore(); // 定义set localStorage，与 get localStorage

export default userStore;
