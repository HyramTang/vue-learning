<template>
  <div id="app">
    <div class="row">
      <div class="col-xs-12 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <h2>Exercise 1</h2>
        <p>{{ text | filterReverse }}</p>

        <h2>Exercise 2</h2>
        <p>{{ text | filterCountLength }}</p>

        <h2>Exercise 3</h2>
        <p>{{ comFilterReverse }}</p>
        <p>{{ comFilterCountLength }}</p>

        <h2>Exercise 4</h2>
        <p>Please see Exercise 1</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "Hello World",
    };
  },
  filters: {
    filterReverse(value) {
      return value.split("").reverse().join("");
    },
  },
  computed: {
    comFilterReverse() {
      return this.text.split("").reverse().join("");
    },
    comFilterCountLength() {
      return this.text + ` (${this.text.length})`;
    },
  },
};
</script>

<style>
</style>
