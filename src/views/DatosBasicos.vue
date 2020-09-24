<template>
  <div>
    <Cabecera />
    <div class="c-form-steps whitebg">
      <div class="container">
        <div class="c-form-steps__content step-data">
          <div class="row">
            <div class="col-md-6 col-lg-5 offset-lg-2">
              <h2>DATOS BÁSICOS DE LA SOLICITUD</h2>
              <form action="#" id="step02">
                <div class="input" ref="rutInput">
                  <label>RUT de la empresa</label>
                  <input
                    type="text"
                    name="rutst02"
                    ref="rutInputValue"
                    @focus="focus($refs.rutInput)"
                    @blur="blur([$refs.rutInput, $refs.rutInputValue.value])"
                    v-model="rut"
                  @keyup="checkInput()"
                  />
                  <div class="small-text">Sin puntos y con guión (11111111-1)</div>
                  <div id="rutst02-error" class="formerror" v-if="!rutIsValid">Ingrese un rut Válido</div>
                </div>
                <div class="input" ref="emailInput">
                  <label>Correo electrónico</label>
                  <input
                    type="text"
                    name="emailst02"
                    ref="emailInputValue"
                    @focus="focus($refs.emailInput)"
                    @blur="blur([$refs.emailInput, $refs.emailInputValue.value])"
                    v-model="email"
                    @keyup="checkInput()"
                  />
                  <div
                    id="email2st02-error"
                    class="formerror"
                    v-if="!emailIsValid"
                  >Ingrese un email válido</div>
                </div>
                <div class="input" ref="email_confirmation">
                  <label>Confirme su correo electrónico</label>
                  <input
                    type="text"
                    name="email2st02"
                    ref="emailConfirmValue"
                    @focus="focus($refs.email_confirmation)"
                    @blur="blur([$refs.email_confirmation, $refs.emailConfirmValue.value])"
                    v-model="emailConfirm"
                    @keyup="checkInput()"
                  />
                  <div
                    id="email2st02-error"
                    class="formerror"
                    v-if="!emailConfirmIsValid"
                  >Ingrese un email válido</div>
                  <div
                    id="email2st02-error"
                    class="formerror"
                    v-if="!emailEquals"
                  >El email debe ser igual</div>
                </div>
                <div class="input" ref="phone_number">
                  <label>Teléfono</label>
                  <input
                    type="text"
                    name="phonest02"
                    ref="phoneInputValue"
                    @focus="focus($refs.phone_number)"
                    @blur="blur([$refs.phone_number, $refs.phoneInputValue.value])"
                    v-model="tel"
                    @keyup="checkInput()"
                  />
                  <div
                    id="phonest02-error"
                    class="formerror"
                    v-if="!telIsValid"
                  >Ingrese un número válido</div>
                </div>
                <div class="input">
                  <div class="input-select">
                    <select
                      name="camararegional01_st02"
                      v-model="camaraSelect"
                      @change="onChangeCamara"
                    >
                      <option value>Cámara Regional a la que postula</option>
                      <option
                        v-for="(camara, key) in camaras"
                        :value="camara.camRegId"
                        :key="key"
                      >{{ camara.camRegGls }}</option>
                    </select>
                    <div
                      id="camararegional01_st02-error"
                      class="formerror"
                      v-if="!camaraIsValid"
                    >Ingrese una opcion válida</div>
                  </div>
                  <span
                    aria-label="Tenemos presencia en todo Chile a través de 18 cámaras regionales"
                    data-microtip-position="right"
                    role="tooltip"
                  >?</span>
                </div>
                <h2 class="u-mt90">TIPO DE POSTULACIÓN</h2>
                <P
                  class="u-mb40"
                >Indique la naturaleza de la institución o persona que postula para ser socio de la Cámara Chilena de la Construcción</P>
                <div class="input">
                  <div class="input-select">
                    <select
                      name="camararegional_st02"
                      v-model="tipSelect"
                      @change="onChangeTipoPostulacion"
                    >
                      <option value>Tipo de postulación</option>
                      <option value="1">Persona Jurídica</option>
                      <option value="2">Persona Natural</option>
                      <option value="3">Empresario Individual</option>
                    </select>
                    <div
                      id="camararegional01_st02-error"
                      class="formerror"
                      v-if="!tipoSolIsValid"
                    >Ingrese una opcion válida</div>
                  </div>
                </div>
                <div class="input" v-if="showTipSociety">
                  <div class="input-select">
                    <select name="tiposociedad_st02" @change="onChangeTipoSoc" v-model="tipSelectSoc">
                      <option value>Tipo de sociedad</option>
                      <option v-for="(tipo, key) in tipoSocs" :value="tipo.siglas" :key="key">{{ tipo.descripcion }}</option>
                    </select>
                    <div
                      id="camararegional01_st02-error"
                      class="formerror"
                      v-if="!tipoSocIsValid"
                    >Ingrese una opcion válida</div>
                  </div>
                </div>
                <button
                  class="btn-red small u-mt60"
                  id="submitStep02"
                  type="button"
                  @click="sendSolicitudPostulacion()"
                >
                  ENVIAR
                  <i class="fa fa-angle-right"></i>
                </button>

                <!--<button
                  type="button"
                  class="btn-red small u-mt60"
                  @click="generateNumSolicitud(1,5)"
                >numero solicitud</button> -->
              </form>
            </div>
            <div class="col-md-4 col-lg-3 offset-lg-1">
              <div class="c-form-steps__side">
                <h3>¿DUDAS SOBRE EL PROCESO?</h3>
                <ul>
                  <li>
                    <a
                      href="https://bitbanglab.cl/clientes/cchc/cchc_109_postulantes/html/php/"
                      target="_blank"
                    >
                      Cómo postular
                      <span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M15.6653 2.33206L7.66532 10.3321L6.04907 8.71582L14.0491 0.71582L15.6653 2.33206Z"
                            fill="#00B29A"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M9.14286 2.28571L13.7143 2.28571V6.85714H16V0H9.14286V2.28571ZM4.57143 2.28571V0H0V16H16V11.4286H13.7143V13.7143H2.28571V2.28571L4.57143 2.28571Z"
                            fill="#00B29A"
                          />
                        </svg>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://bitbanglab.cl/clientes/cchc/cchc_109_postulantes/html/php/contacto.php"
                      target="_blank"
                    >
                      Contacta el ejecutivo
                      <br />según tu región
                      <span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M15.6653 2.33206L7.66532 10.3321L6.04907 8.71582L14.0491 0.71582L15.6653 2.33206Z"
                            fill="#00B29A"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M9.14286 2.28571L13.7143 2.28571V6.85714H16V0H9.14286V2.28571ZM4.57143 2.28571V0H0V16H16V11.4286H13.7143V13.7143H2.28571V2.28571L4.57143 2.28571Z"
                            fill="#00B29A"
                          />
                        </svg>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cabecera from "./../components/Cabecera.vue";
