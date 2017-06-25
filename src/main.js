import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

import '@/assets/styles/common.less'

import 'github-markdown-css'

Vue.config.productionTip = false

Vue.use(iView)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
