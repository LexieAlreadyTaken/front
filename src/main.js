import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"
import router from './router.js'
import axios from 'axios'
import VueCookies from 'vue-cookies'

Vue.use(ElementUI)
Vue.use(VueCookies)
Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
