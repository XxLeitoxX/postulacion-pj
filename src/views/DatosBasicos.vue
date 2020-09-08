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
                <div class="input">
                  <label>RUT de la empresa</label>
                  <input type="text" name="rutst02" v-model="rut" @keyup="validation()" />
                  <div class="small-text">Sin puntos y con guión (11111111-1)</div>
                  <div id="rutst02-error" class="formerror" v-if="!rutIsValid">Ingrese un rut Válido</div>
                </div>
                <div class="input">
                  <label>Correo electrónico</label>
                  <input type="text" name="emailst02" v-model="email" @keyup="validation()" />
                  <div id="email2st02-error" class="formerror" v-if="!emailIsValid">Ingrese un email válido</div>
                </div>
                <div class="input">
                  <label>Confirme su correo electrónico</label>
                  <input type="text" name="email2st02" v-model="emailConfirm" @keyup="validation()" />
                  <div id="email2st02-error" class="formerror" v-if="!emailConfirmIsValid">Ingrese un email válido</div>
                </div>
                <div class="input">
                  <label>Teléfono</label>
                  <input type="text" name="phonest02" v-model="tel" @keyup="validation()" />
                  <div id="phonest02-error" class="formerror" v-if="!telIsValid">Ingrese un número válido</div>
                </div>
                <div class="input">
                  <div class="input-select">
                    <select name="camararegional01_st02" v-model="camaraSelect">
                      <option value="#">Cámara Regional a la que postula</option>
                      <option value="1">Santiago</option>
                      <option value="2">Rancagua</option>
                    </select>
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
                    <select name="camararegional_st02" v-model="tipSelect">
                      <option value="#">Tipo de postulación</option>
                      <option value="1">Persona Jurídca</option>
                      <option value="2">Persona Natural</option>
                      <option value="3">Empresario Individual</option>
                    </select>
                  </div>
                </div>
                <div class="input hidden">
                  <div class="input-select">
                    <select name="tiposociedad_st02">
                      <option value="#">Tipo de sociedad</option>
                    </select>
                  </div>
                </div>
                <button
                  class="btn-red small u-mt60"
                  id="submitStep02"
                  type="button"
                  @click="campos"
                >
                  ENVIAR
                  <i class="fa fa-angle-right"></i>
                </button>
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
// @ is an alias to /src
import Cabecera from "./../components/Cabecera.vue";
import { validaRut, telValidate, emailValidate } from "./../validation/validation";

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
      rutIsValid: true,
      telIsValid: true,
      emailIsValid: true,
      emailConfirmIsValid: true,
      arreglo: [],
    };
  },
  methods: {
    campos() {
      console.log("aqui van los campos");
      this.arreglo.push(
        this.rut,
        this.email,
        this.emailConfirm,
        this.tel,
        this.camaraSelect,
        this.tipSelect
      );
      console.log(this.arreglo);
    },

    validation() {

      if (this.rut !== '') {
        validaRut(this.rut) ? this.rutIsValid = true : this.rutIsValid = false; 
      }
      
      if (this.tel !== '') {
        telValidate(this.tel) ? this.telIsValid = true : this.telIsValid = false;
      }

      if (this.email !== '') {
        emailValidate(this.email) ? this.emailIsValid = true : this.emailIsValid = false;
      }

      if (this.emailConfirm !== '') {
         emailValidate(this.emailConfirm) ? this.emailConfirmIsValid = true : this.emailConfirmIsValid = false;
      }
      

    },
  },

  created: function () {},
};
</script>
