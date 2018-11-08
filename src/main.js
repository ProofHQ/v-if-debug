import Vue from "vue";
import App from "./App.vue";
import DebugIf from './DebugIf.plugin'

Vue.config.productionTip = false;

Vue.use(DebugIf, { enable: true })

new Vue({
  render: h => h(App)
}).$mount("#app");
