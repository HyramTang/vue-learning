<template>
  <div class="row">
    <app-stock
      v-for="(stock, index) in stocks"
      :key="index"
      :name="stock.name"
      :price="stock.price"
      :quantity="stock.quantity"
    ></app-stock>
  </div>
</template>

<script>
import StockVue from '../components/portfolio/Stock.vue';
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
          quantity: 100,
        },
        {
          name: 'Google',
          price: 10,
          quantity: 100,
        },
        {
          name: 'Apple',
          price: 10,
          quantity: 100,
        },
        {
          name: 'Microsoft',
          price: 10,
          quantity: 100,
        },
      ],
    };
  },
};
</script>

<style></style>
