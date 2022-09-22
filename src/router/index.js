import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import PlayerHome from '@/components/player/PlayerHome.vue';
import HostHome from '@/components/host/HostHome.vue';

const routes = [
  { path: '/play', component: PlayerHome },
  { path: '/quiz', component: HostHome },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
 