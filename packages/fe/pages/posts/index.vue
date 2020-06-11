<template>
  <v-list>
    <template v-for="post in posts">
      <v-list-item :key="post._id">
        <v-list-item-content>
          <nuxt-link
            :to="{ name: 'posts-id', params: { id: post._id }}"
            class="mx-auto noDecoration"
          >
            <v-hover #default="{hover}">
              <post-sum :post="post" :class="`elevation-${hover ? 5 : 2}`" />
            </v-hover>
          </nuxt-link>
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-list>
</template>
 
<script>
import Banner from '@/components/Banner'
import { mapState } from 'vuex'
import PostSum from '@/components/PostSum'

export default {
  components: { Banner, PostSum },
  watchQuery: true,
  
  // for SEO
  head() {
    const content = `${Object.values(this.posts).map(post =>
      post.tags.map(t => t.text)
    )}`
    return {
      meta: [
        { hid: 'keywords', name: 'keywords', content },
        { hid: 'description', name: 'description', content }
      ]
    }
  },

  async fetch({ store, app, query }) {
    const posts = await app.$axios.$get('/posts', { params: query })
    store.commit('posts/SAVE_POSTS', posts)
  },

  computed: {
    ...mapState('posts', ['posts'])
  }
}
</script>

<style scoped>
.noDecoration {
  flex: 0 !important;
}
</style>