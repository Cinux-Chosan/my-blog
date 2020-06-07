<template>
  <div class="dial dialNav" v-if="navs && navs.length">
    <v-speed-dial
      v-model="fab"
      direction="top"
      :open-on-hover="true"
      :transition="transition"
      v-if="subNavs && subNavs.length"
    >
      <template v-slot:activator>
        <v-btn v-model="fab" :color="mainNav.color" dark fab>
          <v-icon v-if="fab">{{mainNav.text}}</v-icon>
          <v-icon v-else>mdi-account-circle</v-icon>
        </v-btn>
      </template>
      <v-btn
        fab
        dark
        small
        v-for="nav in subNavs"
        :key="nav.text"
        :color="nav.color"
        nuxt
        :to="{ name: nav.pathName }"
      >
        <v-icon>{{nav.text}}</v-icon>
      </v-btn>
    </v-speed-dial>
    <v-btn fab dark nuxt :to="{name: mainNav.pathName}" :color="mainNav.color" v-else>
      <v-icon>{{mainNav.text}}</v-icon>
    </v-btn>
  </div>
</template>

<script>
const navs = {
  // posts: [{ text: 'mdi-close', color: 'red', pathName: 'posts' }],
  'posts-id': [{ text: 'mdi-home', color: 'red', pathName: 'posts' }]
}

export default {
  data() {
    return {
      fab: false,
      transition: 'slide-y-reverse-transition'
    }
  },
  computed: {
    mainNav() {
      return this.navs[0]
    },
    subNavs() {
      return this.navs.slice(1)
    },
    navs() {
      const { $route } = this
      const { name } = $route
      return navs[name]
    }
  }
}
</script>

<style scoped>
.dial {
  position: fixed;
  right: 2em;
  bottom: 3em;
}
</style>
