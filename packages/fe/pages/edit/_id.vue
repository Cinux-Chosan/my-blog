<template>
  <v-layout flex-column class="contentBg">
    <v-flex>
      <v-text-field label="输入标题" v-model="title"></v-text-field>
    </v-flex>
    <v-flex>
      <editor
        ref="editor"
        height="auto"
        :options="editorOptions"
        :initialValue="content"
      />
    </v-flex>
    <dial @save="save" />
  </v-layout>
</template>

<script>
import Vue from 'vue'
import Dial from '@/components/Dial'

export default Vue.extend({
  components: { Dial },

  async asyncData({ params, app }) {
    const { id } = params
    if (id) {
      const post = await app.$axios.$get(`/posts/${id}`)
      return post
    }
  },

  data() {
    return {
      editorOptions: {
        minHeight: '500px'
      },
      title: '',
      content: ''
    }
  },

  methods: {
    getPost() {
      return this.$refs.editor.invoke('getMarkdown')
    },
    async save() {
      const { title, getPost, $route, $axios } = this
      const { id = '' } = $route.params
      const result = await $axios.$post(`posts/${id}`, {
        title,
        content: getPost()
      })
    }
  }
})
</script>

<style scoped>
.contentBg {
  /* 青草绿 #E3EDCD rgb(227, 237, 205) */
  background-color: #e3edcd;
}
</style>
