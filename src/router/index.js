import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/contador',
      name: 'p. contador',
      component: () => import('../components/Contador.vue')
    },
    {
      path: '/lista-de-tareas',
      name: 'p. lista',
      component: () => import('../components/ListaDeTareas.vue')
    }
  ],
})

export default router
