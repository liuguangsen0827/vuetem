// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/style/reset.css'
// 引入mint-ui全部组件
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
// import axios from 'axios'
Vue.config.productionTip = false
Vue.use(Mint)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
