'use strict';

export default [
	{
		path: '/home/:label',
		name: 'index',
		meta: { requiresAuth: true },
		component: resolve => import('@/views/main/index.vue'),
	}
]
