import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

import "element-plus/dist/index.css";

import ELEcomponents from "./plugins/elementPlus";
const app = createApp(App);

[...ELEcomponents].forEach((v) => {
  app.component(v.name, v);
});

app.config.globalProperties.$ajax1 = axios;
// app.use(ElementPlus).use(store).use(router).mount("#app");
app.use(store).use(router).mount("#app");
