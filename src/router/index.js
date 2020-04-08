import Vue from 'vue'
import VueRouter from 'vue-router'
import Lobby from '../components/Lobby.vue'
import Board from '../components/Board.vue'
import BigCards from '../components/BigCards.vue'
import WriteHint from '../components/WriteHint.vue'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'Lobby',
    component: Lobby
  },
  {
    path: '/board',
    name: 'Board',
    component: Board
  },
  {
    path: '/big-cards',
    name: 'BigCards',
    component: BigCards
  },
  {
    path: '/write-hint',
    name: 'WriteHint',
    component: WriteHint
  }
]

const router = new VueRouter({
  routes
})

export default router
