<template>
    <main role="main">
        <Cabecera />
      <div class="c-form-info whitebg">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 offset-lg-2 c-form-info__wrapper">
              <div class="c-form-info__validacion recovery">
                <div class="info">
                  <h2>CÓDIGO ENVIADO</h2>
                  <p>El código ha sido enviado a tu correo {{ emailRecoveryCodeGlobal }} y debería llegar en unos minutos.</p>
                  <p class="u-mb50">Recuerda la carpeta de SPAM.</p><a class="btn-blue" @click="home">INGRESAR<i class="fa fa-angle-right"></i></a><a class="recovery" @click="recoveryCode">Solicitar envío de código nuevamente</a>
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
import { mapState } from 'vuex'

export default {
  name: 'RecoverySuccess',
  components: {
    Cabecera,
  },
  data () {
    return {
     
    }
  },
  methods: {

    recoveryCode(){
      this.$router.push({ name: "RecoveryCode" });
    },

    home() {
      this.$router.push({ name: "Home" });
    },

    created: function () {
    
  },

  },

  computed: {
    ...mapState(['emailRecoveryCodeGlobal'])
  }

   


}
</script>