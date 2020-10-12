<template>
  <main role="main">
      <Cabecera />
      <div class="c-form-info whitebg">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 offset-lg-2 c-form-info__wrapper redirect01">
              <div class="c-form-info__validacion">
                <div class="info">
                  <h2> <strong>Espera tu Validación de </strong>correo electrónico</h2>
                  <p>En unos minutos le enviaremos un correo a la casilla <a href="#">{{ emailGlobal }}</a> con las instrucciones de validación necesarias para continuar con el proceso de postulación. <br>Por favor revise su bandeja de entrada y carpeta de spam.</p>
                  <p>Además, contarás con un número de solicitud para hacer seguimiento o continuar el proceso si es que es necesario.</p>
                </div>
              </div>
              <div class="c-form-info__documentos">
                <div class="info">
                  <h2> <strong>Documentos requeridos para el proceso</strong></h2>
                  <p>Para las siguientes etapas de postulación deberá tener a mano los siguientes datos y documentos en formato digital (jpg, png o pdf).</p>
                  <ul>
                    <li>Escritura de constitución</li>
                    <li>Transformaciones y modificaciones (max 10 adjuntos)</li>
                    <li>Memoria o CV de la empresa</li>
                    <li>Escritura social (S.R.L)</li>
                    <li>Escritura social (S.A)</li>
                    <li>Logo</li>
                  </ul>
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
import { mapState } from "vuex";
export default {
  name: 'SendSolicitud',
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
    ...mapState(['emailGlobal']),
  },

   created: function () {
    
  }
}
</script>