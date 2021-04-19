<template>
  <div>
    <h3>Edit the {{ $route.params.id }} User</h3>
    <p>Locale：{{ $route.query.locale }}</p>
    <p>Analytics：{{ $route.query.q }}</p>
    <div style="height: 700px"></div>
    <p id="data">Some text</p>
  </div>
</template>
