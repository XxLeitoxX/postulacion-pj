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
                  <p class="u-mb50">Recuerda revisar la carpeta de SPAM.</p><a class="btn-blue" @click="home">INGRESAR<i class="fa fa-angle-right"></i></a><a class="recovery" style="cursor: pointer" @click="recoveryCode">Solicitar envío de código nuevamente</a>
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
     correoConX: '',
     emailGlobal: ''
    }
  },
  methods: {

    recoveryCode(){
      this.$router.push({ name: "RecoveryCode" });
    },

    home() {
      this.$router.push({ name: "Home" });
    },

    /*modificarCorreo(email) {
      console.log(email);
      let emailArr = this.email.split('@');
      let letras = emailArr[0];
      let arrletras = letras.split('');
      for (let index = 3; index < arrletras.length; index++) {
            arrletras[index] = "x"; 
      }
      let letrasConX = arrletras.join('');
      this.correoConX = letrasConX + '@'+ emailArr[1];
      //console.log(this.correoConX);
    }*/
 
  },


  created: function () {

      //console.log(this.emailRecoveryCodeGlobal);
      //this.modificarCorreo(this.emailRecoveryCodeGlobal);

  },


  computed: {
    ...mapState(['emailRecoveryCodeGlobal'])
  }

   


}
</script>