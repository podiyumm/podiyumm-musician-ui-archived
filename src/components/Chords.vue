<template>
  <div>
    <v-container grid-list-xl>
      <v-layout wrap>
        <v-flex xs2 v-for="chord in chords" :key="chord">
          <v-card outlined min-width="120">
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
import GuitarChords from '../services/GuitarChords'

export default {
  data() {
    return {
      song: [],
      chords: ["C", "D", "G"],
      errors: [],
    };
  },

  // Fetches posts when the component is created.
  mounted() {
    this.chords.forEach(chord => {
      console.log(GuitarChords.getChordDefinition(chord));
      vexchords.draw('#chord_'+chord, GuitarChords.getChordDefinition(chord) );
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
