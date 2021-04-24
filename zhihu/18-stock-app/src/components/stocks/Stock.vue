<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ name }} <small>(Price:{{ price }})</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="form-horizontal">
          <div class="form-group">
            <div class="col-xs-8" style="padding-right: 0">
              <input type="number" class="form-control" />
            </div>
            <div class="col-xs-2">
              <button class="btn btn-success">Buy</button>
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
};
</script>

<style></style>
