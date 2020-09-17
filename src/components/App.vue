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
      <SongList />
    </v-navigation-drawer>

    <v-main>
      <v-container
      >
        <v-row
          justify="center"
          align="start"
        >
        <v-col outlined>
            <Chords />
        </v-col>
        </v-row>
        <v-row
          justify="center"
          align="start"
        >
        <v-col outlined>
            <Song />
        </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import SongList from './SongList.vue'
  import Chords from './Chords.vue'
  import Song from './Song.vue'

  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      items: [
        { icon: 'lightbulb_outline', text: 'Notes' },
        { icon: 'touch_app', text: 'Reminders' },
        { divider: true },
        { heading: 'Labels' },
        { icon: 'add', text: 'Create new label' },
        { divider: true },
        { icon: 'archive', text: 'Archive' },
        { icon: 'delete', text: 'Trash' },
        { divider: true },
        { icon: 'settings', text: 'Settings' },
        { icon: 'chat_bubble', text: 'Trash' },
        { icon: 'help', text: 'Help' },
        { icon: 'phonelink', text: 'App downloads' },
        { icon: 'keyboard', text: 'Keyboard shortcuts' },
      ],
    }),
    components: {
      SongList,
      Chords,
      Song
    }
  }
</script>

<style>
#keep .v-navigation-drawer__border {
  display: none
}
</style>