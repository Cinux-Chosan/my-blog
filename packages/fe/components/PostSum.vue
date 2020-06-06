<template>
  <div>
    <v-subheader inset>{{post.title }}</v-subheader>

    {{post.content}}
  </div>
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