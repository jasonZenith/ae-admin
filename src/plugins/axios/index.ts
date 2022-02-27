import { MyAxios } from "./Axios";

export const http = new MyAxios({
  baseURL: "/api",
  timeout: 10000,
  headers: {},
  // auth: {
  //   username: "jasonzeng@ae.com",
  //   password: "123456",
  // },
});
