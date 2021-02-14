<template>
  <v-app id="keep">
    <v-app-bar
      app
      clipped-left
      color="amber"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <span class="title ml-3 mr-5">Podiyumm&nbsp;<span class="font-weight-light">Musician</span></span>
      <v-text-field
        solo-inverted
        flat
        hide-details
        label="Search"
        prepend-inner-icon="search"
      ></v-text-field>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      color="grey lighten-4"
    >
      <!-- <SongList /> -->
    </v-navigation-drawer>

    <v-main>
      <v-container
      >
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
          <div v-if="activeSong.title">
            <Song />
          </div>
          <div v-else>
            <SongList />
          </div>
        </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import SongList from './SongList.vue'
  import ChordsGuitar from './ChordsGuitar.vue'
  import ChordsPiano from './ChordsPiano.vue'
  import Song from './Song.vue'
  import { mapState } from "vuex";

  export default {
    computed: mapState({
      activeSong: (state) => state.song.active,
    }),
    data: () => ({
      drawer: null
    }),
    components: {
      SongList,
      ChordsGuitar,
      ChordsPiano,
      Song
    },
    created() {
      this.$store.dispatch("song/fetchAll")
      console.log(this.activeSong)
    },
  }
</script>

<style>
#keep .v-navigation-drawer__border {
  display: none
}
</style>