<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{ switchName() }}</p>
    <p>User Age: {{ userAge }}</p>
    <button @click="resetName">Reset Name by $emit event</button>
    <br />
    <button @click="resetFn">Reset Name by Function</button>
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  // props: ["name"],
  props: {
    name: String,
    resetFn: Function,
    userAge: Number,
  },
  // props: {
  //   name: {
  //     type: String,
  //     required: true,
  //     default: "Hyram",
  //   },
  // },
  methods: {
    switchName() {
      return this.name.split("").reverse().join("");
    },
    resetName() {
      this.name = "Hyram";
      this.$emit("nameWasReseted", this.name);
    },
  },
  created() {
    eventBus.$on("ageWasEdited", (age) => {
      this.userAge = age;
    });
  },
};
</script>

<style scoped>
div {
  background-color: lightcoral !important;
}
</style>
