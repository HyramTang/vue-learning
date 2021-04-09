<template>
  <div id="app">
    <div class="row">
      <div class="col-xs-12 col-sm-offset-2 col-md-6 col-md-offset-3">
        <H1>Animations</H1>
        <hr />
        <select class="form-control" v-model="alertAnimation">
          <option value="fade">Fade</option>
          <option value="slide">Slide</option>
        </select>
        <br />
        <button class="btn btn-success" @click="show = !show">
          Show Alert
        </button>
        <br />
        <br />
        <transition :name="alertAnimation" appear>
          <div class="alert alert-info" v-if="show">This is some info</div>
        </transition>
        <transition name="slide" type="animation" appear>
          <div class="alert alert-info" v-if="show">This is some info</div>
        </transition>
        <transition name="fade" appear>
          <div class="alert alert-info" v-if="show">This is some info</div>
        </transition>
        <transition
          appear
          enter-active-class="animate__animated animate__bounce"
          leave-active-class="animate__animated animate__shakeX"
        >
          <div class="alert alert-info animate__animated" v-if="show">
            This is some info
          </div>
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
      alertAnimation: "fade",
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

.slide-enter {
  opacity: 0;
  /* transform: translateY(20px); */
}

.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 0.5s;
}

.slide-leave {
}

.slide-leave-to {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
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