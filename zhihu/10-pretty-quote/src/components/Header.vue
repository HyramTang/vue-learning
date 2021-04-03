<template>
  <div class="row">
    <div class="col-sm-12">
      <h3>Quotes Added</h3>
      <div class="progress">
        <div class="progress">
          <div class="progress-bar" :style="{ width: quoteCount * 10 + '%' }">
            {{ quoteCount }} / {{ quoteMax }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    quoteCount: Number,
    quoteMax: Number,
  },
};
</script>

<style>
</style>