  <template>
    <div>
      <Cabecera></Cabecera>
      <main role="main">
        <StepNumbers></StepNumbers>
        <div class="c-form-steps">
          <div class="c-form-steps__sections" data-step="01">
            <div class="container">
              <div class="c-form-steps__content step-data">
                <div class="row">
                  <div class="col-md-12 col-lg-6 offset-lg-2">
                    <h2>Información de la empresa</h2>
                    <p>Ingrese los datos de la empresa que se desea postular para ser socia de la Cámara Chilena de la Construcción</p>
                    <form action="#" id="step03_1">
                      <div class="input" ref="rut">
                        <label>RUT de la empresa</label>
                        <input type="text" name="rutempresa_st03" ref="rutCompany" @focus="focus($refs.rut)" @blur="blur([$refs.rut, $refs.rutCompany.value])" @keyup="rutValidation($refs.rutCompany.value)">
                        <div class="small-text">Sin puntos y con guión (11111111-1)</div>
                      </div>
                      <div class="input" ref="fantasy">
                        <label>Nombre de Fantasía de la Empresa <i>(Opcional)</i></label>
                        <input type="text" name="nombreempresa_st03" ref="fantasyName" @focus="focus($refs.fantasy)" @blur="blur([$refs.fantasy, $refs.fantasyName.value])">
                      </div>
                      <div class="input" ref="businessName">
                        <label>Razón Social</label>
                        <input type="text" name="razonsocial_st03" ref="businessNameClass" @focus="focus($refs.businessName)" @blur="blur([$refs.businessName, $refs.businessNameClass.value])">
                      </div>
                      <div class="input datepicker" ref="date">
                        <label>Fecha de Constitución</label>
                        <!-- <input type="text" data-toggle="datepicker" name="consitucion_st03" > -->

                        <!-- <datepicker :format="customFormatter" ref="datePick" @focus="focus($refs.date)" @blur="blur([$refs.date, $refs.datePick.value])" :value="state.date" :language="es"></datepicker> -->

                        <!-- <date-picker name="date" v-model="date" :config="options" class="datepickerVue"
                          ref="constDate"

                          @focus="focus($refs.date)" 
                          @blur="blur([$refs.date, $refs.constDate.value])">
                          </date-picker> -->
                      </div>
                      <div class="input" ref="giro">
                        <label>Giro</label>
                        <input type="text" name="giro_st03" ref="giroActive" @focus="focus($refs.giro)" @blur="blur([$refs.giro, $refs.giroActive.value])">
                      </div>
                      <div class="input">
                        <div class="input-select">
                          <select name="actividad_st03" v-model="activity">
                            <option value="default">Actividad</option>
                            <option v-for="(activity, key) in activities" :value="activity.ActividadId" :key="key">{{ activity.actividad }}</option>
                          </select>
                        </div>
                      </div>
                      <div class="input">
                        <div class="input-select">
                          <select name="categoria_st03">
                            <option value="default">Categoría</option>
                          </select>
                        </div>
                      </div>
                      <div class="input" ref="phone">
                        <label>Teléfono de la empresa <i>(Opcional)</i></label>
                        <input type="text" name="telefonoempresa_st03" ref="phoneCompany" @focus="focus($refs.phone)" @blur="blur([$refs.phone, $refs.phoneCompany.value])" @keyup="phoneNumberValidation($refs.phoneCompany.value)">
                        <div class="small-text">Use el formato +56 0 0000 0000</div>
                        <div id="phonest02-error" class="formerror" v-if="!telIsValid">Ingrese un número válido</div>
                      </div>
                      <div class="input" ref="email">
                        <label>Email de la empresa <i>(Opcional)</i></label>
                        <input type="text" name="emailempresa_st03" ref="emailCompany" @focus="focus($refs.email)" @blur="blur([$refs.email, $refs.emailCompany.value])" @keyup="emailValidation($refs.emailCompany.value)">
                        <div id="email2st02-error" class="formerror" v-if="!emailIsValid">Ingrese un email válido</div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div class="c-form-drag whitebg small" ref="collapse">
              <div class="container"><a class="section-minimizar" ref="collapseMin" @click="collapseClick([$refs.collapse, $refs.collapseMin])">{{collapse}}<span></span></a>
                <div class="row">
                  <div class="col-md-12 col-lg-6 offset-lg-2">
                    <h2>Antecedentes de la empresa</h2>
                    <p>A continuación ingrese los documentos que acreditan la información de tu empresa. Los documentos requeridos son los siguientes:</p>
                    <ul>
                      <li>Memoria o CV de la empresa</li>
                      <li>Dependientes de la selección de "Tipo de Sociedad" en fila 14</li>
                    </ul>
                    <form class="dropzone dropzone-custom custom-drop" action="/file-upload"></form>
                  </div>
                </div>
              </div>
            </div>
            <div class="c-form-steps small" ref="commercialAddress">
              <div class="container"><a class="section-minimizar" ref="commercialMin" @click="collapseClick([$refs.commercialAddress, $refs.commercialMin])">{{collapse}}<span></span></a>
                <div class="c-form-steps__content step-data">
                  <div class="row">
                    <div class="col-md-12 col-lg-6 offset-lg-2">
                      <form action="#" id="step03_2">
                        <h2>Dirección comercial</h2>
                        <div class="input">
                          <div class="input-select">
                            <select name="regioncomercial_st03">
                              <option value="default">Región</option>
                            </select>
                          </div>
                        </div>
                        <div class="input">
                          <div class="input-select">
                            <select name="provinciacomercial_st03">
                              <option value="default">Provincia</option>
                            </select>
                          </div>
                        </div>
                        <div class="input">
                          <div class="input-select">
                            <select name="comunacomercial_st03">
                              <option value="default">Comuna</option>
                            </select>
                          </div>
                        </div>
                        <div class="input">
                          <label>Calle</label>
                          <input type="text" name="callecomercial_st03">
                        </div>
                        <div class="input">
                          <label>Número</label>
                          <input type="text" name="numerocomercial_st03">
                        </div>
                        <div class="input">
                          <label>Oficina</label>
                          <input type="text" name="oficinacomercial_st03">
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="c-form-drag whitebg">
              <div class="container">
                <div class="c-form-steps__content">
                  <div class="row">
                    <div class="col-md-12 col-lg-6 offset-lg-2">
                      <form action="#" id="step03_3">
                        <h2>Redes digitales de la empresa</h2>
                        <div class="input">
                          <label>Sitio web</label>
                          <input type="text" name="sitioweb_st03">
                        </div>
                        <button class="btn-red u-mt50 big" id="submitStep03">Guardar y continuar<i class="fa fa-angle-right"></i></button>
                      </form>
                    </div>
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
import Cabecera from '@/components/Cabecera.vue'
import StepNumbers from '../../components/StepNumbers.vue'
import { mapState, mapMutations, mapActions } from 'vuex'
//import Datepicker from 'vuejs-datepicker';
//import moment from 'moment'
//import {es} from 'vuejs-datepicker/dist/locale'
import datePicker from 'vue-bootstrap-datetimepicker';
import 'bootstrap/dist/css/bootstrap.css';
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';
  export default {
    name: 'StepOne',
    components:{
      Cabecera,
      StepNumbers,
      datePicker
    },
    data () {
      return {
        activity: '',
        activities: [],
        date: null,
        options: {
          format: 'DD/MM/YYYY',
          useCurrent: false,
          showClear: true,
          showClose: true,
          toolbarPlacement: 'bottom',
          
        }
      }
    },

    methods: {
      ...mapMutations(['focus', 'blur', 'rutValidation', 'phoneNumberValidation', 'emailValidation', 'collapseClick']),
      ...mapActions(['getCamarasTest']),
    },

    computed: {
      ...mapState(['collapse', 'telIsValid', 'emailIsValid'])
    },

    created (){
      //this.getCamarasTest();
    }
  

  }

</script>

<style>
  
</style>