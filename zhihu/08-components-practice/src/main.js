import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

export const eventBus = new Vue({
  methods: {
    changeServerDetail(server) {
      this.$emit('serverWasChanged', server);
    }
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
