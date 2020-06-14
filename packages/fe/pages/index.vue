<template>
  <v-row>
    <v-col class="text-center">
      <nuxt-link to="/posts" class="noDecoration">
        <blockquote class="motto">
          {{ motto }}
          <footer>
            <small>
              <em>{{ author }}</em>
            </small>
          </footer>
        </blockquote>
      </nuxt-link>
    </v-col>
  </v-row>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  layout: 'home',
  data() {
    return {
      motto: '',
      author: ''
    }
  },
  mounted() {
    this.fetchMotto()
  },
  methods: {
    // 获取首页格言
    // https://www.free-api.com/doc/372
    async fetchMotto() {
      if (this.$route.name === 'index') {
        const type = Math.ceil(Math.random() * 45)
        const { code, data } = await this.$axios.$get(
          `https://v1.alapi.cn/api/mingyan?typeid=${type}`
        )
        if (code === 200) {
          this.motto = `${data.content}`
          this.author = `— ${data.author}`
        } else {
          this.motto = 'First, solve the problem. Then, write the code.'
          this.author = '— John Johnson'
        }
      }
      setTimeout(this.fetchMotto, 15000)
    }
  }
})
</script>

<style scoped>
.motto {
  color: #fff;
}
</style>
