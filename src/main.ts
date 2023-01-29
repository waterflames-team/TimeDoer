import { createApp } from "vue";
import App from "./App.vue";

import 'uno.css'
import '@unocss/reset/tailwind.css'
import './assets/style/global.scss'

import router from "./utils/router";

const app = createApp(App)
app.use(router)

app.mount("#app");
