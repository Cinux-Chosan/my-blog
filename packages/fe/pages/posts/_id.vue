<template>
  <v-row>
    <v-col :cols="8">
      <viewer :initialValue="post.content" :options="editorOptions">
        <!-- for SEO -->
        <section class="d-none">
          <article v-html="post.html"></article>
        </section>
      </viewer>
    </v-col>
    <v-col :cols="4">
      <v-treeview
        :open="flattenedNav.map(nav => nav.id)"
        hoverable
        activatable
        @update:active="goToElement"
        :items="postNav"
        item-text="text"
      />
      <!-- @update:open="goToElement" -->
    </v-col>
  </v-row>
</template>

<script>
import Vue from 'vue'
import { mapState, mapGetters } from 'vuex'
import { createNavByHtml, traverse } from '@utils'

export default Vue.extend({
  // for SEO
  head() {
    const { post } = this
    return {
      title: post.title,
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content: post.tags.map(t => t.text).join()
        },
        { hid: 'description', name: 'description', content: post.title }
      ]
    }
  },
  data() {
    return {
      postNav: [],
      post: { title: '', content: '', html: '', tags: [], author: '' },
      editorOptions: Vue.editorOptions
    }
  },
  mounted() {
    this.postNav = createNavByHtml('.tui-editor-contents')
  },
  async asyncData({ params, query, app, store }) {
    const { id } = params
    if (id) {
      const { getters } = store
      const posts = getters['posts/posts']
      let { [id]: post } = posts
      if (!post) {
        ;({
          posts: [post]
        } = await app.$axios.$get(`posts/${id}`))
        store.commit('posts/SAVE_POSTS', [post])
      }
      return { post }
    }
  },
  computed: {
    ...mapGetters('posts', ['posts']),
    flattenedNav() {
      return [...traverse(this.postNav)]
    }
  },
  methods: {
    goToElement([id]) {
      const { $vuetify, flattenedNav } = this
      const nav = flattenedNav.forEach(nav => {
        const { el, id: localId } = nav
        if (localId === id) {
          el.classList.add('activeTitle')
          $vuetify.goTo(el)
        } else {
          el.classList.remove('activeTitle')
        }
      })
    }
  }
})
</script>

<style lang="scss" scoped>
.bannerBlock {
  font-size: 55px;
}
::v-deep .v-treeview-node__label {
  cursor: pointer;
  &:hover {
    color: #fb8c00;
  }
}
</style>

<style >
.activeTitle {
  color: #fb8c00 !important;
}
</style>