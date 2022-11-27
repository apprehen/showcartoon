import Vue from 'vue'
import App from './App'
import router from './router'
//  引入公共CSS
import './assets/css/common.css'
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
