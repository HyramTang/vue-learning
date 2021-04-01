<template>
  <div class="col-xs-12 col-sm-6">
    <p>Server Details are currently not updated</p>
    <div v-if="server">
      <label class="control-label">Server Name：</label
      ><span>{{ server.name }}</span>
      <br />
      <label class="control-label">Server Status：</label
      ><span
        class="label"
        :class="[
          server.status == 'Critial'
            ? 'label-danger'
            : server.status == 'Warning'
            ? 'label-warning'
            : 'label-default',
        ]"
        >{{ server.status }}</span
      >
      <hr />
      <button @click="changeStatus">Change To Normal</button>
    </div>
    <div v-else>
      <p>Please select the server</p>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  data() {
    return {
      server: null,
    };
  },
  methods: {
    changeStatus() {
      this.server.status = "Normal";
    },
  },
  created() {
    eventBus.$on("serverWasChanged", (server) => {
      this.server = server;
    });
  },
};
</script>

<style>
</style>