<template>
  <v-row>
    <v-col :cols="8">
      <v-list>
        <template v-for="post in postList">
          <v-list-item :key="post._id" :id="`post-${post._id}`">
            <v-list-item-content>
              <nuxt-link
                :to="{ name: 'posts-id', params: { id: post._id } }"
                class="mx-auto noDecoration"
              >
                <v-hover #default="{hover}">
                  <post-sum
                    :post="post"
                    :class="`elevation-${hover ? 5 : 2}`"
                  />
                </v-hover>
              </nuxt-link>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-col>
    <v-col :cols="4"
      >{{ activeId }}
      <v-treeview
        hoverable
        activatable
        open-on-click
        @update:active="activeTitle"
        :items="postList"
        item-key="_id"
        item-text="title"
      />
      <ul class="postNavList">
        <li class="postNav" v-for="post in postList" :key="post._id">
          <span @click="goToPost(post)">{{ post.title }}</span>
        </li>
      </ul>
      <v-pagination
        v-if="paginationLen"
        v-model="page"
        :total-visible="5"
        :length="paginationLen"
        class="justify-start"
      ></v-pagination>
    </v-col>
  </v-row>
</template>

<script>
import Banner from '@/components/Banner'
import { mapState, mapGetters } from 'vuex'
import PostSum from '@/components/PostSum'

export default {
  components: { Banner, PostSum },
  watchQuery: true,

  // for SEO
  head() {
    const content = `${Object.values(this.posts).map(post =>
      post.tags.map(t => t.text)
    )}`
    return {
      meta: [
        { hid: 'keywords', name: 'keywords', content },
        { hid: 'description', name: 'description', content }
      ]
    }
  },

  async fetch({ store, app, query }) {
    const { posts, pagination } = await app.$axios.$get('/posts', {
      params: query
    })
    store.commit('posts/SAVE_POSTS', posts)
    store.commit('posts/UPDATE_PAGINATION', pagination)
  },

  data() {
    return {
      activeId: ' '
    }
  },

  computed: {
    ...mapState('posts', ['postList', 'pagination']),
    ...mapGetters('posts', ['posts']),
    page: {
      get() {
        return Number(this.pagination.page)
      },
      set(v) {
        const { $route, $router } = this
        $router.push({ query: { ...$route.query, page: v } })
      }
    },
    paginationLen() {
      const { pagination } = this
      const { total, limit } = pagination
      return Math.ceil(total / limit)
    }
  },
  methods: {
    async goToPost(post) {
      await this.$vuetify.goTo(`#post-${post._id}`)
    },
    async activeTitle([id]) {
      await this.$vuetify.goTo(`#post-${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.noDecoration {
  flex: 0 !important;
}
.postNavList {
  padding: 12px;
  li {
    line-height: 2em;
    span {
      cursor: pointer;
    }
  }
}
</style>
