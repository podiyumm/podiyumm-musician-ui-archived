<template>
  <div>
    <v-container grid-list>
      <v-layout wrap>
        <v-flex xs2 v-for="chord in chords" :key="chord">
          <v-card outlined width="110px">
            <div v-bind:id="'chord_'+chord"></div>
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
import * as vexchords from 'vexchords';
import { mapGetters } from "vuex"
import GuitarChords from '../services/GuitarChords'

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
      if (mutation.type === 'song/setActive') {
        // draw only once html element to write svg to has been renderred
        // see: https://forum.vuejs.org/t/wait-for-element-to-be-rendered/22542/4
        this.$nextTick(function () {
          console.log(this.$store.getters['song/activeChords']);
          this.$store.getters['song/activeChords'].forEach(chord => {
            console.log(chord)
            vexchords.draw('#chord_'+chord, GuitarChords.getChordDefinition(chord) )
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
