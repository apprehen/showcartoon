import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/global.less'
import '@/ElementUI/index'
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
