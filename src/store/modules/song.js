import songApi from '../../api/song'

// initial state
const state = () => ({
    all: [],
    activeIdx: {}
  })

  // getters
  const getters = {
    getActiveSong: (state) => {
        return state.all[state.activeIdx];
      }
  }

  // actions
  const actions = {
    fetchAll ({ commit }) {
        songApi.getSongs(songs => {
        commit('setAll', songs)
      })
    }
  }

  // mutations
  const mutations = {
    setSongs (state, songs) {
      state.all = songs
    }
  }

  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }