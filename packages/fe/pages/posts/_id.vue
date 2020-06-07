<template>
  <v-row>
    <v-col>
      <viewer :initialValue="post.content" :options="editorOptions">
        <div class="d-none">
          <!-- for SEO -->
          <span v-html="post.html"></span>
        </div>
      </viewer>
    </v-col>
  </v-row>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  data() {
    return {
      post: { title: '', content: '', html: '', tags: [], author: '' },
      editorOptions: Vue.editorOptions
    }
  },
  async asyncData({ params, app, store }) {
    const { id } = params
    if (id) {
      const { state } = store
      const { posts } = state.posts
      let { [id]: post } = posts
      if (!post) {
        ;[post] = await app.$axios.$get(`posts/${id}`)
        store.commit('posts/SAVE_POSTS', [post])
      }
      return { post }
    }
  },
  computed: {
    ...mapState('posts', ['posts'])
  }
})
</script>


<style scoped>
.bannerBlock {
  font-size: 55px;
}
</style>