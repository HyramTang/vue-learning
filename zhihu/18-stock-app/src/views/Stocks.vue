<template>
  <div class="row">
    <app-stock
      v-for="(stock, index) in stocks"
      :key="index"
      :name="stock.name"
      :price="stock.price"
    ></app-stock>
  </div>
</template>

<script>
import StockVue from '../components/stocks/Stock.vue';
export default {
  components: {
    appStock: StockVue,
  },
  // data() {
  //   return {
  //     stocks: this.$store.getters['stocks/stocks']
  //   };
  // },
  computed: {
    stocks() {
      return this.$store.getters['stocks/stocks'];
    },
  },
};
</script>

<style></style>
