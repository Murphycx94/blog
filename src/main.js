import Vue from 'vue'
import App from './App'
import router from './router'

import '@/assets/styles/common.less'

import 'github-markdown-css'

Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
