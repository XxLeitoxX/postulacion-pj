<template>
  <div>
    <main role="main">
        <!-- <Cabecera /> -->
      <div class="c-steps-stepper">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-lg-8 offset-lg-2 stepper-content">
              <div class="c-steps-numbers__item orange"><span>?</span>
                <p>Postulación <br> enviada</p>
              </div>
              <div class="c-steps-numbers__item yellow"><span>?</span>
                <p>Verificación de <br> antecedentes <br> técnicos</p>
              </div>
              <div class="c-steps-numbers__item blue"><span>?</span>
                <p>Evaluación <br> de comisión <br> de socios</p>
              </div>
              <div class="c-steps-numbers__item green"><span>?</span>
                <p>Revisión del <br> Directorio</p>
              </div>
              <div class="c-steps-numbers__item purple"><span>?</span>
                <p>Notificación <br>del acuerdo</p>
              </div>
              <div class="c-steps-numbers__item lightorange"><span>?</span>
                <p>Formalización <br>de la <br>afiliación                          </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="c-form-steps">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-lg-8 offset-lg-2 form-estado">
              <div class="estado-box">
                <h2>ESTADO DE POSTULACIÓN</h2>
                <div class="estado-info">
                  <p>ENVÍO DE POSTULACIÓN POR EMAIL</p>
                </div>
                <div class="estado-id"> 
                  <p>SOLICITUD Nº {{globalRequestNumber}}</p>
                </div>
                <div class="estado-data">
                  <div class="box-data"><span>Postulante</span>
                    <p>{{}}</p>
                  </div>
                  <div class="box-data"><span>RUT</span>
                    <p>{{rutGlobal}}</p>
                  </div>
                  <div class="box-data"><span>Estado</span>
                    <p>{{finalStatus}}</p>
                  </div>
                </div>
                <div class="estado-list">
                  <h3>¿DUDAS SOBRE EL PROCESO?</h3>
                  <ul>
                    <li><a href="https://bitbanglab.cl/clientes/cchc/cchc_109_postulantes/html/php/" target="_blank">Cómo postular<span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.6653 2.33206L7.66532 10.3321L6.04907 8.71582L14.0491 0.71582L15.6653 2.33206Z" fill="#00B29A"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9.14286 2.28571L13.7143 2.28571V6.85714H16V0H9.14286V2.28571ZM4.57143 2.28571V0H0V16H16V11.4286H13.7143V13.7143H2.28571V2.28571L4.57143 2.28571Z" fill="#00B29A"/></svg></span></a></li>
                    <li><a href="https://bitbanglab.cl/clientes/cchc/cchc_109_postulantes/html/php/contacto.php" target="_blank">Contacta el ejecutivo <br>según tu región<span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.6653 2.33206L7.66532 10.3321L6.04907 8.71582L14.0491 0.71582L15.6653 2.33206Z" fill="#00B29A"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9.14286 2.28571L13.7143 2.28571V6.85714H16V0H9.14286V2.28571ZM4.57143 2.28571V0H0V16H16V11.4286H13.7143V13.7143H2.28571V2.28571L4.57143 2.28571Z" fill="#00B29A"/></svg></span></a></li>
                  </ul><a href="http://cchc.cl/">VOLVER A CCHC.CL</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
    
</template>

<script>
import Cabecera from './../components/Cabecera.vue'
import { mapState, mapMutations } from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

export default {
  name: 'RequestStatus',
  components: {
    Cabecera,
  },
  data () {
    return {
     
    }
  },
  methods: {


  },

  computed: {
    ...mapState(['globalRequestNumber', 'rutGlobal', 'processStageRequest', 'finalStatus']),
  },

   created: function () {
    
  }
}
</script>

<style scoped>
  /*.c-steps-stepper .container .c-steps-numbers__item.orange span {
    background: url(/img/icon-check.934cbfc2.svg) center center no-repeat #fd7900;
    color: #fd7900;
    text-indent: -9999px;
    overflow: hidden;
  }*/
</style>