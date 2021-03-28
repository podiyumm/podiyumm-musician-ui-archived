<template>
  <v-container>
    <v-row align="center">
      <v-list>
        <v-list-item
          v-for="song in songs"
          :key="song.id"
        >
        <router-link :to="{ name: 'song', params: { id: song.id }}">
            <v-list-item-content>
              <v-list-item-title v-html="song.title"></v-list-item-title>
            </v-list-item-content>
          </router-link>
        </v-list-item>
      </v-list>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import { FETCH_ALL } from "@/store/actions.type";

export default {
  computed: mapState({
    songs: (state) => state.song.songs,
  }),

  created() {
    this.$store.dispatch("song/" + FETCH_ALL);
  }
};
</script>

<style>
</style>