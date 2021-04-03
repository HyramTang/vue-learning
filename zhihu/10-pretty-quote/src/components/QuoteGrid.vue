<template>
  <div class="row">
    <app-quote
      v-for="(quote, index) in quotes"
      :key="index"
      :quote="quote"
      @click.native="delQuote(index)"
    >
      {{ quote }}
    </app-quote>
  </div>
</template>

<script>
import { eventBus } from "../main";
import QuoteVue from "./Quote.vue";
export default {
  components: {
    appQuote: QuoteVue,
  },
  props: {
    quotes: Array,
  },
  methods: {
    delQuote(index) {
      eventBus.$emit("quoteWasDeleted", index);
    },
  },
};
</script>

<style>
</style>