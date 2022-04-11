import { createApp } from 'vue'
import { Icon } from "@iconify/vue/dist/offline"
import store from "./store";
import './tailwind.css'
import App from './App.vue'
import { routes } from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'

import * as CrComLib from "@crestron/ch5-crcomlib/build_bundles/cjs/cr-com-lib";

window["bridgeReceiveIntegerFromNative"] =
  CrComLib.bridgeReceiveIntegerFromNative;
window["bridgeReceiveBooleanFromNative"] =
  CrComLib.bridgeReceiveBooleanFromNative;
window["bridgeReceiveStringFromNative"] =
  CrComLib.bridgeReceiveStringFromNative;
window["bridgeReceiveObjectFromNative"] =
  CrComLib.bridgeReceiveObjectFromNative;

export default {
  return: Icon,
};

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes,
})
app.use(store).use(store)
   
app.mount('#app')
