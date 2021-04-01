<template>
  <div class="col-s-12 col-sm-6">
    <ul class="list-group">
      <app-server
        v-for="(server, index) in servers"
        :key="index"
        :index="index"
        :server="server"
        :resetFn="resetActive"
      ></app-server>
    </ul>
  </div>
</template>

<script>
import Server from "./Server";
import { eventBus } from "../main";
export default {
  components: {
    appServer: Server,
  },
  data() {
    return {
      servers: [
        {
          name: "Hyram's Server",
          status: "Critial",
          isActive: false,
        },
        {
          name: "Anna's Server",
          status: "Warning",
          isActive: false,
        },
        {
          name: "Bara's Server",
          status: "Normal",
          isActive: false,
        },
      ],
    };
  },
  methods: {
    resetActive() {
      this.servers.forEach((server) => {
        server.isActive = false;
      });
    },
  },
};
</script>

<style>
</style>