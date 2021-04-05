<template>
  <div>
    <div class="form-group">
      <label>First Name：</label>
      <input
        type="text"
        class="form-control"
        :value="firstName"
        @input="changeName(true, $event)"
      />
    </div>

    <div class="form-group">
      <label>Last Name：</label>
      <input
        type="text"
        class="form-control"
        :value="lastName"
        @input="changeName(false, $event)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["value"],
  data() {
    return {
      curValue: "",
    };
  },
  methods: {
    changeName(isFirst, event) {
      let name = "";
      if (isFirst) {
        name = event.target.value + " " + this.lastName;
      } else {
        name = this.firstName + " " + event.target.value;
      }
      this.curValue = name;
      this.$emit("input", name);
    },
  },
  computed: {
    firstName() {
      return this.curValue.split(" ")[0];
    },
    lastName() {
      return this.curValue.split(" ")[1];
    },
  },
  created() {
    this.curValue = this.value;
  },
};
</script>

<style>
</style>