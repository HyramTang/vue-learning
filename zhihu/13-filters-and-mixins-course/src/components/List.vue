<template>
  <div>
    <h1>Filters & Mixins</h1>
    <input type="text" v-model="filterText" class="form-control" />
    <ul>
      <li v-for="fruit in filteredFruits" :key="fruit">{{ fruit }}</li>
    </ul>
  </div>
</template>

<script>
import { fruitMixins } from "../fruitMixins";
export default {
  mixins: [fruitMixins],
  created() {
    console.log("Inside List Created Hook!");
  },
};
</script>

<style>
</style>