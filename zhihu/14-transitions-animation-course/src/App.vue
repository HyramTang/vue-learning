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
        <transition :name="alertAnimation" appear mode="out-in">
          <div class="alert alert-info" v-if="show" key="info">
            This is some info
          </div>
          <div class="alert alert-warning" v-else key="warning">
            This is some warning
          </div>
        </transition>
        <hr />
        <button class="btn btn-primary" @click="load = !load">
          Load / Remove Element
        </button>
        <br />
        <br />
        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @enter-cancelled="enterCancelled"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @leave-cancelled="leaveCancelled"
          :css="false"
        >
          <div
            style="width: 300px; height: 100px; background-color: lightgreen"
            v-if="load"
          ></div>
        </transition>
        <hr />
        <button
          class="btn btn-primary"
          @click="
            selectedComponent == 'appSuccess'
              ? (selectedComponent = 'appDanger')
              : (selectedComponent = 'appSuccess')
          "
        >
          Toggle Components
        </button>
        <br /><br />
        <transition name="fade">
          <component :is="selectedComponent"></component>
        </transition>
        <hr />
        <button class="btn btn-success" @click="addItem">Add Item</button>
        <br />
        <br />
        <ul class="list-group">
          <transition-group name="slide">
            <li
              class="list-group-item"
              v-for="(number, index) in numbers"
              :key="number"
              @click="removeItem(index)"
              style="cursor: pointer"
            >
              {{ number }}
            </li>
          </transition-group>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import DangerVue from "./components/Danger";
import SuccessVue from "./components/Success";

export default {
  components: {
    appDanger: DangerVue,
    appSuccess: SuccessVue,
  },
  data() {
    return {
      show: true,
      alertAnimation: "fade",
      load: true,
      elementWidth: 100,
      selectedComponent: "appSuccess",
      numbers: [1, 2, 3],
    };
  },
  methods: {
    beforeEnter(el) {
      console.log("beforeEnter");
      this.elementWidth = 100;
      el.style.width = this.elementWidth + "px";
    },
    enter(el, done) {
      console.log("enter");
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = this.elementWidth + round * 10 + "px";
        round++;
        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterEnter(el) {
      console.log("afterEnter");
    },
    enterCancelled(el) {
      console.log("enterCancelled");
    },
    beforeLeave(el) {
      console.log("beforeLeave");
      this.elementWidth = 300;
      el.style.width = this.elementWidth + "px";
    },
    leave(el, done) {
      console.log("leave");
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = this.elementWidth - round * 10 + "px";
        round++;
        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterLeave(el) {
      console.log("afterLeave");
    },
    leaveCancelled(el) {
      console.log("leaveCancelled");
    },
    addItem() {
      const pos = Math.floor(Math.random() * this.numbers.length);
      this.numbers.splice(pos, 0, this.numbers.length + 1);
    },
    removeItem(index) {
      this.numbers.splice(index, 1);
    },
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

.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
  position: absolute;
}

.slide-move {
  transition: transform 1s;
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