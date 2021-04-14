<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Routing</h1>
        <hr />
        <app-header></app-header>
        <div style="border: 1px solid lightpink">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderVue from "./components/Header.vue";
export default {
  data() {},
  components: {
    appHeader: HeaderVue,
  },
};
</script>

<style></style>
