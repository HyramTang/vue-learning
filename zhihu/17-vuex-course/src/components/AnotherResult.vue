<template>
  <div>
    <p>Counter is: {{ doubleCounter }}</p>
    <p>Number of Clicks：{{ stringCounter }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    // counter() {
    //   return this.$store.getters.doubleCounter;
    // },
    // clickCounter() {
    //   return this.$store.getters.stringCounter;
    // },
    ...mapGetters(['doubleCounter', 'stringCounter']),
  },
};
</script>
