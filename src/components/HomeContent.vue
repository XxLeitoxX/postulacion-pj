<template>
  <div>
    <main role="main" v-if="homeContent">
      <div class="c-login">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6 c-login__st">
              <div class="c-login__st-box">
                <h2>Postulación <br><strong>Nuevos Socios</strong></h2>
                <p>Quiero iniciar un nuevo<br>proceso de postulación.</p><router-link to="/datos-basicos" class="btn-red btn-login">INICIAR Proceso<i class="fa fa-angle-right"></i></router-link>
                <p>¿DUDAS SOBRE EL PROCESO?</p>
                <ul>
                  <li><a href="https://bitbanglab.cl/clientes/cchc/cchc_109_postulantes/html/php/" target="_blank">Cómo postular<span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.6653 2.33206L7.66532 10.3321L6.04907 8.71582L14.0491 0.71582L15.6653 2.33206Z" fill="#00B29A"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9.14286 2.28571L13.7143 2.28571V6.85714H16V0H9.14286V2.28571ZM4.57143 2.28571V0H0V16H16V11.4286H13.7143V13.7143H2.28571V2.28571L4.57143 2.28571Z" fill="#00B29A"/></svg></span></a></li>
                  <li><a href="https://bitbanglab.cl/clientes/cchc/cchc_109_postulantes/html/php/contacto.php" target="_blank">Contacta el ejecutivo <br>según tu región<span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.6653 2.33206L7.66532 10.3321L6.04907 8.71582L14.0491 0.71582L15.6653 2.33206Z" fill="#00B29A"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9.14286 2.28571L13.7143 2.28571V6.85714H16V0H9.14286V2.28571ZM4.57143 2.28571V0H0V16H16V11.4286H13.7143V13.7143H2.28571V2.28571L4.57143 2.28571Z" fill="#00B29A"/></svg></span></a></li>
                </ul><a class="btn-inline" href="http://cchc.cl/" target="_blank">VOLVER A CCHC.CL</a>
              </div>
            </div>
            <div class="col-sm-12 col-md-6 c-login__con">
              <div class="c-login__con-box">
                <h2> <strong>Continuar </strong>Proceso <br>de solicitud</h2>
                <p>Tengo un proceso iniciado y me gustaría retomarlo o quiero ver el estado de mi postulación</p>
                <form action="#" id="loginform">
                  <div class="input" ref="rut">
                    <label>RUT DE LA EMPRESA</label>
                    <input type="text" name="loginrut" ref="rutInput" @focus="focus($refs.rut)" @blur="blur([$refs.rut, $refs.rutInput.value]), getRequestNumber($refs.rutInput.value)" 
                      v-model="rut" @keyup="rutValidation($refs.rutInput.value)" />
                    <div class="small-text" style="font-size:11px;">Sin puntos y con guión (11111111-1)</div>
                    <div id="loginrut-error" class="errorlogin" v-if="rutIsValid === false">Ingrese un rut Válido</div>
                  </div>
                  <div class="input" ref="solicitud">
                    <label>NÚMERO DE SOLICITUD</label>
                    <input type="text" name="loginsolicitud" ref="requestInput" @focus="focus($refs.solicitud)" @blur="blur([$refs.solicitud, $refs.requestInput.value])" v-model="numeroSolicitud" 
                    @keyup="requestNumberValidation()">
                    <div id="loginrut-error" class="errorlogin" v-if="requestNumberIsValid === false">Ingrese un número</div>
                    <span aria-label="Este número fue enviado al correo electrónico de la persona que inició el proceso" data-microtip-position="right" role="tooltip">?</span>
                    
                  </div>
                  <button class="btn-blue" id="loginSubmit" type="button" @click="validationProcess()">
                      Continuar proceso<i class="fa fa-angle-right"></i>
                  </button>
                </form><router-link to="/recovery-form" class="recovery">Recuperar código de seguimiento</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <RequestStatus v-if="showStatus"></RequestStatus>
  </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex'
