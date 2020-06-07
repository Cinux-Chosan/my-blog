<template>
  <v-app>
    <!-- page banner -->
    <banner>
      <h1 class="display-2 font-weight-regular mb-4">{{activePost.title}}</h1>
      <h6 class="font-italic font-weight-light subtitle-2">
        Posted by {{activePost.author || 'Chosan'}} on
        {{mmt(activePost.createTime).format('LLLL')}}
      </h6>
      <v-chip
        class="mx-2 my-6 tag"
        :data-tag="tag.text"
        v-for="tag in activePost.tags"
        :key="tag.text"
      >{{tag.text}}</v-chip>
    </banner>
    <v-content class="blogContent">
      <v-container class="blogContainer">
        <v-responsive width="1180px" class="mx-auto">
          <nuxt />
        </v-responsive>
      </v-container>
    </v-content>
    <dial-nav />
  </v-app>
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
  computed: {
    ...mapState('posts', ['posts']),
    activePost() {
      const { $route, posts } = this
      return posts[$route.params.id] || {}
    }
  }
}
</script>

<style scoped>
.blogContent {
  background-color: #e3edcd;
}
</style>