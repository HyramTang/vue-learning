<template>
  <div class="container">
    <app-header></app-header>
    <hr />
    <div class="row">
      <app-servers></app-servers>
      <app-server-details></app-server-details>
    </div>
    <hr />
    <app-footer></app-footer>
  </div>
</template>

<script>
import FooterVue from "./components/Footer.vue";
import HeaderVue from "./components/Header.vue";
import ServersVue from "./components/Servers.vue";
import ServerDetailsVue from "./components/ServerDetails.vue";
export default {
  components: {
    "app-header": HeaderVue,
    "app-footer": FooterVue,
    "app-servers": ServersVue,
    "app-server-details": ServerDetailsVue,
  },
};
</script>

<style>
</style>