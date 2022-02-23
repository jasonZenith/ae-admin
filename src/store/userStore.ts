export interface IData {
  expire?: number;
  token: string;
  [key: string]: any;
}

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

const userStore = new UserStore();
export default userStore;
