<template>
  <v-card class="mx-auto" width="400">
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title>{{ post.title }}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0" v-if="post.tags && post.tags.length">
      <v-chip
        class="mx-2 mb-2"
        small
        v-for="tag in post.tags"
        :data-tag="tag.text"
        :key="tag.text"
      >{{ tag.text }}</v-chip>
    </v-card-subtitle>

    <v-card-text class="text--primary mt-1 pb-0" v-if="post.summary">{{post.summary}}</v-card-text>

    <v-card-actions>
      <v-btn color="orange" @click.prevent text>Share</v-btn>

      <v-btn color="orange" text>Explore</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>
