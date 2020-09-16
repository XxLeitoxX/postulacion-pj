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
  /*{
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ // '../views/About.vue')
  //},
  {
    path: '/first-step',
    name: 'StepOne',
    //component: StepNumbers
    component: () => import(/* webpackChunkName: "about" */ '@/component/StepNumbers.vue')
  },
  {
    path: '/datos-basicos-validacion',
    name: 'SendSolicitud',
    component: () => import('../views/SendSolicitud.vue')
  },
  {
    path: '/estado-de-postulacion/:id',
    name: 'StateSolicitud',
    component: () => import('../views/StateSolicitud.vue')
  },
  {
    path: '/exito/:id',
    name: 'SuccessForm',
    component: () => import('../views/SuccessForm.vue')
  },
  {
    path: '/recovery-success',
    name: 'RecoverySuccess',
    component: () => import('../views/RecoverySuccess.vue')
  },
  {
    path: '/prueba/:numSolicitud',
    name: 'pruebaURL',
    component: () => import('../views/pruebaURL.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
