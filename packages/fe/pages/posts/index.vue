<template>
  <div>{{posts}}</div>
</template>
 
<script>
import { mapState } from 'vuex'
export default {
  async fetch({ store, app }) {
    const posts = await app.$axios.$get('/posts')
    store.commit('posts/SAVE_POSTS', posts)
  },

  computed: {
    ...mapState('posts', ['posts'])
  }
}
</script>