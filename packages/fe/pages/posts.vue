<template>
  <div>
    <banner>
      <!-- 具体页面 Banner 信息 -->
      <template v-if="activePost">
        <h1 class="display-2 font-weight-regular mb-4">
          {{ activePost.title }}
        </h1>
        <h6 class="font-italic font-weight-light subtitle-2">
          Posted by {{ activePost.author || 'Chosan' }} on
          {{ mmt(activePost.createTime).format('LLLL') }}
        </h6>
      </template>
      <template>
        <v-chip
          class="mx-2 my-6 tag"
          v-for="tag in tags"
          :data-tag="tag.text"
          :key="tag.text"
          >{{ tag.text }}</v-chip
        >
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
import { mapState } from 'vuex'
import DialNav from '@/components/DialNav'

export default {
  components: { Banner, DialNav },
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
    }
  }
}
</script>

<style scoped>
.blogContent {
  background-color: #e3edcd;
}
</style>
