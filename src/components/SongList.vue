<template>
  <v-row align="center">
      <v-list>
          <v-list-item
            v-for="(song, i) in songs"
            :key="i"
            @click="activate(song)"
          >
            <v-list-item-content>
              <v-list-item-title v-html="song.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
      </v-list>
  </v-row>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: mapState({
    songs: (state) => state.song.songs,
  }),
  methods: mapActions('song', [
    'activate'
  ]),
};
</script>

<style>
</style>