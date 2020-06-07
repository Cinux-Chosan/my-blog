<template>
  <v-app>
    <!-- page banner -->
    <banner />
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
import Banner from '@/components/Banner'
import DialNav from '@/components/DialNav'

export default {
  components: { Banner, DialNav },
  data() {
    return {}
  }
}
</script>

<style scoped>
</style>