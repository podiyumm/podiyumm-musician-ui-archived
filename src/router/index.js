import Vue from 'vue'
import VueRouter from 'vue-router'
import Song from '@/components/Song'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Song',
      component: Song
    }
    // {
    //   path: '/movie/:id',
    //   name: 'Movie',
    //   props: true,
    //   component: Movie
    // },
    // {
    //   path: '/search/:name',
    //   name: 'SearchMovie',
    //   props: true,
    //   component: SearchMovie
    // }
  ],
  mode: 'history'
})