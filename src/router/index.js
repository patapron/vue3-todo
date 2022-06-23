import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CharactersView from '../views/CharactersView.vue'
import CharacterView from '../views/CharacterView.vue'
import LocationsView from '../views/LocationsView.vue'
import EpisodesView from '../views/EpisodesView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/characters',
    name: 'characters',
    component: CharactersView
  },
  {
    path: '/character/:id',
    name: 'character',
    component: CharacterView,
    props: true    
  },
  // {
  //   path: '/locations',
  //   name: 'locations',
  //   component: LocationsView
  // },
  // {
  //   path: '/locate',
  //   name: 'locate',
  //   component: LocateView
  // },
  // {
  //   path: '/episodes',
  //   name: 'episodes',
  //   component: EpisodesView
  // },
  // {
  //   path: '/episode',
  //   name: 'episode',
  //   component: EpisodeView
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
