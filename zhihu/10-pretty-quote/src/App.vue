<template>
  <div id="app">
    <div class="container">
      <app-header
        :quoteCount="quotes.length"
        :quoteMax="maxQuotes"
      ></app-header>
      <app-new-quote @newQuoteAdded="newQuote"></app-new-quote>
      <app-quote-grid :quotes="quotes"></app-quote-grid>
      <div class="alert alert-info">Info: Click on a Quote to delete it!</div>
    </div>
  </div>
</template>

<script>
import HeaderVue from "./components/Header";
import NewQuoteVue from "./components/NewQuote.vue";
import QuoteGridVue from "./components/QuoteGrid.vue";
import { eventBus } from "./main";

export default {
  name: "App",
  components: {
    appHeader: HeaderVue,
    appNewQuote: NewQuoteVue,
    appQuoteGrid: QuoteGridVue,
  },
  data() {
    return {
      quotes: ["Just a Quote to see something"],
      maxQuotes: 10,
    };
  },
  methods: {
    newQuote(content) {
      if (this.quotes.length > this.maxQuotes) {
        return alert("Please delete Quotes first!");
      }
      this.quotes.push(content);
    },
  },
  created() {
    eventBus.$on("quoteWasDeleted", (index) => {
      this.quotes.splice(index, 1);
    });
  },
};
</script>

<style>
</style>
