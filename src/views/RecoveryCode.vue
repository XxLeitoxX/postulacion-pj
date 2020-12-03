<template>
 <main role="main">
     <Cabecera />
      <div class="c-form-steps">
        <div class="c-form-steps__sections">
          <div class="container">
            <div class="c-form-steps__content step-data">
              <div class="row">
                <div class="col-md-12 col-lg-7 offset-lg-2 recovery-form">
                  <h2>RECUPERAR CÓDIGO DE SEGUIMIENTO</h2>
                  <p>Ingrese el RUT del postulante registrada en el sistema para obtener el codigo de seguimiento asociado.</p>
                  <form action="#" id="loginform">
                    <div class="input" ref="rutRecovery">
                      <label>RUT DEL POSTULANTE</label>
                      <input type="text" ref="rutRecoveryInput" v-model="rutRecovery" name="loginrut" @focus="focus($refs.rutRecovery)" @blur="blur([$refs.rutRecovery, $refs.rutRecoveryInput.value])" @keyup="checkInput($refs.rutRecoveryInput.value)">
                      <div class="small-text" style="font-size:11px;">Sin puntos y con guión (11111111-1)</div>
                      <div id="loginrut-error" class="errorlogin" v-if="rutIsValid === false">Ingrese un rut Válido</div>
                    </div>
                    <button class="btn-red" id="loginSubmit" type="button" @click="getNumSolicitud(rutRecovery)">SOLICITAR CÓDIGO<i class="fa fa-angle-right"></i></button>
                  </form>
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
import { mapState, mapMutations } from 'vuex'
//axios
import axios from 'axios';
import VueAxios from 'vue-axios';
import { validaRut } from "./../validation/validation";

export default {
  name: 'RecoveryCode',
  components: {
    Cabecera,
  },
  data () {
    return {
     rutRecovery: '',
     urlBase: this.$store.state.URL,
     nroSolicitud: '',
     email: '',
     rutIsValid: ""
    }
  },
  methods: {
    ...mapMutations(['focus', 'blur', 'validation', 'emailRecoveryCode', 'setEmailRecovery']),

    getNumSolicitud(rut) {

        axios.get(this.urlBase+'/recuperarNroSolicitud/' + rut).then((response) => {
          this.nroSolicitud = response.data;
          
           if (Object.keys(this.nroSolicitud).length !== 0) { 

             if (this.nroSolicitud[0].status == '0' || this.nroSolicitud[0].status == '2') {
                alert("No existe una postulación vigente asociada al rut ingresado");
                this.rutRecovery = '';
             } else {
                this.email = response.data[0].email;
                this.setEmailRecovery(this.email);
                this.nextStep();
             }
             
           } else {
             alert("No existe una postulación asociada al rut ingresado")
           }    
        }).catch(function (error) {
        console.log("AXIOS ERROR: ", error);
        });
    },

    checkInput(rut) {
      if (rut !== "") {
        validaRut(rut)
          ? (this.rutIsValid = true)
          : (this.rutIsValid = false);
      }
    },

    nextStep() {
      if (this.rutIsValid == true) {
          this.$router.push({ name: "RecoverySuccess" });
      } else {
        alert("El rut debe ser válido");
      }
    }
  },

  created: function () {
    
  },

  computed: {
   /// ...mapState(['rutIsValid'])
  }
}
</script>