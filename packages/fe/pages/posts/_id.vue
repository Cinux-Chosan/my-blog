<template>
  <v-row>
    <v-col :cols="12" :sm="8" order="last" order-sm="first">
      <viewer
        :initialValue="post.content"
        :options="editorOptions"
        v-if="showViewer"
      >
        <!-- for SEO -->
        <section class="d-none">
          <article v-html="post.html"></article>
        </section>
      </viewer>
    </v-col>
    <v-col
      :cols="12"
      :sm="4"
      order="first"
      order-sm="last"
      :class="mdAndUp ? 'fixedNav' : ''"
    >
      <v-treeview
        activatable
        :open-all="isOpenAll"
        active-class="activeNav"
        transition
        :items="postNav"
        item-text="text"
        @update:active="goToElement"
        v-if="flattenedNav.length"
      />
      <!-- :open="isSmall && flattenedNav.map(nav => nav.id)" -->
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
      editorOptions: Vue.editorOptions,
      showViewer: true
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
    },
    mdAndUp() {
      return this.$vuetify.breakpoint.mdAndUp
    },
    isOpenAll() {
      return !this.$vuetify.breakpoint.xs
    }
  },
  methods: {
    goToElement([id]) {
      const { $vuetify, flattenedNav } = this
      const nav = flattenedNav.forEach(nav => {
        const { el, id: localId } = nav
        if (localId === id) {
          el.classList.add('activeTitle')
          $vuetify.goTo(el, { offset: 12 })
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
.fixedNav {
  position: fixed;
  right: 0;
}
.activeNav {
}

::v-deep .v-treeview-node {
  float: left;
  clear: both;
}
::v-deep .v-treeview-node__label {
  cursor: pointer;
  &:hover {
    color: #fb8c00;
  }
}

::v-deep .activeTitle {
  &,
  * {
    color: #fb8c00 !important;
  }
}
</style>
