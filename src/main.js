import Vue from "vue";
import App from "./App.vue";
import router from "./routes.js";
import "./assets/styles.css";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
