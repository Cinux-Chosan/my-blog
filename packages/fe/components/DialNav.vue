<template>
  <div class="dial dialNav" v-if="navs && navs.length">
    <v-speed-dial v-model="fab" direction="top" :transition="transition">
      <template v-slot:activator>
        <v-btn v-model="fab" color="blue darken-2" dark fab>
          <v-icon v-if="fab">mdi-close</v-icon>
          <v-icon v-else>mdi-plus</v-icon>
        </v-btn>
      </template>
      <dial-nav-item fab small v-for="nav in navs" :key="nav.text" :navObj="nav" />
    </v-speed-dial>
  </div>
</template>

<script>
import DialNavItem from './DialNavItem'

// 操作按钮功能
const ops = {
  toHome: { text: 'mdi-home', attrs: { color: 'red', to: { name: 'posts' } } },
  share: {
    text: 'mdi-share-variant',
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
