// import songApi from '../../api/song'
import SongApiService from '@/api/song'

import {
  FETCH_ALL
} from "@/store/actions.type";

import {
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
      .filter(item => item)
      // should be normalized on input: d -> Dmi
      // .map(function (elem) {
      //   if (elem.length == 1 && elem == elem.toLowerCase()) {
      //     return elem.toUpperCase() + "mi"
      //   }
      //   return elem;
      });

      return [...new Set(chords)]
    },

  }

  // actions
  const actions = {
    async [FETCH_ALL](context) {
      const { data } = await SongApiService.query();
      return context.commit(SET_SONGS, data);
    },

    activate ({ commit }, song) {
      commit('setActive', { id: song.id })
    }
  }

  // mutations
  const mutations = {
    [SET_SONGS](state, songs) {
      state.songs = songs;
    },
    [SET_ACTIVE](state, id) {
      state.active = state.songs.find(item => item.id === id.id)
    }
  }

  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }