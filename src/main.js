import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import Vue3SmoothScroll from "vue3-smooth-scroll";

const app = createApp(App);

const smoothScrollOptions = {
  duration: 1000,
  updateHistory: false,
};

app.use(Vue3SmoothScroll, smoothScrollOptions);
app.mount("#app");
