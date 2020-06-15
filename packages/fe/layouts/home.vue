<template>
  <v-app>
    <!-- page banner -->
    <banner>
      <span class="text-h5 text-md-h1 font-weight-bold">Welcom to Chosan's Home</span>
    </banner>
    <v-main class="blogContent align-center justify-center">
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import Banner from '@/components/Banner'

export default {
  components: { Banner },
  data() {
    return {}
  }
}
</script>

<style scoped>
.blogContent {
  background: #000;
  color: #fff;
}
</style>