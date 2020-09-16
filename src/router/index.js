import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DatosBasicos from '../views/DatosBasicos.vue';
import RecoveryCode from '../views/RecoveryCode.vue';
import StepOne from '@/views/steps/StepOne.vue';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/datos-basicos',
    name: 'DatosBasicos',
    component: DatosBasicos
  },
  {
    path: '/recovery-form',
    name: 'RecoveryCode',
    component: RecoveryCode
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/first-step',
    name: 'StepOne',
    //component: StepNumbers
    component: () => import(/* webpackChunkName: "about" */ '@/component/StepNumbers.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
