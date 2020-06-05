<template>
  <v-layout>
    <v-flex class="text-center">
      <viewer :initialValue="content" :options="editorOptions"></viewer>
    </v-flex>
  </v-layout>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  layout: 'blog',
  data() {
    return {
      title: '',
      content: '',
      tags: [],
      author: '',
      editorOptions: Vue.editorOptions
    }
  },
  async asyncData({ params, app, store }) {
    const { id } = params
    if (id) {
      const { state } = store
      if (state.posts.posts[id]) {
        return state.posts.posts[id]
      } else {
        const [post] = await app.$axios.$get(`posts/${id}`)
        store.commit('posts/SAVE_POST', post)
        return post
      }
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