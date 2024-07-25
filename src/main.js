import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/styles/styles.scss";
import router from "@/router/router";
import store from "./store";

createApp(App).use(store).use(router).mount("#app");
