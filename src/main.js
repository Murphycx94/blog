/*
 * @Author: MurphyC 
 * @Date: 2017-10-02 22:47:13 
 * @Last Modified by: MurphyC
 * @Last Modified time: 2017-10-02 22:48:42
 */

import Vue from 'vue'
import App from './App'
import router from './router'
import { sync } from 'vuex-router-sync'
import { store } from '@/store'
import '@/assets/styles/common.less'
import 'github-markdown-css'
import loading from '@/components/loading/loading.vue'

Vue.config.productionTip = false
sync(store, router)

Vue.component('loading', loading);

new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App }
})