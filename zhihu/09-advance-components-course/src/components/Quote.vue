<template>
  <div>
    <div class="title">
      <slot name="title"></slot>
    </div>
    <hr />
    <div class="content">
      <slot></slot>
    </div>
    <button @click="count++">Add</button>
    <p>count：{{ count }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  destroyed() {
    // 在没有保留状态（keep-alive）会触发销毁
    console.log("Destroyed！");
  },
  deactivated() {
    console.log("Deactivated！");
  },
  activated() {
    console.log("Activated！");
  },
};
</script>

<style scoped>
div {
  border: 1px solid #ccc;
  box-shadow: 1px 1px 2px black;
  padding: 30px;
  margin: 30px auto;
  text-align: center;
}

h2 {
  color: red;
}
</style>