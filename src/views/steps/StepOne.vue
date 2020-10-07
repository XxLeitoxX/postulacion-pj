  <template>
    <div>
      <Cabecera></Cabecera>
      <main role="main">
        <StepNumbers></StepNumbers>
        <div class="c-form-steps background">
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
                        <input type="text" name="rutempresa_st03" v-model="rutCompany" ref="rutCompany" @focus="focus($refs.rut)" @blur="blur([$refs.rut, $refs.rutCompany.value])" @keyup="rutValidation($refs.rutCompany.value)">
                        <div class="small-text">Sin puntos y con guión (11111111-1)</div>
                        <div id="loginrut-error" class="errorlogin" v-if="!rutIsValid">Ingrese un rut Válido</div>
                      </div>
                      <div class="input" ref="fantasy">
                        <label>Nombre de Fantasía de la Empresa <i>(Opcional)</i></label>
                        <input type="text" name="nombreempresa_st03" v-model="fantasyName" ref="fantasyName" @focus="focus($refs.fantasy)" @blur="blur([$refs.fantasy, $refs.fantasyName.value])">
                        <div id="nombreempresa_st03-error" class="errorlogin" v-if="!fantasyIsValid">
                          Ingrese un nombre
                        </div>
                      </div>
                      <div class="input" ref="businessName">
                        <label>Razón Social</label>
                        <input type="text" name="razonsocial_st03" v-model="businessName" ref="businessNameClass" @focus="focus($refs.businessName)" @blur="blur([$refs.businessName, $refs.businessNameClass.value])">
                        <div id="razonsocial_st03-error" class="errorlogin" v-if="!businessIsValid">
                          Ingrese un nombre
                        </div>
                      </div>
                      <div class="input datepicker" ref="date">
                        <label>Fecha de Constitución</label>
                        <!-- <input type="text" data-toggle="datepicker" name="consitucion_st03" > -->

                        <!-- <datepicker :format="customFormatter" ref="datePick" @focus="focus($refs.date)" @blur="blur([$refs.date, $refs.datePick.value])" :value="state.date" :language="es"></datepicker> -->

                        <date-picker name="date" v-model="date" :config="options" class="datepickerVue"
                          ref="constDate"

                          @focus="focus($refs.date)" 
                          @blur="blur([$refs.date, $refs.constDate.value])">
                          </date-picker>
                      </div>
                      <div class="input" ref="giro">
                        <label>Giro</label>
                        <input type="text" name="giro_st03" v-model="giro" ref="giroInput" @focus="focus($refs.giro)" @blur="blur([$refs.giro, $refs.giroInput.value])">
                      </div>
                      <div class="input">
                        <div class="input-select">
                          <select name="actividad_st03" 
                            @input="$event = setActivity($event.target.value)" :value="selectedActivity">
                            <option value="" selected disabled hidden>Seleccione una Actividad</option>
                            <option v-for="(activity, key) in activities" :value="activity.ActividadId" :key="key">{{ activity.actividad }}</option>
                          </select>
                        </div>
                      </div>
                      <div class="input">
                        <div class="input-select">
                          <select name="categoria_st03" 
                            @input="$event = setCategory($event.target.value)" :value="selectedCategory">
                            <option value="" selected disabled hidden>Seleccione una Categoría</option>
                            <option v-for="(category, key) in categories" :value="category.categoriaId" :key="key">{{ category.categoria }}</option>
                          </select>
                        </div>
                      </div>
                      <div class="input" ref="phone">
                        <label>Teléfono de la empresa <i>(Opcional)</i></label>
                        <input type="text" name="telefonoempresa_st03" v-model="phoneCompany" ref="phoneCompany" @focus="focus($refs.phone)" @blur="blur([$refs.phone, $refs.phoneCompany.value])" @keyup="phoneNumberValidation($refs.phoneCompany.value)">
                        <div class="small-text">Use el formato +56 0 0000 0000</div>
                        <div id="phonest02-error" class="formerror" v-if="!telIsValid">Ingrese un número válido</div>
                      </div>
                      <div class="input" ref="email">
                        <label>Email de la empresa <i>(Opcional)</i></label>
                        <input type="text" name="emailempresa_st03" v-model="companyEmail" ref="emailCompany" @focus="focus($refs.email)" @blur="blur([$refs.email, $refs.emailCompany.value])" @keyup="emailValidation($refs.emailCompany.value)">
                        <div id="email2st02-error" class="formerror" v-if="!emailIsValid">Ingrese un email válido</div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div class="c-form-drag whitebg small font" ref="collapse">
              <div class="container"><a class="section-minimizar" ref="collapseMin" @click="collapseClick([$refs.collapse, $refs.collapseMin])">{{collapse}}<span></span></a>
                <div class="row">
                  <div class="col-md-12 col-lg-6 offset-lg-2">
                    <h2>Antecedentes de la empresa</h2>
                    <p>A continuación ingrese los documentos que acreditan la información de tu empresa. Los documentos requeridos son los siguientes:</p>
                    <ul>
                      <li>Memoria o CV de la empresa</li>
                      <li>Dependientes de la selección de "Tipo de Sociedad" en fila 14</li>
                    </ul>
                    <!-- <form class="dropzone dropzone-custom custom-drop" action="/file-upload"></form> -->
                    <vue-dropzone
                      ref="myVueDropzone"
                      :useCustomSlot="true"
                      id="dropzone"
                      @vdropzone-upload-progress="uploadProgress"
                      :options="dropzoneOptions"
                      @vdropzone-file-added="fileAdded"
                      @vdropzone-sending-multiple="sendingFiles"
                      @vdropzone-success-multiple="success"
                      ></vue-dropzone>
                      <AttachmentList
                        :tempAttachments="getTempAttachments"
                        :attachments="getAttachments"
                      />
                  </div>
                </div>
              </div>
            </div>
            <div class="c-form-steps small font" ref="commercialAddress">
              <div class="container"><a class="section-minimizar" ref="commercialMin" @click="collapseClick([$refs.commercialAddress, $refs.commercialMin])">{{collapse}}<span></span></a>
                <div class="c-form-steps__content step-data">
                  <div class="row">
                    <div class="col-md-12 col-lg-6 offset-lg-2">
                      <form action="#" id="step03_2">
                        <h2>Dirección comercial</h2>
                        <div class="input">
                          <div class="input-select">
                            <select name="regioncomercial_st03" 
                              @input="$event = setRegion($event.target.value)" :value="selectedRegion" 
                              @change="getProvince()">
                              <option value="" selected disabled hidden>Selecciona una Región</option>
                              <option 
                                v-for="(region, key) in regions" :value="region.regionId" :key="key">
                                {{ region.region }}
                              </option>
                            </select>
                          </div>
                        </div>
                        <div class="input">
                          <div class="input-select">
                            <select name="provinciacomercial_st03"
                              @input="$event = setProvince($event.target.value)" :value="selectedProvince"
                              @change="getCommune()">
                              <option value="" selected disabled hidden>Selecciona una Provincia</option>
                              <option 
                                v-for="(province, key) in provinces" 
                                :value="province.provinciaId" 
                                :key="key">
                                {{ province.provincia }}
                              </option>
                            </select>
                          </div>
                        </div>
                        <div class="input">
                          <div class="input-select">
                            <select name="comunacomercial_st03" :value="selectedCommune">
                              <option value="" selected disabled hidden>Selecciona una Comuna</option>
                              <option 
                                v-for="(commune, key) in communes" 
                                :value="commune.comunaId" 
                                :key="key">
                                {{ commune.comuna }}
                              </option>
                            </select>
                          </div>
                        </div>
                        <div class="input" ref="street">
                          <label>Calle</label>
                          <input type="text" name="callecomercial_st03" v-model="street" 
                            ref="streetInput" @focus="focus($refs.street)" 
                            @blur="blur([$refs.street, $refs.streetInput.value])">
                        </div>
                        <div class="input" ref="number">
                          <label>Número</label>
                          <input type="text" name="numerocomercial_st03" v-model="streetNumber" 
                            ref="numberInput" @focus="focus($refs.number)" 
                            @blur="blur([$refs.number, $refs.numberInput.value])">
                        </div>
                        <div class="input" ref="office">
                          <label>Oficina</label>
                          <input type="text" name="oficinacomercial_st03" v-model="office" 
                            ref="officeInput" @focus="focus($refs.office)" 
                            @blur="blur([$refs.office, $refs.officeInput.value])">
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
                        <div class="input" ref="website">
                          <label>Sitio web</label>
                          <input type="text" name="sitioweb_st03" v-model="website" 
                            ref="websiteInput" @focus="focus($refs.website)" 
                            @blur="blur([$refs.website, $refs.websiteInput.value])">
                        </div>
                        <button class="btn-red u-mt50 big" id="submitStep03" type="button" @click="checkForm()">
                          Guardar y continuar<i class="fa fa-angle-right"></i>
                        </button>
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
//Components import
import Cabecera from '@/components/Cabecera.vue'
import StepNumbers from '../../components/StepNumbers.vue'

