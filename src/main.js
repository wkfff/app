// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "@/assets/css/reset.css"
import "@/assets/js/base.js"

Vue.config.productionTip = false
/* eslint-disable no-new */

// require("./mock.js")
require('./mock.js')


new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
