'use strict';

export default [
	{
		path: '/',
		name: 'index',
		meta: { requiresAuth: true },
		component: resolve => import('@/views/index.vue'),
	}
]
