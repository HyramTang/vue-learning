<template>
  <div class="row">
    <form>
      <div
        class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group"
      >
        <label>Quote</label>
        <textarea rows="3" class="form-control" v-model="content"></textarea>
      </div>
      <div
        class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group"
      >
        <button
          class="btn btn-primary"
          type="button"
          @click="newQuote"
        >
          Add Quote
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    newQuoteFn: Function,
  },
  data() {
    return {
      content: "",
    };
  },
  methods: {
    newQuote() {
      this.$emit("newQuoteAdded", this.content);
      this.content = "";
    },
  },
};
</script>

<style>
</style>