import axios, { AxiosRequestConfig } from "axios";

const _axios = axios.create({
  baseURL: "/",
  timeout: 3000,
});

//请求拦截器
_axios.interceptors.request.use(
  function (config) {
    // console.log(config, "请求拦截器");

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

//响应拦截器
_axios.interceptors.response.use(
  function (response) {
    // console.log(response, "响应拦截器");
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default _axios;

export { AxiosRequestConfig };
