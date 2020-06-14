<template>
  <div>
    <v-chip
      exact
      v-for="tag in tags"
      :key="tag.text"
      :nuxt="nav"
      :to="{ name: 'posts', query:{ ...$route.query, tag: tag.text }}"
      @click="$emit('click', tag)"
      class="mx-2 mt-4 mb-2 tag"
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
