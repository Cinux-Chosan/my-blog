<template>
  <div :class="activeClass">
    <banner>
      <!-- 具体页面 Banner 信息 -->
      <template v-if="activePost">
        <h1 class="display-2 font-weight-regular mb-4">{{ activePost.title }}</h1>
        <h6 class="font-italic font-weight-light subtitle-2">
          Posted by {{ activePost.author || 'Chosan' }} on
          {{date}}
        </h6>
        <chip-list :tags="activePost.tags" />
      </template>
      <template v-if="$route.name === 'posts'">
        <v-toolbar :collapse="collapse" dense floating class="postsToolBar">
          <v-text-field autofocus hide-details single-line v-model="searchText" v-if="!collapse"></v-text-field>
          <v-btn icon @click="doSearch">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-toolbar>
        <chip-list :tags="tags" :nav="true" @click="cancel" />
      </template>
    </banner>
    <v-container class="blogContainer">
      <v-responsive width="1180px" class="mx-auto">
        <nuxt />
      </v-responsive>
    </v-container>
    <dial-nav />
  </div>
</template>

<script>
import mmt from 'moment'
import Banner from '@/components/Banner'
import ChipList from '@/components/ChipList'
import { mapState, mapGetters } from 'vuex'
import DialNav from '@/components/DialNav'

export default {
  components: { ChipList, DialNav, Banner },
  async fetch({ store, app }) {
    const tags = await app.$axios.$get('/tags')
    store.commit('tags/SAVE_TAGS', tags)
  },
  data() {
    return { mmt, collapse: true, searchText: this.$route.query.contentChunk }
  },
  watch: {
    '$route.query.contentChunk'(v) {
      this.searchText = v
    }
  },
  computed: {
    ...mapGetters('posts', ['posts']),
    ...mapState('tags', ['tags']),
    activePost() {
      const { $route, posts } = this
      return posts[$route.params.id]
    },
    date() {
      const { activePost } = this
      return mmt(activePost.createTime).format('LLLL')
    },
    activeClass() {
      const { name } = this.$route
      switch (name) {
        case 'posts':
          return 'posts'
        case 'posts-id':
          return 'postsId'
      }
    }
  },
  methods: {
    cancel(tag) {
      const { $router, $route } = this
      const { query } = $route
      if (tag.text === query.tag) {
        $router.push({ query: { ...query, tag: '' } })
      }
    },
    doSearch() {
      const { collapse, searchText, $router, $route } = this
      if (collapse) {
        this.collapse = false
      }
      if (searchText) {
        $router.push({
          query: { ...$route.query, contentChunk: searchText }
        })
      }
    }
  }
}
</script>

<style lang="scss">
.postsToolBar {
  border-radius: 5px !important;
}
</style>
