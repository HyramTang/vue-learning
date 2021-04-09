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
        <transition appear name="fade">
          <div class="alert alert-info" v-if="show">This is some info</div>
        </transition>
        <transition appear name="slider" type="animation">
          <div class="alert alert-info" v-if="show">This is some info</div>
        </transition>
        <transition appear name="fade">
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
      show: true,
    };
  },
};
</script>

<style scoped>
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 1s;
}

.fade-leave {
  /* opacity: 1; */
}

.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transition: opacity 1s;
  opacity: 0;
}

.slider-enter {
  opacity: 0;
  /* transform: translateY(20px); */
}

.slider-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 0.5s;
}

.slider-leave {
}

.slider-leave-to {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 3s;
  opacity: 0;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}
</style>