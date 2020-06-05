<template>
  <v-app>
    <!-- page banner -->
    <banner />
    <v-content class="blogContent">
      <v-container class="blogContainer">
        <nuxt />
      </v-container>
    </v-content>
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