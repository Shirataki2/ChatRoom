<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <h1>Home</h1>
  </v-layout>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import client from "@/plugins/socket.io";

@Component({
  middleware: "reject-direct"
})
export default class YourComponent extends Vue {
  mounted() {}
}
</script>
