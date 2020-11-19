<template>
  <v-app>
    <v-main class="blogContent">
      <nuxt />
    </v-main>

    <v-footer absolute class="font-weight-medium">
      <v-col class="text-center" cols="12">
        <a href="https://beian.miit.gov.cn"> 渝ICP备18003257号</a>
      </v-col>
    </v-footer>
  </v-app>
</template>


<style scoped>
.blogContent{
  /* footer */
  padding-bottom: 60px !important;
}
</style>