import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Vue.filter('filterCountLength', (value) => {
//   return value + ` (${value.length})`
// })

import { countLengthMixins } from "./countLengthMixins";
Vue.mixin(countLengthMixins)

new Vue({
  render: h => h(App),
}).$mount('#app')
