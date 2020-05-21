import Vue from "vue";

declare module "vue/types/vue" {
  interface Vue {
    progress: number;
    query: boolean;
    active: boolean;
  }
}
