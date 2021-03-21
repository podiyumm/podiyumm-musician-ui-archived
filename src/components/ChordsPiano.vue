<template>
  <div>
    <v-container grid-list>
      <v-layout wrap>
        <v-flex xs2 v-for="chord in chords" :key="chord">
          <v-card outlined>
            <div v-bind:id="'piano_chord_'+chord" :ref="'piano_chord_'+chord"></div>
            <v-card-title primary-title>
              <div>{{ chord }}</div>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import ChordNotes  from '../services/ChordNotes'
import { Instrument } from "piano-chart";

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
          // console.log(this.$store.getters['song/activeChords']);
          this.$store.getters['song/' + ACTIVE_CHORDS].forEach(chord => {
            const notes = ChordNotes.notes(chord);
            const piano = new Instrument(document.getElementById('piano_chord_'+chord), {
                startOctave: 4,
                endOctave: 6,
                keyPressStyle: 'vivid'
              }
            );
            piano.create();
            notes.forEach(note => piano.keyDown(note.toString()));
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
</style>
