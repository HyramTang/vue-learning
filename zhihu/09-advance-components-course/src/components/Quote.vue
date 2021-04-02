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