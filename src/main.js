import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import { sync } from 'vuex-router-sync'

import { store } from '@/store'

import 'element-ui/lib/theme-default/index.css'
import '@/assets/styles/common.less'
import 'github-markdown-css'

Vue.config.productionTip = false

Vue.use(ElementUI)

sync(store, router)

new Vue({
  el: '#app',
  router,
	store,
  template: '<App/>',
  components: { App }
})
