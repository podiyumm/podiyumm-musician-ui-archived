<template>
  <div>
    <h1>{{ song.title }}</h1>
    <div v-if="song.author">{{ song.author }}</div>
    <div class="rendered" v-html="song.textAsHtml"></div>
  </div>
</template>

<script>
import axios from "axios";
import ChordPro from '../services/ChordPro'

export default {
  components: {
    // Chord,
  },

  data() {
    return {
      song: [],
      errors: [],
    };
  },

  // Fetches posts when the component is created.
  mounted() {
    axios
      .get(
        `http://localhost:3000/songs`
        // , {
        //   headers: {
        //     "Access-Control-Allow-Origin": "*",
        //     "Content-Type": "application/json",
        //   },
        // }
      )
      .then((response) => {
        // JSON responses are automatically parsed.
        const songs = response.data;
        console.log(songs);
        this.song = songs[0];

        // render lyrics with chords
        const chordProText = this.song.text.join("\n");
        // console.log(chordProText);
        this.song.textAsHtml = ChordPro.renderChordProText(chordProText);
        console.log(this.song.textAsHtml);

        // gather chords
        this.song.chords = chordProText.match(/\[(.*?)\]/g).map(function (elem) {
          elem = elem.replace(/[[\]]/g,'');
          return elem;
        });
        console.log(this.song.chords);
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
};

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
