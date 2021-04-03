<template>
  <div class="row">
    <app-quote
      v-for="(quote, index) in quotes"
      :key="index"
      :quote="quote"
      :index="index"
    ></app-quote>
  </div>
</template>

<script>
import QuoteVue from "./Quote.vue";
export default {
  props: {
    quotes: Array,
  },
  components: {
    appQuote: QuoteVue,
  },
};
</script>

<style>
</style>