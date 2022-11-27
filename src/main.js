import Vue from 'vue'
import App from './App'
import router from './router'
//  引入公共CSS
import './assets/css/common.css'
//  引入ly-tab
import LyTab from 'ly-tab'
Vue.config.productionTip = false
Vue.use(LyTab)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
