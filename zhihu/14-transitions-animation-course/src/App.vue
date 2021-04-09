<template>
  <div id="app">
    <div class="row">
      <div class="col-xs-12 col-sm-offset-2 col-md-6 col-md-offset-3">
        <H1>Animations</H1>
        <hr />
        <button class="btn btn-success" @click="show = !show">
          Show Alert
        </button>
        <br />
        <br />
        <transition name="fade">
          <div class="alert alert-info" v-if="show">This is some info</div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style scoped>
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-leave {
  /* opacity: 1; */
}

.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transition: opacity 0.5s;
  opacity: 0;
}
</style>