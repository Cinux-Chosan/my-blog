<template>
  <v-app>
    <!-- page banner -->
    <banner />
    <v-main class="blogContent">
      <v-container class="blogContainer">
        <nuxt />
      </v-container>
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