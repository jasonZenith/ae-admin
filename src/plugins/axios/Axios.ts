import { AxiosResult } from "#/axios";
import axios, { Axios, AxiosRequestConfig } from "axios";
import { reject } from "lodash";

export class MyAxios {
  private instance;
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
    this.interceptors();
  }

  public request<T>(config: AxiosRequestConfig): Promise<AxiosResult<T>> {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await this.instance.request<AxiosResult<T>>(config);
        resolve(res.data);
      } catch (error) {
        reject(error);
      }
    });
    // const res = this.instance.request<AxiosResult<T>>(config);
    // return res;
  }

  private interceptors() {
    this.interceptorsRequest();
    this.interceptorsResponse();
  }

  private interceptorsRequest() {
    // 添加请求拦截器
    axios.interceptors.request.use(
      (config) => {
        // 在发送请求之前做些什么
        return config;
      },
      (error) => {
        // 对请求错误做些什么
        return Promise.reject(error);
      }
    );
  }

  private interceptorsResponse() {
    axios.interceptors.response.use(
      (response) => {
        // 2xx 范围内的状态码都会触发该函数。
        // 对响应数据做点什么
        return response;
      },
      (error) => {
        // 超出 2xx 范围的状态码都会触发该函数。
        // 对响应错误做点什么
        return Promise.reject(error);
      }
    );
  }
}
