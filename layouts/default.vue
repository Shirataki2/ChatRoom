<template>
  <v-app dark>
    <v-content>
      <v-toolbar>
        <v-btn
          icon
          class="hidden-xs-only"
          @click="$router.back()"
        >
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <v-toolbar-title>Chat</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-container>
        <nuxt />
      </v-container>
      <v-footer
        fixed
        app
      >
        <span>&copy; {{ new Date().getFullYear() }}</span>
      </v-footer>
    </v-content>
  </v-app>
</template>

<script>
export default {
};
</script>