import {
  validaRut,
  telValidate,
  emailValidate,
} from "./../validation/validation";
import { mapState, mapActions, mapMutations } from "vuex";
import VueRouter from "vue-router";
import axios from 'axios';
import VueAxios from 'vue-axios';


export default {
  name: "DatosBasicos",
  components: {
    Cabecera,
  },
  data() {
    return {
      rut: "",
      email: "",
      emailConfirm: "",
      tel: "",
      camaraSelect: "",
      tipSelect: "",
      tipSelectSoc: "",
      rutIsValid: true,
      telIsValid: true,
      emailIsValid: true,
      emailConfirmIsValid: true,
      emailEquals: true,
      camaraIsValid: true,
      tipoSocIsValid: true,
      tipoSolIsValid: true,
      formIsValid: false,
      focused: false,
      solicitudPostulacion: [{}],
      urlBase: this.$store.state.URL,
      urlBaseMail: this.$store.state.URLMail,
      urlMail: '',
      showTipSociety: false
    };
  },
  methods: {
    validation() {
      
      if (this.rut !== "") {
        validaRut(this.rut)
          ? (this.rutIsValid = true, this.formIsValid =true)
          : ((this.rutIsValid = false), (this.formIsValid = false));
      } else {
        this.rutIsValid = false;
        this.formIsValid = false;
      }

      if (this.tel !== "") {
        telValidate(this.tel)
          ? (this.telIsValid = true, this.formIsValid =true)
          : ((this.telIsValid = false), (this.formIsValid = false));
      } else {
        this.telIsValid = false;
        this.formIsValid = false;
      }

      if (this.email !== "") {
        emailValidate(this.email)
          ? (this.emailIsValid = true, this.formIsValid =true)
          : ((this.emailIsValid = false), (this.formIsValid = false));
      } else {
        this.emailIsValid = false;
        this.formIsValid = false;
      }

      if (this.emailConfirm !== "") {
        emailValidate(this.emailConfirm)
          ? (this.emailConfirmIsValid = true, this.formIsValid =true)
          : ((this.emailConfirmIsValid = false), (this.formIsValid = false));
      } else {
        this.emailConfirmIsValid = false;
        this.formIsValid = false;
      }

      if (this.camaraSelect == "") {
        this.camaraIsValid = false;
        this.formIsValid = false;
      } else if (this.rutIsValid && this.telIsValid && this.emailIsValid && this.emailConfirmIsValid) {
        this.camaraIsValid = true;
        this.formIsValid = true;
      }

      if (this.tipSelect == "") {
        this.tipoSolIsValid = false;
        this.formIsValid = false;
      } else if (this.rutIsValid && this.telIsValid && this.emailIsValid && this.emailConfirmIsValid) {
        this.tipoSolIsValid = true;
        this.formIsValid = true;
      }

      if (this.tipSelect == '1') {
        if (this.tipSelectSoc == "") {
        this.tipoSolIsValid = false;
        this.formIsValid = false;
      } else if (this.rutIsValid && this.telIsValid && this.emailIsValid && this.emailConfirmIsValid) {
        this.tipoSolIsValid = true;
        this.formIsValid = true;
      }
      }
      return this.formIsValid;
    },

    checkInput() {
      if (this.rut !== "") {
        validaRut(this.rut)
          ? (this.rutIsValid = true)
          : ((this.rutIsValid = false), (this.formIsValid = false));
      }
      
      if (this.email !== "") {
        emailValidate(this.email)
          ? (this.emailIsValid = true)
          : ((this.emailIsValid = false), (this.formIsValid = false));
      }

      if (this.emailConfirm !== "") {
        emailValidate(this.emailConfirm)
          ? (this.emailConfirmIsValid = true)
          : ((this.emailConfirmIsValid = false), (this.formIsValid = false));
      }

      if (this.tel !== "") {
        telValidate(this.tel)
          ? (this.telIsValid = true)
          : ((this.telIsValid = false), (this.formIsValid = false));
      }

    },


    onChangeTipoPostulacion() {
      if (this.tipSelect !== "") {
        this.tipoSolIsValid = true;
      } 

      if(this.tipSelect == '1') {
        this.showTipSociety = true;
      }else {
        this.showTipSociety = false;
      }
   
    },

    onChangeCamara() {
      if (this.camaraSelect !== "") {
        this.camaraIsValid = true;
      } 
    },

    onChangeTipoSoc() {
      if (this.tipSelectSoc !== "") {
        this.tipoSocIsValid = true;
      } 
    },
   
   
    sendSolicitudPostulacion() {
      this.validation();
      if (this.validation() !== false) {
        //this.generateNumSolicitud(1000, 9999);
        this.generateUrl();
        this.saveSolicitudPostulacion();
        this.postPostulacion();
        this.emailForSendSolicitud(this.emailConfirm);
        this.$router.push({ name: "SendSolicitud" });
      } else {
        alert("Coloque datos validos");
      }
      this.generateUrl();
    },

    saveSolicitudPostulacion() {
      this.solicitudPostulacion.push({
        rut: this.rut,
        email: this.emailConfirm,
        tel: this.tel,
        camara: this.camaraSelect,
        tipoPos: this.tipSelect,
        tipoSoc: this.tipSelectSoc,
        url: this.urlMail
      });
      console.log(this.solicitudPostulacion);
    },

    postPostulacion:  function() {

      let objSolicitud = this.solicitudPostulacion;
      let data = JSON.stringify(objSolicitud);
      console.log(data);
      axios.post(this.urlBase+'/solicitudDePostulacion', data).then((response) => {
      console.log(response.data);
      }).catch(function (error) {
      console.log("AXIOS ERROR: ", error);
      });
	  },
    
    generateUrl() {
      this.urlMail = `${this.urlBaseMail}/prueba/`; 
    },

    ...mapActions(['getCamaras', 'getTipoSociedad']),
    ...mapMutations(['focus', 'blur', 'emailForSendSolicitud'])
    //...mapMutations(['focus', 'blur', 'validation'])
  },

  computed: {
    //...mapState(["camaras", "rutIsValid", 'telIsValid', 'emailGlobal']),
    ...mapState(['camaras', 'tipoSocs']),
  },

  created: function () {
    this.getCamaras();
    this.getTipoSociedad();
    
  },
};
</script>


