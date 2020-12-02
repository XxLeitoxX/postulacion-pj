<template>
  <div>
    <!-- <Cabecera></Cabecera> -->
    <main role="main">
       <!-- <StepNumbers></StepNumbers> -->
       <div class="c-steps-numbers">
        <div class="container">
          <div class="c-steps-numbers__item success"><span>1</span>
            <p>Información y<br>antecedentes legales</p>
          </div>
          <div class="c-steps-numbers__item success"><span>2</span>
            <p>Antecedentes<br>financieros</p>
          </div>
          <div class="c-steps-numbers__item active"><span>3</span>
            <p>Patrocinios</p>
          </div>
          <div class="c-steps-numbers__item"><span>4</span>
            <p>Participación</p>
          </div>
          <div class="c-steps-numbers__item"><span>5</span>
            <p>Declaraciones<br>y compromisos</p>
          </div>
        </div>
      </div>
    <div class="c-form-steps">
        <div class="c-form-steps__sections" data-step="03">
          <div class="container">
            <div class="c-form-steps__content step-data">
              <div class="row">
                <div class="col-md-12 col-lg-5 offset-lg-2">
                  <h2>Patrocinante 1</h2>
                  <p>Los patrocinantes serán contactados por la CChC para dar su conformidad, por lo cual es necesario tener sus datos actualizados.</p>
                  <form action="#" id="step05_1">
                    <div class="input"  ref="rut">
                      <label>RUT del Patrocinante 1</label>
                      <input type="text" name="rutparticipante_st05" v-model="rutParticipante" ref="rutParticipante" @focus="focus($refs.rut)" @blur="blur([$refs.rut, $refs.rutParticipante.value]), validateRutExist(rutParticipante, $refs.nombre)" @keyup="rutPatrocinanteValidation($refs.rutParticipante.value)">
                      <div class="small-text">Sin puntos y con guión (11111111-1)</div><span data-modal="step03_1" data-type="modal" @click="show">?</span>
                      <div id="rutst02-error" class="formerror" v-if="rutPatrocinanteIsValid === false">Ingrese un rut Válido</div>
                    </div>
                    <div class="input" ref="nombre">
                      <label>Nombre del Patrocinante 1</label>
                      <input type="text" maxlength="100" name="nombreparticipante_st05" v-model="nombreParticipante" ref="nombreParticipante" @focus="focus($refs.nombre)" @blur="blur([$refs.nombre, $refs.nombreParticipante.value])">
                    </div>
                    <div class="input active" ref="telefono">
                      <label>Teléfono </label>
                      <input type="text" name="telefonoparticipante_st05" v-model="telefonoParticipante" ref="telefonoParticipante" @focus="focus($refs.telefono)" @blur="blur([$refs.telefono, $refs.telefonoParticipante.value])" @keyup="telPatrocinanteValidation($refs.telefonoParticipante.value)">
                      <div class="small-text">Use el formato +56 0 0000 0000</div>
                      <div id="rutst02-error" class="formerror" v-if="telPatrocinanteIsValid === false">Ingrese un teléfono Válido</div>
                    </div>
                    <div class="input u-mb0" ref="email">
                      <label>Email</label>
                      <input type="text" name="emailparticipante_st05" v-model="emailParticipante" ref="emailParticipante" @focus="focus($refs.email)" @blur="blur([$refs.email, $refs.emailParticipante.value])" @keyup="emailPatrocinanteValidation($refs.emailParticipante.value)">
                      <div id="rutst02-error" class="formerror" v-if="emailPatrocinanteIsValid === false">Ingrese un email Válido</div>
                    </div>
                  </form>
                </div>
                <div class="col-md-4 col-lg-3 offset-lg-1">
                  <div class="c-form-steps__side desktop">
                    <h3>¿DUDAS SOBRE EL PROCESO?</h3>
                    <ul>
                      <li><a href="https://bitbanglab.cl/clientes/cchc/cchc_109_postulantes/html/php/" target="_blank">Cómo postular<span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.6653 2.33206L7.66532 10.3321L6.04907 8.71582L14.0491 0.71582L15.6653 2.33206Z" fill="#00B29A"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9.14286 2.28571L13.7143 2.28571V6.85714H16V0H9.14286V2.28571ZM4.57143 2.28571V0H0V16H16V11.4286H13.7143V13.7143H2.28571V2.28571L4.57143 2.28571Z" fill="#00B29A"/></svg></span></a></li>
                      <li><a href="https://bitbanglab.cl/clientes/cchc/cchc_109_postulantes/html/php/contacto.php" target="_blank">Contacta el ejecutivo <br>según tu región<span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.6653 2.33206L7.66532 10.3321L6.04907 8.71582L14.0491 0.71582L15.6653 2.33206Z" fill="#00B29A"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9.14286 2.28571L13.7143 2.28571V6.85714H16V0H9.14286V2.28571ZM4.57143 2.28571V0H0V16H16V11.4286H13.7143V13.7143H2.28571V2.28571L4.57143 2.28571Z" fill="#00B29A"/></svg></span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="c-form-drag whitebg small" ref="collapse">
            <div class="container"><a class="section-minimizar" ref="collapseMin" @click="collapseClickStep3([$refs.collapse, $refs.collapseMin])">{{collapse}}<span></span></a>
                <div class="row">
                  <div class="col-md-12 col-lg-6 offset-lg-2">
                    <form action="#" id="step05_2">
                      <h2>Patrocinante 2</h2>
                      <div class="input" ref="rut2">
                        <label>RUT del Patrocinante 2</label>
                        <input type="text" name="rutparticipante02_st05" v-model="rutParticipante2" ref="rutParticipante2" @focus="focus($refs.rut2)" @blur="blur([$refs.rut2, $refs.rutParticipante2.value]), validateRutExist2(rutParticipante2, $refs.nombre2)" @keyup="rutPatrocinante2Validation($refs.rutParticipante2.value)">
                        <div class="small-text">Sin puntos y con guión (11111111-1)</div><span data-modal="step03_1" data-type="modal" @click="show">?</span>
                        <div id="rutst02-error" class="formerror" v-if="rutPatrocinante2IsValid === false">Ingrese un rut Válido</div>
                      </div>
                      <div class="input" ref="nombre2">
                        <label>Nombre del Patrocinante 2</label>
                        <input type="text" maxlength="100" name="nombreparticipante02_st05" v-model="nombreParticipante2" ref="nombreParticipante2" @focus="focus($refs.nombre2)" @blur="blur([$refs.nombre2, $refs.nombreParticipante2.value])">
                      </div>
                      <div class="input active" ref="telefono2">
                        <label>Teléfono </label>
                        <input type="text" name="telefonoparticipante02_st05" v-model="telefonoParticipante2" ref="telefonoParticipante2" @focus="focus($refs.telefono2)" @blur="blur([$refs.telefono2, $refs.telefonoParticipante2.value])" @keyup="telPatrocinante2Validation($refs.telefonoParticipante2.value)">
                        <div class="small-text">Use el formato +56 0 0000 0000</div>
                        <div id="rutst02-error" class="formerror" v-if="telPatrocinante2IsValid === false">Ingrese un teléfono Válido</div>
                      </div>
                      <div class="input" ref="email2">
                        <label>Email</label>
                        <input type="text" name="emailparticipante02_st05" v-model="emailParticipante2" ref="emailParticipante2" @focus="focus($refs.email2)" @blur="blur([$refs.email2, $refs.emailParticipante2.value])" @keyup="emailPatrocinante2Validation($refs.emailParticipante2.value)">
                        <div id="rutst02-error" class="formerror" v-if="emailPatrocinante2IsValid === false">Ingrese un email Válido</div>
                      </div>
                    </form>
                  </div>
                </div>
            </div>
          </div>
          <div class="c-form-steps whitebg">
            <div class="container">
              <div class="c-form-steps__content step-data u-pt0">
                <div class="row">
                  <div class="col-md-12 col-lg-12 offset-lg-2">
                    <form action="#" id="step04_3">
                      <button class="link prev btn-blue u-mt50 u-mr30 small" type="button" @click="anterior">
                        <i class="fa fa-angle-left"></i>Anterior</button>
                        <button class="link btn-red u-mt50 big u-mr20"  type="button" id="submitStep05" @click="save">Guardar<i class="fa fa-angle-right"></i></button>
                        <button class="link btn-red u-mt50 big" type="button" id="submitStep05" @click="saveContinue">Continuar<i class="fa fa-angle-right"></i></button></form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <modal name="help-modal-1" :height="400">
        
          <a class="close-modal-text" @click="$modal.hide('help-modal-1')">X</a>
          <h2>¿Quiénes son los patrocinadores?</h2>
          <ul>
            <li style="margin-top:15px;margin-bottom:10px;"><span style="color:white; margin-right:10px;">&diams;</span>Socios activos con sus cuotas sociales al día, quienes deben completar y firmar la hoja correspondiente en la Solicitud de inscripción.</li>
            <li style="margin-top:10px;margin-bottom:10px;"><span style="color:white; margin-right:10px;">&diams;</span>Para el caso de las empresas, quien firma debe ser el Representante ante la Cámara o Representante Legal, y deben tener sus cuotas al día.</li>
            <li style="margin-top:10px;margin-bottom:10px;"><span style="color:white; margin-right:10px;">&diams;</span>El patrocinante y el firmante NO pueden tener relación con el postulante.</li>
            <li style="margin-top:10px;margin-bottom:10px;"><span style="color:white; margin-right:10px;">&diams;</span>NO puede patrocinar.</li>
          </ul>
          <p style="font-size:16px;margin-top:15px;margin-bottom:10px;">Integrantes de Mesas Directivas Nacional y de Cámaras Regionales.</p>
          <p style="font-size:16px;margin-top:15px;margin-bottom:10px;">Directores Nacionales.</p>
          <p style="font-size:16px;margin-top:15px;margin-bottom:10px;">Consejeros Regionales.</p>
          <p style="font-size:16px;margin-top:15px;margin-bottom:10px;">Integrantes de las Comisiones de Socios a nivel nacional.		</p>
      </modal>
      </main>
  </div>
  
