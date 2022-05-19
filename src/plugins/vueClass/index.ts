import {
  getCurrentInstance,
  ComponentInternalInstance,
  ComponentPublicInstance,
} from "vue";
import axios, { AxiosRequestConfig } from "../axios";
import { EleClass } from "../elementPlus";

class util extends EleClass {
  public proxy: ComponentPublicInstance | null = null;
  constructor() {
    super();
    this.global();
  }
  global() {
    const { proxy } = getCurrentInstance() as ComponentInternalInstance;
    this.proxy = proxy;
  }
  $ajax(options: AxiosRequestConfig) {
    return axios(options);
  }
}

export default util;
