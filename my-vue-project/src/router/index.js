import { createRouter, createWebHistory } from 'vue-router'

import AboutMe from '../pages/AboutMe.vue'
import Gallery from '../pages/Gallery.vue'
import Bookings from '../pages/Bookings.vue'

const routes = [
  { path: '/', name: 'AboutMe', component: AboutMe },
  { path: '/gallery', name: 'Gallery', component: Gallery },
  { path: '/bookings', name: 'Bookings', component: Bookings }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
