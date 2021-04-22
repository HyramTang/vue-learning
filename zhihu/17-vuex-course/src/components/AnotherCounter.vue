<template>
  <div>
    <button
      class="btn btn-primary"
      @click="asyncIncrement({ by: 50, duration: 500 })"
    >
      Increment
    </button>
    <button
      class="btn btn-primary"
      @click="asyncDecrement({ by: 50, duration: 500 })"
    >
      Decrement
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    ...mapActions({
      asyncIncrement: 'counter/asyncIncrement',
      asyncDecrement: 'counter/asyncDecrement',
    }),
    // ...mapActions(['counter/asyncIncrement', 'counter/asyncDecrement']),
    // increment() {
    //   this.$store.commit('increment');
    //   // this.$store.state.counter++;
    //   //   this.$emit('updated', 1);
    // },
    // decrement() {
    //   this.$store.commit('decrement');
    //   // this.$store.state.counter--;
    // },
  },
};
</script>
