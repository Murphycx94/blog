import Vue from 'vue'
import Router from 'vue-router'

import mainRouter from '@/router/main'
import topRouter 	from '@/router/top'

Vue.use(Router)

const routes = [].concat(
	mainRouter,
	topRouter
)

export default new Router({
	routes,
})
