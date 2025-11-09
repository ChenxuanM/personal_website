import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/layout.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/about/about.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/contact/contact.vue'),
    },
    {
      path: '/learning',
      name: 'learning',
      component: () => import('@/views/learning/learning.vue'),
    },
    {
      path: '/research',
      name: 'research',
      component: () => import('@/views/research/research.vue'),
    },
  ],
})

export default router
