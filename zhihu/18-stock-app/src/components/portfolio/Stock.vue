<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ name }}
          <small>(价格:{{ price }} | 数量:{{ quantity }})</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="form-horizontal">
          <div class="form-group">
            <div class="col-xs-8" style="padding-right: 0">
              <input
                type="number"
                class="form-control"
                v-model.number="sellQuantity"
              />
            </div>
            <div class="col-xs-2">
              <button
                class="btn btn-danger"
                :disabled="
                  insufficientQuantity ||
                  sellQuantity <= 0 ||
                  !Number.isInteger(sellQuantity)
                "
                @click="sellStock"
              >
                {{ insufficientQuantity ? '卖多了' : '卖了' }}
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
    quantity: Number,
  },
  data() {
    return {
      sellQuantity: 0,
    };
  },
  computed: {
    insufficientQuantity() {
      return this.sellQuantity > this.quantity;
    },
  },
  methods: {
    sellStock() {
      const order = {
        name: this.name,
        price: this.price,
        quantity: parseInt(this.sellQuantity),
      };
      this.$store.dispatch('portfolio/sellStock', order);
      this.sellQuantity = 0;
    },
  },
};
</script>

<style></style>
