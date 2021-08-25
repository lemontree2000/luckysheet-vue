import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './routes/index'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(ElementUi)

new Vue({
  render: h => h(App),
 router
}).$mount('#app')
