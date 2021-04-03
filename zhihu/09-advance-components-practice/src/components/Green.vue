<template>
  <div class="bg-success">
    <h2><slot name="title"></slot></h2>
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  border: 1px solid green;
  padding: 30px;
  margin: 20px auto;
  text-align: center;
}
</style>