import Vue from 'vue';
import App from './App.vue';
import router from './routes/index';
import store from './store';
import './plugins/index';
import './utils/index';
import './assets/main.scss';
import myCharts from '@/const/myCharts.js';
Vue.use(myCharts);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
