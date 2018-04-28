// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import Header from '@/components/Header.vue'
//accomplish calling axios globally
import Axios from 'Axios';
Vue.prototype.$axios = Axios;

import Vuex from 'vuex';
Vue.use(Vuex);

Vue.use(VueResource);
Vue.component('my-header',Header)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
