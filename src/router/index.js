import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DatosBasicos from '../views/DatosBasicos.vue';
import RecoveryCode from '../views/RecoveryCode.vue';


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
