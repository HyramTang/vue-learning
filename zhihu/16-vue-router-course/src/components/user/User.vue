<template>
  <div>
    <h1>The User Page</h1>
    <hr />
    <button class="btn btn-success" @click="navigateToHome">Go to Home</button>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  methods: {
    navigateToHome() {
      this.$router.push({ name: 'Home' });
    },
  },
};
</script>
