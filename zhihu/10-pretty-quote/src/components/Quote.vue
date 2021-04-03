<template>
  <div class="col-sm-6 col-md-4 col-lg-3" @click="delQuote">
    <div class="quote panel panel-default">
      <div class="panel-body quote">{{ quote }}</div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  props: {
    quote: String,
    index: Number,
  },
  methods: {
    delQuote() {
      eventBus.$emit("quoteWasDeleted", this.index);
    },
  },
};
</script>

<style scoped>
.quote {
  cursor: pointer;
}
.quote:hover {
  background-color: #f0f0f0;
}
</style>