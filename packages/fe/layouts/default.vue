<template>
  <v-app>
    <!-- page banner -->
    <banner />
    <v-content class="blogContent mx-auto">
      <v-container>
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
  width: 1180px;
}
</style>