<template>
  <div>
    <h3>Some User Details</h3>
    <p>User loaded has ID：{{ $route.params.id }}</p>
    <router-link tag="button" class="btn btn-primary" :to="link"
      >Edit User</router-link
    >
  </div>
</template>
<script>
export default {
  data() {
    return {
      link: {
        name: 'UserEdit',
        params: {
          id: this.$route.params.id,
        },
        query: {
          locale: 'en',
          q: 100,
        },
        hash: '#data',
      },
    };
  },
  // eslint-disable-next-line
  beforeRouteEnter(to, from, next) {
    if (!to.hash) {
      next((vm) => {
        console.log(vm.link);
      });
    } else {
      next(false);
    }
  },
};
</script>
