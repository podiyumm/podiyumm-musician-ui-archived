<template>
<v-container>
<v-row
          justify="center"
          align="start"
        >
        <v-col outlined>
            <ChordsGuitar />
        </v-col>
        </v-row>
        <v-row
          justify="center"
          align="start"
        >
        <v-col outlined>
            <ChordsPiano />
        </v-col>
        </v-row>
        <v-row
          justify="center"
          align="start"
        >
        <v-col outlined>
          <div>
    <h1>{{ song.title }}</h1>
    <div v-if="song.author">{{ song.author }}</div>
    <div class="rendered" :inner-html.prop="song.text | renderText"></div>
  </div>
        </v-col>
        </v-row>
</v-container>
</template>

<script>
  import ChordsGuitar from './ChordsGuitar.vue'
  import ChordsPiano from './ChordsPiano.vue'
import { mapGetters, mapState } from "vuex"
import ChordPro from "../services/ChordPro"
import { FETCH } from "@/store/actions.type";

export default {
  components: {
      ChordsGuitar,
      ChordsPiano
    },

  computed: {
    ...mapState({
      song: (state) => state.song.active,
    }),
    ...mapGetters("song", {
      text: "activeText",
      chords: "activeChords"
    }),
  },


  filters: {
    renderText: function (text) {
      if (!text) return ""
      return ChordPro.renderChordProAsHtml(text.join("\n"))
    },
  },


  created() {
    this.$store.dispatch("song/" + FETCH);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rendered >>> .chord:after {
  /* empty <div class="chord"> causes corrupt formatting for line start => text moved up */
  content: " ";
}

.rendered >>> .chord {
  font-weight: bold;
  /* empty <div class="chord"> causes corrupt formatting for line start => text moved up */
  white-space: pre;
}

.rendered >>> .lyrics {
  /* otherwise no spaces between words */
  white-space: pre;
}
</style>
