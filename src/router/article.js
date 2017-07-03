'use strict';

export default [
	{
		path: '/article',
		name: 'article',
		meta: { requiresAuth: true },
		component: resolve => import('@/views/article/article.vue'),
	}
]
