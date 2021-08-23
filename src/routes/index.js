import VueRouter from "vue-router";
import HelloWorld from "../views/hello/index.vue";
import Demo from "../views/demo/index.vue";
import Mock from '../views/mock/index.vue'
import Index from '../views/index.vue'

export default new VueRouter({
  mode: "history",
  routes: [
    {
      name: 'index',
      path: '/',
      component: Index,
    },
    {
      name: 'hello',
      path: '/helloXlsx',
      component: HelloWorld
    },
    {
      name: 'demo',
      path: '/demo',
      component: Demo
    },
    {
      name: 'mock',
      path: '/mock',
      component: Mock
    }
  ]
});
