<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <app-quote>
            <h2 slot="title">{{ quoteTitle }}</h2>
            <p>A wonderful Quote</p>
          </app-quote>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Quote from "./components/Quote.vue";

export default {
  name: "App",
  data() {
    return {
      quoteTitle: "The Quote 120",
    };
  },
  components: {
    appQuote: Quote,
  },
};
</script>

<style>
</style>
