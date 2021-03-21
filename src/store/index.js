import Vue from 'vue'
import Vuex from 'vuex'
import song from '@/store/modules/song'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    song
  },
  strict: debug
  //,
//   plugins: debug ? [createLogger()] : []
})