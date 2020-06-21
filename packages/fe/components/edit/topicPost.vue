<template>
  <v-row>
    <v-col :cols="12">
      自定义区：选择属于哪个专题
    </v-col>
    <v-col>
      <post :post="post" ref="editor" />
    </v-col>
  </v-row>
</template>

<script>
import post from './post'
export default {
  name: 'topicPost',
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
