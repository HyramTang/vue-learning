<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <br />
          <button
            class="btn btn-primary"
            @click="selectedComponent = 'appBlue'"
          >
            Load Blue Template
          </button>
          <button
            class="btn btn-success"
            @click="selectedComponent = 'appGreen'"
          >
            Load Green Template
          </button>
          <button class="btn btn-danger" @click="selectedComponent = 'appRed'">
            Load Red Template
          </button>
          <hr />
          <component :is="selectedComponent">
            <span slot="title">Title is here</span>
            <p>This is content</p>
          </component>
          <!-- <app-blue>
            <p>This is content</p>
          </app-blue>
          <app-green>
            <p>This is content</p>
          </app-green>
          <app-red>
            <p>This is content</p>
          </app-red> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlueVue from "./components/Blue.vue";
import GreenVue from "./components/Green.vue";
import RedVue from "./components/Red.vue";

export default {
  name: "App",
  data() {
    return {
      selectedComponent: "appBlue",
    };
  },
  components: {
    appGreen: GreenVue,
    appBlue: BlueVue,
    appRed: RedVue,
  },
};
</script>

<style>
</style>
