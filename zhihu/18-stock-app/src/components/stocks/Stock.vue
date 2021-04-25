<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ name }} <small>(价格:{{ price }})</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="form-horizontal">
          <div class="form-group">
            <div class="col-xs-8" style="padding-right: 0">
              <input
                type="number"
                class="form-control"
                v-model.number="quantity"
              />
            </div>
            <div class="col-xs-2">
              <button
                class="btn btn-success"
                :disabled="
                  insufficientFunds ||
                  quantity <= 0 ||
                  !Number.isInteger(quantity)
                "
                @click="buyStock"
              >
                {{ insufficientFunds ? '钱不够' : '购买' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    price: Number,
  },
  data() {
    return {
      quantity: 0,
    };
  },
  computed: {
    funds() {
      return this.$store.getters['portfolio/funds'];
    },
    insufficientFunds() {
      return this.quantity * this.price > this.funds;
    },
  },
  methods: {
    buyStock() {
      const order = {
        name: this.name,
        price: this.price,
        quantity: parseInt(this.quantity),
      };
      this.$store.dispatch('portfolio/buyStock', order);
      this.quantity = 0;
    },
  },
};
</script>

<style></style>
