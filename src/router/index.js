import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddJob from '@/views/AddJob.vue'
import EditJob from '@/views/EditJob.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/add',
    name: 'AddJob',
    component: AddJob
  },
  {
    path: '/jobs/:id',
    name: 'EditJob',
    component: EditJob,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
