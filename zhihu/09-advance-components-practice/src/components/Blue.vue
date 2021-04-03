<template>
  <div class="bg-info">
    <h2><slot name="title"></slot></h2>
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  border: 1px solid blue;
  padding: 30px;
  margin: 20px auto;
  text-align: center;
}
</style>