</template>

<script>
import Cabecera from './../../components/Cabecera';
import StepNumbers from './../../components/StepNumbers';
import { mapState, mapMutations } from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueRouter from "vue-router";

export default {
  name: 'StepThree',
  components: {
    Cabecera,
    StepNumbers
  },
  data () {
      return {
        rutParticipante: '',
        rutParticipante2: '',
        nombreParticipante: '',
        nombreParticipante2: '',
        emailParticipante: '',
        emailParticipante2: '',
        telefonoParticipante: '+56',
        telefonoParticipante2: '+56',
        dataPatrocinantes: [{}],
        dataValidaciones: [],
        urlBase: this.$store.state.URL,
        grupos: {},
        estado: '', 
        motivo: {},
        rutPatrocinatnes: [],
        noExiste: false
      }
    },
    methods:{
      ...mapMutations(['focus', 
                       'blur', 
                       'collapseClickStep3', 
                       'rutValidation', 
                       'phoneNumberValidation', 
                       'emailValidation', 
                       'saveCompletedForm', 
                       "setStepTwoValue", 
                       "setStepThreeValue" ,
                       "setStepFourValue", 
                       'rutPatrocinates',
                       'rutPatrocinanteValidation',
                       'rutPatrocinante2Validation',
                       'telPatrocinanteValidation',
                       'telPatrocinante2Validation',
                       'emailPatrocinanteValidation',
                       'emailPatrocinante2Validation'
                       ]),

      save() {

        if (this.rutPatrocinanteIsValid == true 
            && this.rutPatrocinante2IsValid == true 
            && this.telPatrocinanteIsValid == true
            && this.telPatrocinante2IsValid == true
            && this.emailPatrocinanteIsValid == true
            && this.emailPatrocinante2IsValid == true) {
          
          if (this.estado == 'AL DIA' && this.grupos.name !== 'DIRECTORIO NACIONAL'
              && this.grupos.name !== 'MESA DIRECTIVA NACIONAL'
              && this.grupos.name !== 'MESA DIRECTIVA REGIONAL'
              && this.grupos.name !== 'CONSEJO REGIONAL'
              && this.grupos.name !== 'COMISION DE SOCIOS'
              && this.grupos.name !== 'COMISION DE SOCIOS REGIONAL') {
            this.dataPatrocinantes.push({
            patrocinantes: {
              rutParticipante: this.rutParticipante,
              nombreParticipante: this.nombreParticipante,
              emailParticipante: this.emailParticipante,
              telefonoParticipante: this.telefonoParticipante,
              rutParticipante2: this.rutParticipante2,
              nombreParticipante2: this.nombreParticipante2,
              emailParticipante2: this.emailParticipante2,
              telefonoParticipante2: this.telefonoParticipante2,
            } 
          });
          this.noExiste =true;
        }
        else {
          alert("Patrocinante no cumple requisitos");
          this.noExiste = false;
          this.dataPatrocinantes.push({
            patrocinantes: {
              rutParticipante: this.rutParticipante,
              nombreParticipante: this.nombreParticipante,
              emailParticipante: this.emailParticipante,
              telefonoParticipante: this.telefonoParticipante,
              rutParticipante2: this.rutParticipante2,
              nombreParticipante2: this.nombreParticipante2,
              emailParticipante2: this.emailParticipante2,
              telefonoParticipante2: this.telefonoParticipante2,
              motivo: {
                estado: this.dataValidaciones.Estado,
                name: this.dataValidaciones.grupos.GRUPO,
                perId: this.dataValidaciones.grupos.PER_ID
              }
            } 
          });

        }           
      console.log(this.dataPatrocinantes[1]);
      this.saveCompletedForm([this.dataPatrocinantes[1], 3]);
      this.savePostStepThree();
      console.log(this.completedForm);
      } else {
        alert("Los datos tienen que ser válidos");
      }
      
      },

      validateRutExist(rut, ref) {
       
      if (this.rutPartnerGlobal !== '' && this.rutPartnersGlobal.length == 0) {
       
        if (this.rutPartnerGlobal !== rut ) {

              axios.get(this.urlBase+'/validatePatrocinantes/' + rut).then((response) => {
                this.dataValidaciones = response.data;
              
                if (Object.keys(this.dataValidaciones).length !== 0) {
                  if (this.rutParticipante !== this.rutParticipante2) {
                  
                  this.nombreParticipante = this.dataValidaciones.Representante.nombre;
                  this.estado = this.dataValidaciones.Estado;
                  this.focus(ref);
                  this.noExiste = true;
                  if (this.dataValidaciones.grupos !== '') {
                    this.grupos = {
                    name: this.dataValidaciones.grupos.GRUPO,
                    perId: this.dataValidaciones.grupos.PER_ID
                  }
                  }
                  
                } else {
                  alert("Los patrocinantes deben tener rut distinto");
                  
                }
                } else {
                  alert("El patrocinante no existe");
                  this.noExiste = false;
                }
      
              }).catch(function (error) {
              console.log("AXIOS ERROR: ", error);
              });

            } else {
              alert("No puede tener el mismo RUT de un Accionista");
              this.rutParticipante = "";
            }

      } else if (this.rutPartnerGlobal !== '' && this.rutPartnersGlobal.length !== 0) {

          //if (this.rutPartnerGlobal !== '' && this.rutPartnersGlobal.length !== 0) {
          
          for (let i=0; i < this.rutPartnersGlobal[0].length; i++) {
          //console.log(this.rutPartnersGlobal[0][i].rutPerson);
            if (this.rutPartnersGlobal[0][i].rutPerson !== rut ) {

              axios.get(this.urlBase+'/validatePatrocinantes/' + rut).then((response) => {
                this.dataValidaciones = response.data;
              
                if (Object.keys(this.dataValidaciones).length !== 0) {
                  if (this.rutParticipante !== this.rutParticipante2) {
                  
                  this.nombreParticipante = this.dataValidaciones.Representante.nombre;
                  this.estado = this.dataValidaciones.Estado;
                  this.focus(ref);
                  this.noExiste = true;
                  if (this.dataValidaciones.grupos !== '') {
                    this.grupos = {
                    name: this.dataValidaciones.grupos.GRUPO,
                    perId: this.dataValidaciones.grupos.PER_ID
                  }
                  }
                  
                } else {
                  alert("Los patrocinantes deben tener rut distinto");
                  
                }
                } else {
                  alert("El patrocinante no existe");
                  this.noExiste = false;
                }
      
              }).catch(function (error) {
              console.log("AXIOS ERROR: ", error);
              });

            } else {
              alert("No puede tener el mismo RUT de un Accionista");
              this.rutParticipante = "";
            }
        }

        

      } else {
          alert("Debe completar composición accionaria del paso anterior");
          this.rutParticipante = "";
        }
        
        
      
      },

      validateRutExist2(rut, ref) {
        
         if (this.rutPartnerGlobal !== '' && this.rutPartnersGlobal.length == 0) {

           if (this.rutPartnerGlobal !== rut ) { 

            axios.get(this.urlBase+'/validatePatrocinantes/' + rut).then((response) => {
        
              this.dataValidaciones = response.data;
              if (Object.keys(this.dataValidaciones).length !== 0
              ) {
                if (this.rutParticipante !== this.rutParticipante2) {
                this.nombreParticipante2 = this.dataValidaciones.Representante.nombre;
                this.focus(ref);
                this.estado = this.dataValidaciones.Estado;
                this.estado = this.dataValidaciones.Estado;
                this.noExiste = true;
                this.grupos = {
                  name: this.dataValidaciones.grupos.GRUPO,
                  perId: this.dataValidaciones.grupos.PER_ID
                }
              } else {
                alert("Los patrocinantes deben tener rut distinto");
              }
              } else {
                alert("El Patrocinante no existe");
                this.noExiste = false;
              }

            }).catch(function (error) {
            console.log("AXIOS ERROR: ", error);
            });

          } else {
            alert("No puede tener el mismo RUT de un Accionista");
            this.rutParticipante2 = "";
          }


         } else if (this.rutPartnersGlobal.length !== 0 || this.rutPartnerGlobal !== '') {
        
        for (let i=0; i < this.rutPartnersGlobal[0].length; i++) {

          if (this.rutPartnersGlobal[0][i].rutPerson !== rut ) { 

            axios.get(this.urlBase+'/validatePatrocinantes/' + rut).then((response) => {
        
              this.dataValidaciones = response.data;
              if (Object.keys(this.dataValidaciones).length !== 0
              ) {
                if (this.rutParticipante !== this.rutParticipante2) {
                this.nombreParticipante2 = this.dataValidaciones.Representante.nombre;
                this.focus(ref);
                this.estado = this.dataValidaciones.Estado;
                this.estado = this.dataValidaciones.Estado;
                this.noExiste = true;
                this.grupos = {
                  name: this.dataValidaciones.grupos.GRUPO,
                  perId: this.dataValidaciones.grupos.PER_ID
                }
              } else {
                alert("Los patrocinantes deben tener rut distinto");
              }
              } else {
                alert("El Patrocinante no existe");
                this.noExiste = false;
              }

            }).catch(function (error) {
            console.log("AXIOS ERROR: ", error);
            });

          } else {
            alert("No puede tener el mismo RUT de un Accionista");
            this.rutParticipante2 = "";
          }
        }

        } else {
          
          alert("Debe completar composición accionaria del paso anterior");
          this.rutParticipante2 = "";
        
        }
      
      },

      validateInput() {
        

        //console.log(this.rutPatrocinanteIsValid, this.rutPatrocinante2IsValid, this.telPatrocinanteIsValid, this.telPatrocinante2IsValid, this.emailIsValid);
        if (this.rutParticipante !== '' && this.nombreParticipante !== '' && this.emailParticipante !== '' 
            && this.telefonoParticipante !== '' && this.rutParticipante2 !== '' && this.nombreParticipante2 !== ''
            && this.emailParticipante2 !== '' && this.telefonoParticipante2 !== '') {
          if (this.rutPatrocinanteIsValid == true 
              && this.rutPatrocinante2IsValid == true 
              && this.telPatrocinanteIsValid == true 
              && this.telPatrocinante2IsValid == true 
              && this.emailPatrocinanteIsValid == true
              && this.emailPatrocinante2IsValid == true) {
            return true;
          }
        } else {
          return false;
        }
      },

      saveContinue() {
        console.log(this.validateInput());
        if (this.validateInput() && this.noExiste) {
          this.save();
          //this.$router.push({ name: "StepFour" });
          console.log({rut1: this.rutParticipante, rut2: this.rutParticipante2});
          this.rutPatrocinatnes.push({rut1: this.rutParticipante, rut2: this.rutParticipante2});
          this.rutPatrocinates(this.rutPatrocinatnes);  
          this.setStepFourValue(true);
          this.setStepThreeValue(false);
        } else {
          alert("Debe completar todos los campos");
          this.setStepFourValue(false);
        }
      },

    anterior() {
        //this.$router.push({ name: "StepTwo" });
        this.setStepTwoValue(true);
        this.setStepThreeValue(false);
    },
    
    savePostStepThree: function () {
          
      let objPatrocinante = this.completedForm;
      let data = JSON.stringify(objPatrocinante);
      console.log("Step three Object ready to be sent: " + data);
      console.log("objPatrocinante length: " + objPatrocinante.length);
      if (this.completedForm.length > 0) {
        axios.post(this.urlBase + '/guardarParcial', data).then((response) => {
        console.log(response.data);
        }).catch(function (error) {
        console.log("AXIOS ERROR: ", error);
        });
      } else {
          alert("¡Error al guardar, intente de nuevo!");
        }
    },

      show () {
            this.$modal.show('help-modal-1');
      },

      hide () {
            this.$modal.hide('help-modal-1');
      },

    },
    computed: {
      ...mapState(['collapse', 
                  'telIsValid', 
                  'emailIsValid',
                  'rutIsValid', 
                  'completedForm', 
                  'rutGlobal', 
                  'nroSolicitudGlobal',
                  'rutPartnersGlobal',
                  'rutPartnerGlobal',
                  'rutPatrocinanteIsValid',
                  'rutPatrocinante2IsValid',
                  'telPatrocinanteIsValid',
                  'telPatrocinante2IsValid',
                  'emailPatrocinanteIsValid',
                  'emailPatrocinante2IsValid'
                  ])
    },

    created() {

      console.log(this.completedForm);
      console.log(this.nroSolicitudGlobal);
    }
    
}
</script>


<style>
  .vm--modal {
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    background-color: white;
    border-radius: 3px;
    box-shadow: 0 20px 60px -2px rgba(27, 33, 58, 0.4);
    background: #185bc1;
    color: #fff;
    padding: 30px;
}

 .vm--modal .close-modal-text {
    cursor: pointer;
    position: absolute;
    font-size: 20px;
    top: 10px;
    right: 20px;
    color: #fff;
}
</style>

