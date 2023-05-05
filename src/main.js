import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import { createApp } from 'vue'
// import { create } from 'core-js/core/object'
// import Highcharts from 'highcharts';
// import VueHighcharts from 'vue-highcharts'
// import loadFunnel from 'highcharts/modules/funnel';

Vue.config.productionTip = false

// loadFunnel(Highcharts);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// const app = create(App);

// app.use(VueHighcharts, { Highcharts })
