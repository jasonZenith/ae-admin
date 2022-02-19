import { http } from "@/plugins/axios";

export interface UserResult {
  name: string;
  age: number;
  avatar: string;
}

export interface UserLogin {
  token: string;
}

class UserApi {
  info() {
    return http.request<UserResult>({
      url: `info`,
    });
  }
  login() {
    return http.request<UserLogin>({
      url: `login`,
    });
  }
}

const userApi = new UserApi();
export { userApi };
