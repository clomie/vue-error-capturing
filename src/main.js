import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.config.errorHandler = (err, vm, info) => {
  console.log(
    "Error Captured in Vue.config.errorHandler",
    "\n",
    err.stack || err,
    "\n",
    info
  );
};
Vue.config.warnHandler = (msg, vm, trace) => {
  console.log(`Warn Captured in Vue.config.warnHandler\n${msg}\n${trace}`);
};
window.addEventListener("error", event => {
  console.log("Error Captured in error EventListener", event.error);
});
window.addEventListener("unhandledrejection", event => {
  console.log(
    "Error Captured in unhandledrejection EventListener",
    event.reason
  );
});

new Vue({
  render: h => h(App)
}).$mount("#app");
