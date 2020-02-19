import Vue from "vue";
import App from "./App.vue";
import router from "./router";

//import Objective from "./assets/lib/Objective";
//import Quest from "./assets/lib/Quest";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
