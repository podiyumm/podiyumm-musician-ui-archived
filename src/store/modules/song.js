import songApi from '../../api/song'

// inspiration: https://github.com/vuejs/vuex/blob/dev/examples/shopping-cart/store/modules/cart.js

// initial state
const state = () => ({
    songs: [],
    active: {},
  })

  // getters
  const getters = {
    activeSong: (state) => {
        return state.active;
      },

    activeText: (state, getters) => {
      return getters.activeSong.text.join("\n");
    },

    activeChords: (state, getters) => {
      return getters.activeText.match(/\[(.*?)\]/g).map(function (elem) {
        elem = elem.replace(/[[\]]/g,'');
        return elem;
      });
    },

  }

  // actions
  const actions = {
    fetchAll ({ commit }) {
        songApi.getSongs(songs => {
        commit('setSongs', songs)
        commit('setActive', songs[0])
      })
    },
  }

  // mutations
  const mutations = {
    setSongs (state, songs) {
      state.all = songs;
    },

    setActive (state, active) {
      state.active = active;
    }
  }

  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }