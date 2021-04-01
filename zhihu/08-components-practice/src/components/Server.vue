<template>
  <a
    href="#"
    class="list-group-item"
    :class="{ active: server.isActive }"
    @click="changeServerDetail($event, server)"
  >
    Server #{{ index + 1 }}
  </a>
</template>

<script>
import { eventBus } from "../main";
export default {
  props: {
    index: Number,
    server: Object,
    resetFn: Function,
  },
  methods: {
    changeServerDetail(e, server) {
      this.resetFn();
      server.isActive = true;
      eventBus.changeServerDetail(server);
    },
  },
};
</script>

<style>
</style>