import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// vue plugins
import Transitions from 'vue2-transitions'
Vue.use(Transitions)
//
import { ProgressPlugin, PopoverPlugin } from 'bootstrap-vue'
Vue.use(PopoverPlugin)
Vue.use(ProgressPlugin)
//
import 'normalize.css/normalize.css'
import 'nprogress/nprogress.css'
import 'animate.css/animate.min.css'
// bootstrap
import '@/styles/scss/custom.scss'
// plugins
import '@/styles/scss/main.scss'
//
Vue.config.productionTip = false
//
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
