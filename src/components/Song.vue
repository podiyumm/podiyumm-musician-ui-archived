<template>
  <div>
    <h1>{{ song.title }}</h1>
    <div v-if="song.author">{{ song.author }}</div>
    <div class="rendered" :inner-html.prop="song.text | renderText"></div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex"
import ChordPro from "../services/ChordPro"

export default {
  components: {},

  computed: {
    ...mapState({
      song: (state) => state.song.active,
    }),
    ...mapGetters("song", {
      text: "activeText",
      chords: "activeChords",
    }),
  },

  created() {
    this.$store.dispatch("song/fetchAll")
  },

  filters: {
    renderText: function (text) {
      if (!text) return ""
      return ChordPro.renderChordProAsHtml(text.join("\n"))
    },
  },
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
