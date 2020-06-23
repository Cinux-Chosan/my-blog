<template>
  <v-row class="contentBg flex-column">
    <!-- 通用操作区 -->
    <v-col class="commonArea" :cols="10" :offset="1">
      <v-row>
        <v-col :cols="4">
          <v-select
            hide-details
            :items="typeList"
            v-model="post.type"
            label="文章类型"
          ></v-select>
        </v-col>
        <v-col :cols="8" class>
          <v-text-field label="输入标题" v-model="post.title" hide-details />
        </v-col>

        <v-col :cols="4">
          <v-textarea
            counter="150"
            outlined
            label="文章概要"
            v-model="post.summary"
          />
        </v-col>
      </v-row>
    </v-col>
    <!-- 核心功能编辑区 -->
    <v-col :cols="10" :offset="1">
      <component :is="post.type || 'post'" ref="editor" :post="post" />
    </v-col>
    <!-- 标签区 -->
    <v-col :cols="10" :offset="1">
      <tag-selector
        @add="addTag"
        @del="delTag"
        :tags="tags"
        v-model="post.tags"
      />
    </v-col>
    <!-- 辅助 -->
    <v-col :cols="10" :offset="1">
      <v-row>
        <v-col :cols="6">
          <v-textarea outlined label="附加 JavaScript" v-model="post.script" />
        </v-col>
        <v-col :cols="6">
          <v-textarea outlined label="附加 CSS" v-model="post.css" />
        </v-col>
      </v-row>
    </v-col>
    <!-- 浮动按钮区 -->
    <dial @save="save" @del="del" @extra="openDialog" />
    <!-- 更多设置区 -->
    <dialog-edit v-model="showDialog" />
  </v-row>
</template>

<script>
import Vue from 'vue'
import Dial from '@/components/DialEdit'
import DialogEdit from '@/components/DialogEdit'
import TagSelector from '@/components/TagSelector'
import { mapActions, mapState } from 'vuex'
import Post from '@/components/edit/post'
import Topic from '@/components/edit/topic'
import TopicPost from '@/components/edit/topicPost'
export default Vue.extend({
  layout: 'edit',
  components: {
    Dial,
    TagSelector,
    DialogEdit,
    Post,
    Topic,
    TopicPost
  },

  async asyncData({ params, $api, api, app }) {
    const { id } = params
    if (id) {
      const {
        posts: [post = {}]
      } = await app.$axios.$get(`/posts/${id}`)
      return { post }
    }
  },

  async fetch({ store, app }) {
    const {
      $axios: { $get }
    } = app
    const getTag = $get('/tags')
    const getType = $get('/posts/types')
    const [tags, types] = await Promise.all([getTag, getType])

    store.commit('tags/SAVE_TAGS', tags)
    store.commit('posts/SAVE_TYPES', types)
  },

  data() {
    const { editorOptions } = Vue
    return {
      showDialog: false,
      editorOptions: {
        minHeight: '500px',
        ...editorOptions
      },
      post: {
        tags: [],
        title: '',
        content: '',
        html: '',
        summary: ''
      }
    }
  },

  computed: {
    ...mapState('tags', ['tags']),
    ...mapState('posts', ['typeList']),
    id() {
      const { id = '' } = this.$route.params
      return id
    }
  },

  methods: {
    ...mapActions('tags', ['addTag', 'delTag', 'getTags']),

    async save() {
      const { post, getPost, getHtml, id, $axios, $router, $refs } = this
      const postChunk = await $refs.editor.save()
      const result = await $axios.$post(`posts/${id}`, {
        ...post,
        ...postChunk
      })
      if (result) {
        $router.push({ params: { id: result } })
      }
    },

    async del() {
      const { title, getPost, id, $axios } = this
      const result = await $axios.$delete(`posts/${id}`)
    },

    openDialog() {
      this.showDialog = true
    }
  }
})
</script>

<style scoped>
.commonArea {
}
</style>
