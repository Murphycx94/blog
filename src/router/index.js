import Vue from 'vue'
import Router from 'vue-router'
import ProgressBar from '@/components/ProgressBar/ProgressBar.vue'

import mainRouter from '@/router/main'
import topRouter 	from '@/router/top'
import articleRouter from '@/router/article'

Vue.prototype.$bar = new Vue(ProgressBar).$mount()
const bar = Vue.prototype.$bar
document.body.appendChild(bar.$el)

Vue.use(Router)

const routes = [].concat(
	mainRouter,
	articleRouter,
	topRouter
)

const router = new Router({
	routes,
})

router.beforeEach(async (to, from, next) => {
	bar.start()
	await next()
	bar.finish()
})





export default router
