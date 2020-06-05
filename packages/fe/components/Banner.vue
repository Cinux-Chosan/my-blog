<template>
  <div>
    <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" height="400" class>
      <slot name="top" />
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <slot />
        </v-col>
      </v-row>
    </v-parallax>
  </div>
</template>