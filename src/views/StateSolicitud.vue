<template>
    <main role="main">
        <Cabecera />
      <div class="c-steps-stepper">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-lg-8 offset-lg-2 stepper-content">
              <div class="c-steps-numbers__item orange"><span>?</span>
                <p>Preparación de <br>documentación</p>
              </div>
              <div class="c-steps-numbers__item yellow"><span>?</span>
                <p>Envío de  <br>postulación <br>por email</p>
              </div>
              <div class="c-steps-numbers__item blue"><span>?</span>
                <p>Revisión de <br>comisión de <br>socios</p>
              </div>
              <div class="c-steps-numbers__item green"><span>?</span>
                <p>Aprobación <br>del directorio</p>
              </div>
              <div class="c-steps-numbers__item purple"><span>?</span>
                <p>Notificación <br>del acuerdo</p>
              </div>
              <div class="c-steps-numbers__item lightorange"><span>?</span>
                <p>Formalización <br>de la <br>afiliación                            </p>
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
                  <p>SOLICITUD Nº 18768763287</p>
                </div>
                <div class="estado-data">
                  <div class="box-data"><span>Postulante</span>
                    <p>Gustavo Andrés González Urrutia</p>
                  </div>
                  <div class="box-data"><span>RUT</span>
                    <p>11111111-1</p>
                  </div>
                  <div class="box-data"><span>Estado</span>
                    <p>Pendiente</p>
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
</template>

<script>
import Cabecera from './../components/Cabecera.vue'

export default {
  name: 'StateSolicitud',
  components: {
    Cabecera,
  },
  data () {
    return {
     
    }
  },
  methods: {


  },

   created: function () {
    
  }
}
</script>