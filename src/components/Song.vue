<template>
  <div>
    <h1>{{ song.title }}</h1>
    <div v-if="song.author">{{ song.author }}</div>

    <!-- <span v-for="line in song.text" :key="line">
      {{ line }}
      <br/>
    </span>-->

    <div class="rendered" v-html="song.textAsHtml"></div>
    <!-- <div>
    {{ song.text }}
    </div>-->

    <!-- <Chord chords="song.chords" /> -->
  </div>
</template>

<script>
import axios from "axios";
import ChordSheetJS from "chordsheetjs";
// import Chord from "./Chord.vue";

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
        console.log(chordProText);
        const parser = new ChordSheetJS.ChordProParser();
        const song = parser.parse(chordProText);
        const formatter = new ChordSheetJS.HtmlDivFormatter();
        this.song.textAsHtml = formatter.format(song);
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

    // async / await version (created() becomes async created())
    //
    // try {
    //   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
    //   this.posts = response.data
    // } catch (e) {
    //   this.errors.push(e)
    // }
  },
};

// export default {
//   name: 'HelloWorld',
//   props: {
//     msg: String
//   }
// }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rendered >>> .chord {
  font-weight: bold;
  padding-right: 3px;
}
.rendered >>> .lyrics {  text-align: left;
  padding-right: 3px;
}
</style>
