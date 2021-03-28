import Vue from 'vue'
import VueRouter from 'vue-router'
import Song from '@/components/Song'
import SongList from '@/components/SongList'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/song/:id',
      name: 'song',
      component: Song
    },
    {
      path: '/',
      name: 'songList',
      component: SongList
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