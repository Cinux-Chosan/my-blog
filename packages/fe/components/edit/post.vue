<template>
  <v-row class="flex-column">
    <v-col>
      <editor
        ref="editor"
        height="auto"
        :options="editorOptions"
        :initialValue="post.content"
      />
    </v-col>
  </v-row>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'post',
  props: {
    post: {
      type: Object,
      default: () => ({})
    }
  },

  data() {
    const { editorOptions } = Vue
    return {
      editorOptions: {
        minHeight: '500px',
        ...editorOptions
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
    getHtml() {
      return this.$refs.editor.invoke('getHtml')
    },
    save() {
      const { post, getPost, getHtml } = this
      return { content: getPost(), html: getHtml() }
    }
  }
})
</script>
