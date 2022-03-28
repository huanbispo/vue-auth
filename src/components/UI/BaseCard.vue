<template>
  <v-card class="mx-auto mt-12" max-width="400">
    <v-progress-linear
      color="deep-purple"
      height="10"
      v-if="load"
      :indeterminate="true"
    ></v-progress-linear>

    <v-toolbar dark color="primary">
      <v-btn v-if="goBack" icon dark @click="$router.go(-1)">
        <v-icon dark left>mdi-arrow-left </v-icon>
      </v-btn>

      <v-toolbar-title>{{ text }}</v-toolbar-title>
    </v-toolbar>
    <slot></slot>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
      required: true,
    },
    isGoingBack: {
      type: Boolean,
      default: false,
      required: false,
    },
    loading: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  computed: {
    load() {
      return this.loading;
    },
    text() {
      return this.title;
    },
    goBack() {
      return this.isGoingBack;
    },
  },
};
</script>
