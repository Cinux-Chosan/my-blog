<template>
  <div>
    <v-list>
      <template v-for="post in posts">
        <v-list-item :key="post._id">
          <v-list-item-content>
            <nuxt-link :to="{ name: 'posts-id', params: { id: post._id }}" class="noDecoration">
              <post-sum :post="post" />
            </nuxt-link>
          </v-list-item-content>
        </v-list-item>
        <!-- <v-divider :key="post._id"></v-divider> -->
      </template>
    </v-list>
  </div>
</template>
 
<script>
import { mapState } from 'vuex'
import PostSum from '@/components/PostSum'

export default {
  components: { PostSum },
  async fetch({ store, app }) {
    const posts = await app.$axios.$get('/posts')
    store.commit('posts/SAVE_POSTS', posts)
  },

  computed: {
    ...mapState('posts', ['posts'])
  }
}
</script>