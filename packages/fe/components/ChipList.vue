<template>
  <div>
    <v-chip
      class="mx-2 my-6 tag"
      v-for="tag in tags"
      :data-tag="tag.text"
      :key="tag.text"
      @click="$emit('click', tag)"
    >{{ tag.text }}</v-chip>
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      default: () => []
    }
  }
}
</script>
