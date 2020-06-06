<template>
  <v-layout flex-column class="contentBg">
    <v-flex>
      <v-text-field label="输入标题" v-model="post.title"></v-text-field>
    </v-flex>
    <v-flex>
      <editor ref="editor" height="auto" :options="editorOptions" :initialValue="post.content" />
    </v-flex>
    <v-flex>
      <!-- <h6 class="caption mt-2">选择标签</h6> -->
      <tag-creator class="mt-5" />
    </v-flex>
    <dial @save="save" @del="del" />
  </v-layout>
</template>

<script>
import Vue from 'vue'
import Dial from '@/components/DialEdit'
import TagCreator from '@/components/TagCreateor'

export default Vue.extend({
  components: { Dial, TagCreator },

  async asyncData({ params, app }) {
    const { id } = params
    if (id) {
      const [post = {}] = await app.$axios.$get(`/posts/${id}`)
      return { post }
    }
  },

  data() {
    const { editorOptions } = Vue
    return {
      editorOptions: {
        minHeight: '500px',
        ...editorOptions
      },
      post: {
        tags: [],
        title: '',
        content: ''
      }
    }
  },

  computed: {
    id() {
      const { id = '' } = this.$route.params
      return id
    }
  },

  methods: {
    getPost() {
      return this.$refs.editor.invoke('getMarkdown')
    },
    async save() {
      const { post, getPost, id, $axios } = this
      const result = await $axios.$post(`posts/${id}`, {
        ...post,
        content: getPost()
      })
    },

    async del() {
      const { title, getPost, id, $axios } = this
      const result = await $axios.$delete(`posts/${id}`)
    }
  }
})
</script>
