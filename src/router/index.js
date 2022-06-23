import { createRouter, createWebHistory } from 'vue-router'
import AllView from '../views/AllView'
import ActiveView from '../views/ActiveView'
import CompletedView from '../views/CompletedView'

const routes = [
  {
    path: '/',
    name: 'all',
    component: AllView
  },
  {
    path: '/all',
    name: 'all',
    component: AllView
  },
  {
    path: '/active',
    name: 'active',
    component: ActiveView
  },
  {
    path: '/completed',
    name: 'completed',
    component: CompletedView,
    props: true    
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
