<template>
  <div>
    <h1>The User Page</h1>
    <hr />
    <p>Loaded ID：{{ id }}</p>
    <button class="btn btn-success" @click="navigateToHome">Go to Home</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  watch: {
    // eslint-disable-next-line
    $route(to, from) {
      this.id = to.params.id;
    },
  },
  methods: {
    navigateToHome() {
      this.$router.push("/");
    },
  },
};
</script>
