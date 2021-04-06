<template>
  <div id="app">
    <div class="row">
      <div class="col-xs-12 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Directives Exercise</h1>
        <button v-customOn:click="clicked" class="btn btn-primary">
          Click Me
        </button>
        <hr />
        <div
          :style="{
            width: '100px',
            height: '100px',
            'background-color': bgColor,
          }"
          v-custom-on:mouseenter="mouseEnter"
          v-custom-on:mouseleave="mouseLeave"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bgColor: "lightgreen",
    };
  },
  directives: {
    customOn: {
      bind(el, binding, vnode) {
        // el.onclick = () => {
        //   binding.value(); // 这里传入的是一个函数 clicked()
        // };
        const type = binding.arg;
        const fn = binding.value;
        el.addEventListener(type, fn);
      },
    },
  },
  methods: {
    clicked() {
      alert("I was cliecked！");
    },
    mouseEnter() {
      console.log("Mouse entered!");
      this.bgColor = "lightpink";
    },
    mouseLeave() {
      console.log("Mouse leaved!");
      this.bgColor = "lightgreen";
    },
  },
};
</script>

<style>
</style>