//Store import
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
//import Datepicker from 'vuejs-datepicker';
//import moment from 'moment'
//import {es} from 'vuejs-datepicker/dist/locale'

//Vue Datepicker
import datePicker from 'vue-bootstrap-datetimepicker';
import 'bootstrap/dist/css/bootstrap.css';
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';

//Vue Dropzone
import vue2Dropzone from 'vue2-dropzone';
import 'vue2-dropzone/dist/vue2Dropzone.min.css';

import mixin from '@/mixins/mixin.js'

  export default {
    name: 'StepOne',
    mixins: [mixin],
    components:{
      Cabecera,
      StepNumbers,
      datePicker,
      vueDropzone: vue2Dropzone,
      //AttachmentList: AttachmentList
    },
    data () {
      return {
        //Step One Variables
        rutCompany: '',
        fantasyName: '',
        businessName: '',
        date: '',
        giro: '',
        phoneCompany: '',
        companyEmail: '',
        street: '',
        streetNumber: '',
        office: '',
        website: '',

        //Validation variables
        formIsValid: false,
        fantasyIsValid: true,
        businessIsValid: true,

        //DatePicker data
        date: null,
        options: {
          format: 'DD/MM/YYYY',
          useCurrent: false,
          showClear: true,
          showClose: true,
          toolbarPlacement: 'bottom',
        },

        //Vue Dropzone data
        vueDropzoneFile: [],
        tempAttachments: [],
        attachments: [],
        dropzoneOptions: {
          // The Url Where Dropped or Selected files will be sent
          url: `https://httpbin.org/post`,
          // File Size allowed in MB
          maxFilesize: 102400000,
          // Authentication Headers like Access_Token of your application
          headers: {
            Authorization: `Access Token`
          },
          // The way you want to receive the files in the server
          paramName: function(n) {
            return "file[]";
          },
          dictDefaultMessage: "Upload Files Here xD",
          includeStyling: false,
          previewsContainer: false,
          thumbnailWidth: 250,
          thumbnailHeight: 140,
          uploadMultiple: true,
          parallelUploads: 20
        },
      }
    },

    methods: {
      ...mapGetters([ 'getterRegion', 'getterProvince', 'getterCommune', 'getterActivity', 'getterCategory',
      'getterFile', 'getterVueDropzoneFile' ]),
      ...mapMutations(['focus', 'blur', 'rutValidation', 'phoneNumberValidation', 'emailValidation', 'collapseClick', 'setRegion', 'setProvince', 'setCommune', 'setActivity', 'setCategory',
        'setVueDropzoneFile']),
      ...mapActions(['getRegion', 'getProvince', 'getCommune', 'getActivity', 'getCategory', 
        'companyBackgroundUpload']),

      checkForm() {
        if (this.rut == '') {
          this.rutIsValid = false;
          this.formIsValid = false;
        } else {
          this.rutIsValid = true;
          this.formIsValid = true;
        }

        if (this.businessName == '') {
          this.businessIsValid = false;
          this.formIsValid = false;
        } else {
          this.businessIsValid = true;
          this.formIsValid = true;
        }
      }
    },

    computed: {
      ...mapState(['selectedRegion', 'selectedProvince', 'selectedCommune', 'selectedActivity', 
        'selectedCategory', 'collapse', 'rutIsValid', 'telIsValid', 'emailIsValid', 
        'activities', 'categories', 'regions', 'provinces', 'communes']),
     
      /*test: {
        get() {
          return this.getName();
        },
        set(newName) {
          return this.SET_NAME(newName);
        }
      }*/
    },

    created (){
      this.getRegion();
      this.getActivity();
      this.getCategory();
    }
  

  }

</script>

<style>
  .background {
    background: #f0f0f0;
  }
  .font {
    font-size: 100%;
  }
</style>