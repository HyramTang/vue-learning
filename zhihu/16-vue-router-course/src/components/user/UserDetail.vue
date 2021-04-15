<template>
  <div>
    <h3>Some User Details</h3>
    <p>User loaded has ID：{{ $route.params.id }}</p>
    <router-link
      tag="button"
      class="btn btn-primary"
      :to="{ name: 'UserEdit', params: { id: $route.params.id } }"
      >Edit User</router-link
    >
  </div>
</template>
