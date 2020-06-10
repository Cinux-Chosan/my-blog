<template>
  <div :class="activeClass">
    <banner>
      <!-- 具体页面 Banner 信息 -->
      <template v-if="activePost">
        <h1 class="display-2 font-weight-regular mb-4">{{ activePost.title }}</h1>
        <h6 class="font-italic font-weight-light subtitle-2">
          Posted by {{ activePost.author || 'Chosan' }} on
          {{ mmt(activePost.createTime).format('LLLL') }}
        </h6>
        <chip-list :tags="tags" />
      </template>
      <template>
        <chip-list :tags="tags" @click="queryPostByTag" />
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
import { mapState } from 'vuex'
import DialNav from '@/components/DialNav'

export default {
  components: { ChipList, DialNav, Banner },
  data() {
    return { mmt }
  },
  async fetch({ store, app }) {
    const tags = await app.$axios.$get('/tags')
    store.commit('tags/ADD_TAGS', tags)
  },
  computed: {
    ...mapState('posts', ['posts']),
    ...mapState('tags', ['tags']),
    activePost() {
      const { $route, posts } = this
      return posts[$route.params.id]
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
  }
}
</script>

<style lang="scss" scoped>
.posts {
  .v-chip {
    cursor: pointer;
  }
}
</style>
