import { http } from "@/plugins/axios";

export interface UserResult {
  name: string;
  age: number;
  avatar: string;
}

export interface UserLogin {
  token: string;
}

export interface dataParams {
  account: string;
  password: string;
}

class UserApi {
  info() {
    return http.request<UserResult>({
      url: `info`,
    });
  }
  login<T>(data: T) {
    return http.request<UserLogin>({
      url: `login`,
      method: "post",
      data,
    });
  }
}

const userApi = new UserApi();
export { userApi };
