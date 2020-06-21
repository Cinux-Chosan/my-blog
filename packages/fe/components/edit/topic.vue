<template>
  <v-row>
    <v-col :cols="12">
      自定义区：选择专题子文章
    </v-col>
    <v-col>
      <post :post="post" ref="editor" />
    </v-col>
  </v-row>
</template>

<script>
import post from './post'
export default {
  name: 'topic',
  components: { post },
  props: {
    post: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    async save() {
      const postChunk = await this.$refs.editor.save()
      return postChunk
    }
  }
}
</script>