import RequestStatus from './../views/RequestStatus.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
export default {
  name: 'HomeContent',
  components: {
    RequestStatus
  },
  data () {
    return {
      rut: '',
      numeroSolicitud: '',
      requestNumberIsValid: '',
      requestNumber: '',
      data: '',
      homeContent: true,
      showStatus: '',
      statusRequest: '',
    }
  },
  methods: {

    keypress() {
      
      //this.isActive = 'active';
      //console.log(this.ref);
      //this.$store.commit('focus',this.$refs);
      console.log("test");
    },
    
    ...mapMutations(['focus', 'blur', 'rutValidation', 'setRutIsValid', 'saveRequestNumber', 
        'getRutGlobal', 'saveStatusRequest', 'saveProcessStage']),

    requestNumberValidation() {
      if (this.numeroSolicitud == "") {
        this.requestNumberIsValid = false;
      } else {
        this.requestNumberIsValid = true;
      }
    },

    getRequestNumber(rut) {
      console.log("rut: " + rut);
      axios.get(this.URL + '/buscarPostulante/' + rut).then((response) => {
        this.data = response.data;
        console.log(this.data);
        this.requestNumber = this.data[0].nro_solicitud;
        console.log(this.requestNumber);
        this.saveRequestNumber(this.requestNumber);
        this.getStatusRequest(this.requestNumber);
      }).catch(function (error) {
      console.log("AXIOS ERROR: ", error);
      });
    },

    getStatusRequest (number) {
      console.log(number)
      let requestNumber = number;
      axios.get(this.URL + '/status/' + requestNumber).then((response) => {
        let status = response.data;
        console.log(status);
        //console.log(status[0].object);
        //this.statusRequest = JSON.parse(status[0].id_conecta);
        this.statusRequest = status;
        console.log(this.statusRequest);
        console.log(this.statusRequest[0].id_conecta);
        this.saveStatusRequest(this.statusRequest[0]);
      }).catch(function (error) {
        console.log("AXIOS ERROR: ", error);
      });
    },

    validationProcess() {
      console.log(this.rut);
      console.log(this.globalRequestNumber);
      this.requestNumberValidation();
      if (this.rut == "" || this.numeroSolicitud == "" 
        || this.rutIsValid == false || this.requestNumberIsValid == false) {
          //this.setRutIsValid(false);
          //this.requestNumberIsValid = false;
          this.showStatus = false;
          alert("Debe completar los campos.");
      } else if (this.numeroSolicitud !== this.globalRequestNumber){
          this.requestNumberIsValid = false;
          alert("El número de solicitud es inválido.");
      } else {
          if (this.statusRequest[0].id_conecta == null && this.statusRequest[0].status == 1) {
            this.$router.push({ path: "pasos/" + this.globalRequestNumber });
          } else if (this.statusRequest[0].id_conecta == null && this.statusRequest[0].status == 0){
            alert("Su solicitud ha expirado.");
          } else if (this.statusRequest[0].id_conecta !== null && this.statusRequest[0].status == 1) {
            this.processStage(this.statusRequest[0].id_conecta);
            this.getRutGlobal(this.rut);
            this.homeContent = false;
            this.showStatus = true;
          }
      }
    },

    processStage(idConecta) {
      console.log(idConecta)
      axios.get(this.URL + '/stage/' + idConecta).then((response) => {
        let stage = response.data;
        console.log(stage);
        //console.log(status[0].object);
        //this.statusRequest = JSON.parse(status[0].id_conecta);
        this.stageRequest = stage;
        console.log(this.stageRequest);
        console.log(this.stageRequest[0]);
        this.saveProcessStage(this.stageRequest[0]);
      }).catch(function (error) {
        console.log("AXIOS ERROR: ", error);
      });
    }
  },

  computed: {
    ...mapState(['rutIsValid', 'URL', 'globalRequestNumber', 'rutGlobal', 'statusRequestGlobal', 
      'processStageRequest']),
  },


   created: function () {
    
  },
}
</script>
