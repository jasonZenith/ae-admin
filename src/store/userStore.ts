interface IData {
  expore?: number;
  [key: string]: any;
}

class UserStore {
  set(key: string, data: IData) {
    if (data.expore) {
      data.expore = new Date().getTime() + data.expore * 1000;
    }
    localStorage.setItem(key, JSON.stringify(data));
  }
  get(key: string) {
    const item = localStorage.getItem(key);
    if (item) {
      const data = JSON.parse(item);
      const expire = data.expire;
      const nowTime = new Date().getTime();
      if (expire < nowTime) {
        localStorage.removeItem(key);
      }
      return data;
    }
  }
}

const userStore = new UserStore();
export default userStore;
