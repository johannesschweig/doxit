import Vue from 'vue'
import VueRouter from 'vue-router'
import Lobby from '../components/Lobby.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Lobby',
    component: Lobby
  }
]

const router = new VueRouter({
  routes
})

export default router
