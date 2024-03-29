// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/css/reset.css'
import '@/assets/js/base.js'
// Vue.config.productionTip = false

/* eslint-disable no-new */
window.Bus = new Vue()
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
