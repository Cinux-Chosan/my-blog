<template>
  <v-layout>
    <div class="bannerBlock">{{ title }}</div>
    <v-flex class="text-center">{{ content }}</v-flex>
  </v-layout>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      title: '',
      content: '',
      tags: [],
      author: ''
    }
  },
  async asyncData(ctx) {
    const { params, app } = ctx
    const { id } = params
    if (id) {
      const data = await app.$axios.$get(`posts/${id}`)
      return data
    }
  }
})
</script>


<style scoped>
.bannerBlock {
  font-size: 55px;
}
</style>