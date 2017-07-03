import Vue from 'vue'
import Router from 'vue-router'

import mainRouter from '@/router/main'
import topRouter 	from '@/router/top'
import articleRouter from '@/router/article'

Vue.use(Router)

const routes = [].concat(
	mainRouter,
	articleRouter,
	topRouter
)

export default new Router({
	routes,
})
