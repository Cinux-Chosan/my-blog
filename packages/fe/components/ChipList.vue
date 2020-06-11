<template>
  <div>
    <v-chip
      exact
      v-for="tag in tags"
      :key="tag.text"
      :nuxt="nav"
      :to="{ name: 'posts', query:{ ...$route.query, tag: tag.text }}"
      @click="$emit('click', tag)"
      class="mx-2 my-6 tag"
    >{{ tag.text }}</v-chip>
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      default: () => []
    },
    nav: {
      type: Boolean,
      default: false
    }
  }
}
</script>
