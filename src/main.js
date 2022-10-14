import Vue from 'vue';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import VueCompositionAPI from '@vue/composition-api';
import 'element-ui/lib/theme-chalk/index.css';
import '@/services/mock';
import App from './App.vue';
import router from '@/router';

Vue.use(VueCompositionAPI)
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
