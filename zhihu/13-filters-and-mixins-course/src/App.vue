<template>
  <div id="app">
    <div class="row">
      <div class="col-xs-12 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <p>{{ text | toUppercase | toLowercase }}</p>
        <hr />
        <input type="text" v-model="filterText" class="form-control" />
        <ul>
          <li v-for="fruit in filteredFruits" :key="fruit">{{ fruit }}</li>
        </ul>
        <hr />
        <app-list></app-list>
      </div>
    </div>
  </div>
</template>

<script>
import ListVue from "./components/List.vue";
import { fruitMixins } from "./fruitMixins";
export default {
  components: {
    appList: ListVue,
  },
  mixins: [fruitMixins],
  data() {
    return {
      text: "Hello there!",
    };
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    },
  },
};
</script>

<style>
</style>