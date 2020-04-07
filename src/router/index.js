import Vue from 'vue'
import VueRouter from 'vue-router'
import Lobby from '../components/Lobby.vue'
import Board from '../components/Board.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Lobby',
    component: Lobby
  },
  {
    path: '/board',
    name: 'Board',
    component: Board
  }
]

const router = new VueRouter({
  routes
})

export default router
