<template>
  <v-card class="mx-auto mt-12" max-width="400">
    <v-progress-linear
      color="deep-purple"
      height="10"
      v-if="load"
      :indeterminate="true"
    ></v-progress-linear>
    <v-toolbar dark color="primary">
      <v-toolbar-title>{{ text }}</v-toolbar-title>
    </v-toolbar>
    <slot></slot>
  </v-card>
</template>

<script>
export default {
  props: ["loading", "title"],
  computed: {
    load() {
      return this.loading;
    },
    text() {
      return this.title;
    },
  },
};
</script>
