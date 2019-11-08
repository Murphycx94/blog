import Detail from '@/pages/detail'
import User from '@/pages/user'
import NoMatch from '@/pages/noMatch'

export default [
  {
    path: '/',
    component: () => import('@/pages/temp')
  },
  {
    path: '/detail',
    component: () => import('@/pages/temp')
  }
]