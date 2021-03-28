import SongApiService from '@/api/song'
import router from '@/router'

import {
  FETCH,
  FETCH_ALL
} from "@/store/actions.type";

import {
  ID,
  ACTIVE_CHORDS,
  ACTIVE_SONG,
  ACTIVE_TEXT
} from '@/store/getters.type';

import {
  SET_ACTIVE,
  SET_SONGS
} from '@/store/mutations.type';

// inspiration: https://github.com/vuejs/vuex/blob/dev/examples/shopping-cart/store/modules/cart.js

// initial state
const state = () => ({
    songs: [],
    active: {},
  })

  // getters
  const getters = {
    [ID]() {
      return router.currentRoute.params.id
    },

    [ACTIVE_SONG](state) {
        return state.active;
    },

    [ACTIVE_TEXT](state, getters) {
    if (!getters.activeSong.text) return ""
      return getters.activeSong.text.join("\n");
    },

    [ACTIVE_CHORDS](state, getters) {
      if (!getters.activeText) return ""
      const chords =  getters.activeText.match(/\[(.*?)\]/g).map(function (elem) {
        elem = elem.replace(/[[\]]/g,'');
        return elem;
      })
      // filter empty elems,
      // see: https://stackoverflow.com/questions/55685037/how-to-remove-empty-array-values-from-an-array/55685110
      .filter(item => item);

      return [...new Set(chords)]
    },

  }

  // actions
  const actions = {

    [FETCH_ALL]({ commit }) {
      return SongApiService.query()
        .then(({ data }) => {
          commit(SET_SONGS, data);
        })
        .catch(error => {
          throw new Error(error);
        });
    },

    [FETCH]({ commit, getters }) {
      return SongApiService.get(getters.id)
        .then(({ data }) => {
          commit(SET_ACTIVE, data);
        })
        .catch(error => {
          throw new Error(error);
        });
    }
  }

  // mutations
  const mutations = {
    [SET_SONGS](state, songs) {
      state.songs = songs;
    },
    [SET_ACTIVE](state, song) {
      state.active = song
    }
  }

  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }