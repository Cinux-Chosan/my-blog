<template>
  <v-row class="contentBg flex-column">
    <v-col class>
      <v-text-field label="输入标题" v-model="post.title" hide-details />
    </v-col>
    <v-col>
      <editor ref="editor" height="auto" :options="editorOptions" :initialValue="post.content" />
    </v-col>
    <v-col>
      <tag-selector @add="addTag" @del="delTag" :tags="tags" v-model="post.tags" />
    </v-col>
    <dial @save="save" @del="del" />
  </v-row>
</template>

<script>
import Vue from 'vue'
import Dial from '@/components/DialEdit'
import TagSelector from '@/components/TagSelector'
import { mapActions, mapState } from 'vuex'
export default Vue.extend({
  components: { Dial, TagSelector },

  async asyncData({ params, $api, api, app }) {
    console.log($api, api)
    const { id } = params
    if (id) {
      const [post = {}] = await app.$axios.$get(`/posts/${id}`)
      return { post }
    }
  },

  async fetch({ store, app }) {
    const tags = await app.$axios.$get('/tags')
    store.commit('tags/ADD_TAGS', tags)
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
        content: '',
        html: ''
      }
    }
  },

  computed: {
    ...mapState('tags', ['tags']),
    id() {
      const { id = '' } = this.$route.params
      return id
    }
  },

  methods: {
    ...mapActions('tags', ['addTag', 'delTag', 'getTags']),
    getPost() {
      return this.$refs.editor.invoke('getMarkdown')
    },
    getHtml() {
      return this.$refs.editor.invoke('getHtml')
    },
    async save() {
      const { post, getPost, getHtml, id, $axios } = this
      const result = await $axios.$post(`posts/${id}`, {
        ...post,
        content: getPost(),
        html: getHtml()
      })
    },

    async del() {
      const { title, getPost, id, $axios } = this
      const result = await $axios.$delete(`posts/${id}`)
    }
  }
})
</script>
