import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.config.errorHandler = (err, vm, info) => {
  console.log(`Captured in Vue.config.errorHandler: ${info} ${err}`);
};
Vue.config.warnHandler = (msg, vm, trace) => {
  console.log(`Captured in Vue.config.warnHandler\n${msg}${trace}`);
};
window.addEventListener("error", event => {
  console.log(`Captured in error EventListener: ${event.error}`);
});
window.addEventListener("unhandledrejection", event => {
  console.log(`Captured in unhandledrejection EventListener: ${event.reason}`);
});

new Vue({
  render: h => h(App)
}).$mount("#app");
