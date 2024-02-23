import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/FrontView.vue'),
    children: [
      {
        path: 'about',
        component: () => import('../views/AboutView.vue')
      },
      {
        path: 'product',
        component: () => import('../views/ProductView.vue')
      },
      {
        path: 'cart',
        component: () => import('../views/CartView.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('../views/loginView.vue')
  },
  {
    path: '/admin',
    component: () => import('../views/dashboard/DashboardView.vue'),
    children: [
      {
        path: 'cart',
        component: () => import('../views/dashboard/CartView.vue')
      },
      {
        path: 'order',
        component: () => import('../views/dashboard/OrderView.vue')
      },
      {
        path: 'product',
        component: () => import('../views/dashboard/ProductView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
