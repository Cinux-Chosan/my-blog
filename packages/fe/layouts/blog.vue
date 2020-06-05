<template>
  <v-app>
    <!-- page banner -->
    <banner>
      <h1 class="display-2 font-weight-regular mb-4">{{activePost.title}}</h1>
      <h6 class="font-italic font-weight-light subtitle-2">
        Posted by {{activePost.author || 'Chosan'}} on
        {{mmt(activePost.createTime).format('LLLL')}}
      </h6>
    </banner>
    <v-content class="blogContent">
      <v-container class="blogContainer">
        <v-responsive width="1180px" class="mx-auto">
          <nuxt />
        </v-responsive>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import mmt from 'moment'
import Banner from '@/components/Banner'
import { mapState } from 'vuex'

export default {
  components: { Banner },
  data() {
    return { mmt }
  },
  computed: {
    ...mapState('posts', ['posts']),
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