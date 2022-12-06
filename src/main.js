import Vue from 'vue'
import App from './App'
import router from './router'
//  引入公共CSS
import './assets/css/common.css'
//  引入ly-tab
import LyTab from 'ly-tab'
// 引入ui组件库
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.config.productionTip = false
Vue.use(LyTab)
Vue.use(MintUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
