<template>
  <div>
    <p v-if="post.status === 2" class="text-center">此文正在撰写中，请客官稍等...</p>
    <v-row v-else>
      <v-col :cols="12" :sm="8" order="5" order-sm="1">
        <client-only>
          <template #placeholder>
            <!-- for SEO & Preview-->
            <section class>
              <article v-html="post.html"></article>
            </section>
          </template>
          <viewer
            :initialValue="post.content"
            :options="editorOptions"
            @load="onViewerLoaded"
            v-if="showViewer"
          ></viewer>
        </client-only>
      </v-col>
      <v-col
        :cols="12"
        :sm="4"
        order="1"
        order-sm="5"
        :class="mdAndUp && flattenedNav.length <= 10 ? 'fixedNav' : ''"
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

      <v-col :cols="12" :sm="8" order="10">
        <client-only>
          <Vssue :title="`${post._id}`" />
        </client-only>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState, mapGetters } from 'vuex'
import { createNavByHtml, traverse } from '@utils'

const tuiEditorContentClass = '.tui-editor-contents'

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
  mounted() {},

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
    },

    onViewerLoaded() {
      this.postNav = createNavByHtml(tuiEditorContentClass)
      this.initScript()
    },

    initScript() {
      const { post, initCommonScript, initLinkBlank } = this
      initCommonScript()
      initLinkBlank()
      eval(`!function(){${post.scriptCompiled}}()`)
    },
    /**
     * 初始化一些通用逻辑
     */
    initCommonScript() {
      const activators = document.querySelectorAll('.J-act')
      Array.from(activators).forEach(act => {
        act.addEventListener('click', () => {
          const targets = act.dataset.targets.split('|')
          act.classList.add('d-none')
          targets.forEach(target => {
            target = document.querySelector(target)
            target.classList.remove('d-none')
          })
        })
      })
    },
    /**
     * 初始化 markdown 中的链接，添加 target="_blank"
     */
    initLinkBlank() {
      const links = document
        .querySelector(tuiEditorContentClass)
        .querySelectorAll('a')
      Array.from(links).forEach(link => (link.target = '_blank'))
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
