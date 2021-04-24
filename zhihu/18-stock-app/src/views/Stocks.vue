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
  data() {
    return {
      stocks: [
        {
          name: 'Amazon',
          price: 10,
        },
        {
          name: 'Google',
          price: 10,
        },
        {
          name: 'Apple',
          price: 10,
        },
        {
          name: 'Microsoft',
          price: 10,
        },
      ],
    };
  },
};
</script>

<style></style>
