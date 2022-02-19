import { Random } from "mockjs";
import { MockMethod } from "vite-plugin-mock";
export default [
  {
    url: "/api/info",
    method: "get",
    response: () => {
      return {
        code: 200,
        message: "请求成功",
        type: "success",
        result: {
          name: "Jason",
          age: 22,
          avatar: "/avatar/jason.jpg",
        },
      };
    },
  },
  {
    url: "/api/login",
    method: "get",
    response: () => {
      return {
        code: 200,
        message: "请求成功",
        type: "success",
        result: {
          token: Random.string(10),
        },
      };
    },
  },
] as MockMethod[];
