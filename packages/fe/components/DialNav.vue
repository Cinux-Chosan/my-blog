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
        <dial-nav-item :navObj="mainNav" #default="fab">
          <v-icon v-if="fab">{{ mainNav.text }}</v-icon>
          <v-icon v-else>mdi-home</v-icon>
        </dial-nav-item>
        <!-- <v-btn
          v-model="fab"
          :color="mainNav.color"
          dark
          fab
          nuxt
          :to="{ name: mainNav.pathName }"
        >
          <v-icon v-if="fab">{{ mainNav.text }}</v-icon>
          <v-icon v-else>mdi-home</v-icon>
        </v-btn> -->
      </template>
      <dial-nav-item v-for="nav in subNavs" :key="nav.text" :navObj="nav" />
      <!-- <v-btn
        fab
        dark
        small
        v-for="nav in subNavs"
        :key="nav.text"
        :color="nav.color"
        nuxt
        :to="{ name: nav.pathName }"
      >
        <v-icon>{{ nav.text }}</v-icon>
      </v-btn> -->
    </v-speed-dial>
    <v-btn fab dark nuxt :to="mainNav.to" :color="mainNav.color" v-else>
      <v-icon>{{ mainNav.text }}</v-icon>
    </v-btn>
  </div>
</template>

<script>
import DialNavItem from './DialNavItem'

// 操作按钮功能
const ops = {
  toHome: { text: 'mdi-home', attrs: { color: 'red', to: { name: 'posts' } } },
  share: {
    text: 'mdi-share',
    attrs: { color: 'green' },
    on: { click: () => alert('share') }
  }
}

// 对应的操作功能配置
const navs = {
  'posts-id': [ops.toHome, ops.share]
}

export default {
  components: { DialNavItem },
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
