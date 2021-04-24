<template>
  <div id="app" class="container">
    <app-header></app-header>
    <router-view />
  </div>
</template>
<script>
import HeaderVue from './components/Header.vue';

export default {
  components: {
    appHeader: HeaderVue,
  },
};
</script>

<style scoped>
#app {
  padding-top: 70px;
}
</style>
