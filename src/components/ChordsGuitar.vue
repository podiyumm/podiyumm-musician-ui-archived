<template>
  <div>
    <v-container>
      <v-layout row wrap>
            <div v-for="chord in chords" :key="chord">
            <v-layout column class="guitar_chord">
              <div class="chord_diag" v-bind:id="'chord_'+chord" ></div>
              <div class="chord_name">{{chord}}</div>
            </v-layout>
            </div>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import * as vexchords from 'vexchords';
import { mapGetters } from "vuex"
import GuitarChords from '../services/GuitarChords'

import {
  ACTIVE_CHORDS
} from '@/store/getters.type';

import {
  SET_ACTIVE
} from '@/store/mutations.type';

export default {
  computed: {
    ...mapGetters("song", {
      chords: "activeChords",
    }),
  },

  created() {
    // subscribe to active song changed event
    // see: https://dev.to/viniciuskneves/watch-for-vuex-state-changes-2mgj
    this.unsubscribe = this.$store.subscribe((mutation) => {
      if (mutation.type === 'song/' + SET_ACTIVE) {
        // draw only once html element to write svg to has been renderred
        // see: https://forum.vuejs.org/t/wait-for-element-to-be-rendered/22542/4
        this.$nextTick(function () {
          this.$store.getters['song/' + ACTIVE_CHORDS].forEach(chord => {
            vexchords.draw(
              '#chord_'+chord,
              GuitarChords.getChordDefinition(chord),
              {
                width: 70,
                height: 80
              }
            )
          });
        })
      }
    });
  },

  beforeDestroy() {
    this.unsubscribe();
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .guitar_chord {
  border:1px solid black;
} */
.chord_name {
  text-align: center;
}
/* .chord_diag {
  border:1px solid black;
} */
</style>
