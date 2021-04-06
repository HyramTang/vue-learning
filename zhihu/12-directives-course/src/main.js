import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('highlight', {
  bind(el, binding, vnode) {
    el.style.backgroundColor = 'green';
    el.style.color = 'white'
  }

});

new Vue({
  render: h => h(App),
}).$mount('#app')
