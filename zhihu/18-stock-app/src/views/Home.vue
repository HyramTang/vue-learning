<template>
  <div class="row">
    <div class="col-xs-12">
      <div>
        <h1>管理你的股票</h1>
        <h6>你可以保存&加载你的数据</h6>
        <h6>点击结束交易日开始新的一天</h6>
        <hr />
        <p>你的余额: {{ funds | currency }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters['portfolio/funds'];
    },
  },
};
</script>
