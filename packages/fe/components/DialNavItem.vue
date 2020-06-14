<template>
  <v-btn
    dark
    fab
    nuxt
    v-bind="{ ...$attrs, ...navObj.attrs }"
    v-on="navObj.on"
  >
    <slot>
      <v-icon>{{ navObj.text }}</v-icon>
    </slot>
  </v-btn>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    navObj: { type: Object, default: () => ({}) }
  },
  data() {
    return {
    }
  }
}
</script>
