  <template>
  <div>
    <Cabecera></Cabecera>
    <main role="main">
      <StepNumbers></StepNumbers>
      <!-- {{ $route.params.id }} -->
      <div class="c-form-steps background">
        <div class="c-form-steps__sections" data-step="01">
          <div class="container">
            <div class="c-form-steps__content step-data">
              <div class="row">
                <div class="col-md-12 col-lg-6 offset-lg-2">
                  <h2>Información de la empresa</h2>
                  <p>
                    Ingrese los datos de la empresa que se desea postular para
                    ser socia de la Cámara Chilena de la Construcción
                  </p>
                  <form action="#" id="step03_1">
                    <div class="input active" ref="rut">
                      <label>RUT de la empresa</label> <!-- {{this.getStepOne[2].rut}} -->
                      <input
                        type="text"
                        disabled
                        name="rutempresa_st03"
                        v-model="rutCompany"
                        ref="rutCompany"
                        @focus="focus($refs.rut)"
                        @blur="blur([$refs.rut, $refs.rutCompany.value]), 
                          getNroSolicitud($refs.rutCompany.value), 
                          companyRutValidation($refs.rutCompany.value)"
                        @keyup="rutValidation($refs.rutCompany.value)"
                      />
                      <div class="small-text">
                        Sin puntos y con guión (11111111-1)
                      </div>
                      <div
                        id="loginrut-error"
                        class="errorlogin"
                        v-if="rutIsValid === false"
                      >
                        Ingrese un rut Válido
                      </div>
                    </div>
                    <div class="input" ref="fantasy">
                      <label
                        >Nombre de Fantasía de la Empresa
                        <i>(Opcional)</i></label
                      >
                      <input
                        type="text"
                        name="nombreempresa_st03"
                        v-model="fantasyName"
                        ref="fantasyName"
                        @focus="focus($refs.fantasy)"
                        @blur="blur([$refs.fantasy, $refs.fantasyName.value])"
                        @keyup="fantasyValidation()"
                      />
                      <!-- <div
                        id="nombreempresa_st03-error"
                        class="errorlogin"
                        v-if="fantasyIsValid === false"
                      >
                        Ingrese un nombre
                      </div> -->
                    </div>
                    <div class="input" ref="businessName">
                      <label>Razón Social</label>
                      <input
                        type="text"
                        name="razonsocial_st03"
                        v-model="businessName"
                        ref="businessNameClass"
                        @focus="focus($refs.businessName)"
                        @blur="
                          blur([
                            $refs.businessName, $refs.businessNameClass.value,]), 
                            getGlobalBusinessName($refs.businessNameClass.value)"
                        @keyup="businessNameValidation()"
                      />
                      <div
                        id="razonsocial_st03-error"
                        class="errorlogin"
                        v-if="businessIsValid === false"
                      >
                        Ingrese un nombre
                      </div>
                    </div>
                    <div class="input " ref="date">
                      <label>Fecha de Constitución</label> 
                      <!-- <input type="text" data-toggle="datepicker" name="consitucion_st03" > -->

                      <!-- <datepicker ref="datePick" 
                        @focus="focus($refs.date)" placeholder="Fecha Constitución"
                        @blur="blur([$refs.date, $refs.datePick.value])" >
                      </datepicker> -->

                      <!-- <date-picker
                        name="date"
                        v-model="date"
                        :config="options"
                        class="datepickerVue"
                        ref="constDate"
                        @focus="focus($refs.date)"
                        @blur="blur([$refs.date, $refs.constDate.value])"
                      >
                      </date-picker> -->

                      <date-picker v-model="date" ref="inputDatePicker"
                        :lang="lang"
                        @focus="dateFocus($refs.date)"
                        @change="dateValidation($refs.date)"
                        :disabled-date="(date) => date >= new Date()"
                        valueType="format" :format="'DD-MM-YYYY'">
                         <i slot="icon-clear" class="mx-icon-clear">
                          <font-awesome-icon :icon="['far', 'calendar']" />
                        </i> 
                        <i slot="icon-calendar" class="mx-icon-calendar"
                          @click="dateValidation($refs.date)">
                          <font-awesome-icon :icon="['far', 'calendar']" />
                        </i>  

                      </date-picker>
                      <!-- {{lang.formatLocale.months}} -->
                      <div
                        id="giro_st03-error"
                        class="errorlogin"
                        v-if="dateIsValid === false"
                      >
                        Ingrese una fecha
                      </div>
                    </div>
                    <div class="input" ref="giro">
                      <label>Giro</label>
                      <input
                        maxlength="100"
                        type="text"
                        name="giro_st03"
                        v-model="giro"
                        ref="giroInput"
                        @focus="focus($refs.giro)"
                        @blur="blur([$refs.giro, $refs.giroInput.value])"
                        @keyup="giroValidation(), maxlengthGiroValidation($refs.giroInput.value.length)"
                      />
                      <div
                        id="giro_st03-error"
                        class="errorlogin"
                        v-if="giroIsValid === false"
                      >
                        Ingrese giro
                      </div>
                    </div>
                    <div class="input">
                      <div class="input-select">
                        <select
                          name="actividad_st03"
                          @input="$event = setActivity($event.target.value)"
                          :value="selectedActivity"
                          @change="activityValidation()"
                        >
                          <option value="" selected disabled hidden>
                            Seleccione una Actividad
                          </option>
                          <option
                            v-for="(activity, key) in activities"
                            :value="activity.ActividadId"
                            :key="key"
                          >
                            {{ activity.actividad }}
                          </option>
                        </select>
                        <div
                          id="giro_st03-error"
                          class="errorlogin"
                          v-if="activityIsValid === false"
                        >
                          Ingrese una Actividad
                        </div>
                      </div>
                    </div>
                    <div class="input">
                      <div class="input-select">
                        <select
                          name="categoria_st03"
                          @input="$event = setCategory($event.target.value)"
                          :value="selectedCategory"
                          @change="categoryValidation()"
                        >
                          <option value="" selected disabled hidden>
                            Seleccione una Categoría
                          </option>
                          <option
                            v-for="(category, key) in categories"
                            :value="category.categoriaId"
                            :key="key"
                          >
                            {{ category.categoria }}
                          </option>
                        </select>
                      </div>
                      <div
                        id="giro_st03-error"
                        class="errorlogin"
                        v-if="categoryIsValid === false"
                      >
                        Ingrese una Categoría
                      </div>
                    </div>
                    <div class="input active" ref="phone">
                      <label>Teléfono de la empresa <i>(Opcional)</i></label>
                      <input
                        type="text"
                        name="telefonoempresa_st03"
                        v-model="phoneCompany"
                        ref="phoneCompany"
                        @focus="focus($refs.phone)"
                        @blur="blur([$refs.phone, $refs.phoneCompany.value])"
                        @keyup="phoneNumberValidation($refs.phoneCompany.value)"
                      />
                      <div class="small-text">
                        Use el formato +56 0 0000 0000
                      </div>
                      <div
                        id="phonest02-error"
                        class="formerror"
                        v-if="telIsValid === false && this.phoneCompany !== ''"
                      >
                        Ingrese un número válido
                      </div>
                    </div>
                    <div class="input" ref="email">
                      <label>Email de la empresa <i>(Opcional)</i></label>
                      <input
                        type="text"
                        name="emailempresa_st03"
                        v-model="companyEmail"
                        ref="emailCompany"
                        @focus="focus($refs.email)"
                        @blur="blur([$refs.email, $refs.emailCompany.value])"
                        @keyup="emailValidation($refs.emailCompany.value)"
                      />
                      <div
                        id="email2st02-error"
                        class="formerror"
                        v-if="emailIsValid === false && this.companyEmail !== ''">
                        Ingrese un email válido
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="c-form-drag whitebg small font" ref="collapse">
            <div class="container">
              <a
                class="section-minimizar pointer"
                ref="collapseMin"
                @click="collapseClick([$refs.collapse, $refs.collapseMin])"
                >{{ collapse }}<span></span
              ></a>
              <div class="row">
                <div class="col-md-12 col-lg-6 offset-lg-2">
                  <div
                      id="loginrut-error"
                      class="errorFile"
                      v-if="dropzoneIsValid === false">
                        Ingrese un archivo
                  </div>
                  <h2>Antecedentes de la empresa</h2>

                  <p>
                    A continuación ingrese los documentos que acreditan la
                    información de tu empresa. Los documentos requeridos son los
                    siguientes:
                  </p>
                  <ul>
                    <!-- <li>Memoria o CV de la empresa</li>
                    <li>
                      Dependientes de la selección de "Tipo de Sociedad" en fila
                      14
                    </li> -->
                    <li v-for="(docs, index) in tipoSocDocs[0]" :key="index">

                      {{docs}}
                      
                    </li>
                  </ul>
                  <!-- <form class="dropzone dropzone-custom custom-drop" action="/file-upload"></form> -->
                  <div class="input">
                    <vue-dropzone
                      ref="myVueDropzone"
                      :useCustomSlot="true"
                      id="dropzone"
                      @vdropzone-upload-progress="uploadProgress"
                      :options="dropzoneOptions"
                      @vdropzone-file-added="fileAdded"
                      @vdropzone-sending-multiple="sendingFiles"
                      @vdropzone-success-multiple="success"
                      @vdropzone-removed-file="removeFile"
                      class="border">
                      <div class="dropzone-custom-content svg">
                        
                        <div class="subtitle">

                        </div>
                      </div>
                    </vue-dropzone>
                    <!-- <AttachmentList
                      :tempAttachments="getTempAttachments"
                      :attachments="getAttachments"
                    /> -->
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          <div class="c-form-steps small font" ref="commercialAddress">
            <div class="container">
              <a
                class="section-minimizar pointer"
                ref="commercialMin"
                @click="
                  collapseClick([$refs.commercialAddress, $refs.commercialMin])
                "
                >{{ collapse }}<span></span
              ></a>
              <div class="c-form-steps__content step-data">
                <div class="row">
                  <div class="col-md-12 col-lg-6 offset-lg-2">
                    <form action="#" id="step03_2">
                      <h2>Dirección comercial</h2>
                      <div class="input">
                        <div class="input-select">
                          <select
                            name="regioncomercial_st03"
                            @input="$event = setRegion($event.target.value)"
                            :value="selectedRegion"
                            @change="[getProvince(), regionValidation()]"
                          >
                            <option value="" selected disabled hidden>
                              Selecciona una Región
                            </option>
                            <option
                              v-for="(region, key) in regions"
                              :value="region.regionId"
                              :key="key"
                            >
                              {{ region.region }}
                            </option>
                          </select>
                          <div
                            id="email2st02-error"
                            class="formerror"
                            v-if="regionIsValid === false"
                          >
                            Ingrese una Región
                          </div>
                        </div>
                      </div>
                      <div class="input">
                        <div class="input-select">
                          <select
                            name="provinciacomercial_st03"
                            @input="$event = setProvince($event.target.value)"
                            :value="selectedProvince"
                            @change="[getCommune(), provinceValidation()]"
                          >
                            <option value="" selected disabled hidden>
                              Selecciona una Provincia
                            </option>
                            <option
                              v-for="(province, key) in provinces"
                              :value="province.provinciaId"
                              :key="key"
                            >
                              {{ province.provincia }}
                            </option>
                          </select>
                          <div
                            id="email2st02-error"
                            class="formerror"
                            v-if="provinceIsValid === false"
                          >
                            Ingrese una Provincia
                          </div>
                        </div>
                      </div>
                      <div class="input">
                        <div class="input-select">
                          <select
                            name="comunacomercial_st03"
                            @input="$event = setCommune($event.target.value)"
                            :value="selectedCommune"
                            @change="communeValidation()"
                          >
                            <option value="" selected disabled hidden>
                              Selecciona una Comuna
                            </option>
                            <option
                              v-for="(commune, key) in communes"
                              :value="commune.comunaId"
                              :key="key"
                            >
                              {{ commune.comuna }}
                            </option>
                          </select>
                          <div
                            id="email2st02-error"
                            class="formerror"
                            v-if="communeIsValid === false">
                            Ingrese una Comuna
                          </div>
                        </div>
                      </div>
                      <div class="input" ref="street">
                        <label>Calle</label>
                        <input
                          type="text"
                          maxlength="100"
                          name="callecomercial_st03"
                          v-model="street"
                          ref="streetInput"
                          @focus="focus($refs.street)"
                          @blur="blur([$refs.street, $refs.streetInput.value])"
                          @keyup="streetValidation(), maxlengthStreetValidation($refs.streetInput.value.length)"
                        />
                        <div
                          id="email2st02-error"
                          class="formerror"
                          v-if="streetIsValid === false">
                            Ingrese una Calle Comercial
                        </div>
                      </div>
                      <div class="input" ref="number">
                        <label>Número</label>
                        <input
                          type="text"
                          maxlength="45"
                          name="numerocomercial_st03"
                          v-model="streetNumber"
                          ref="numberInput"
                          @input="acceptNumber"
                          @focus="focus($refs.number)"
                          @blur="blur([$refs.number, $refs.numberInput.value])"
                          @keyup="streetNumberValidation()"
                        />
                        <div
                          id="email2st02-error"
                          class="formerror"
                          v-if="streetNumberIsValid === false"
                        >
                          Ingrese un Número
                        </div>
                      </div>
                      <div class="input" ref="office">
                        <label>Oficina</label>
                        <input
                          type="text"
                          maxlength="10"
                          name="oficinacomercial_st03"
                          v-model="office"
                          ref="officeInput"
                          @focus="focus($refs.office)"
                          @blur="blur([$refs.office, $refs.officeInput.value])"
                          @keyup="officeValidation(), maxlengthOfficeValidation($refs.officeInput.value.length)"
                        />
                        <div
                          id="email2st02-error"
                          class="formerror"
                          v-if="officeIsValid === false"
                        >
                          Ingrese una Oficina
                        </div>
                      </div>

                      <div class="input" ref="reference">
                        <label>Puntos de Referencia <i>(Opcional)</i></label>
                        <input
                          type="text"
                          maxlength="100"
                          name="oficinacomercial_st03"
                          v-model="reference"
                          ref="referenceInput"
                          @focus="focus($refs.reference)"
                          @blur="blur([$refs.reference, $refs.referenceInput.value])"
                          @keyup="referenceValidation(), 
                            maxlengthReferenceValidation($refs.referenceInput.value.length)"
                        />
                        <div
                          id="email2st02-error"
                          class="formerror"
                          v-if="referenceIsValid === false && this.reference !== ''"
                        >
                          Ingrese un punto de referencia
                        </div>
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
                  <div class="col-md-10 col-lg-12 offset-lg-2">
                    <form id="step03_3">
                      <h2>Redes digitales de la empresa</h2>
                      <div class="input" ref="website">
                        <label>Sitio web</label>
                        <input
                          type="text"
                          name="sitioweb_st03"
                          v-model="website"
                          ref="websiteInput"
                          @focus="focus($refs.website)"
                          @blur="blur([$refs.website, $refs.websiteInput.value])"
                          @keyup="validateURL($refs.websiteInput.value)"
                        />
                        <div
                          id="email2st02-error"
                          class="formerror"
                          v-if="websiteIsValid === false"
                        >
                          Ingrese un website
                        </div>
                      </div>
                      <button
                        class="link btn-red u-mt50 big u-mr20"
                        id="submitStep03"
                        type="button"
                        @click="saveStepOne()"
                      >
                        Guardar<i class="fa fa-angle-right"></i>
                      </button>

                      <button
                        class="link btn-red u-mt50 big"
                        id="submitStep04"
                        type="button"
                        @click="checkFormStepOne()"
                      >
                        Continuar<i class="fa fa-angle-right"></i>
                      </button>
                      <!-- {{completedForm}} -->
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
import Cabecera from "@/components/Cabecera.vue";
import StepNumbers from "../../components/StepNumbers.vue";

//Store import
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
/*import Datepicker from 'vuejs-datepicker';
import moment from 'moment'
import {es} from 'vuejs-datepicker/dist/locale'*/

//Vue Datepicker
/*import datePicker from "vue-bootstrap-datetimepicker";
import "bootstrap/dist/css/bootstrap.css";
import "pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css";*/

import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

//Vue Dropzone
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";

import mixin from "@/mixins/mixin.js";

import axios from 'axios'
import VueAxios from 'vue-axios'

export default {
  name: "StepOne",
  mixins: [mixin],
  components: {
    Cabecera,
    StepNumbers,
    DatePicker,
    vueDropzone: vue2Dropzone,
    //AttachmentList: AttachmentList
  },
  data() {
    return {
      //Step One Variables
      rutCompany: '',
      rutCompanyValidation: '',
      fantasyName: '',
      businessName: '',
      date: '',
      giro: '',
      phoneCompany: '+56',
      companyEmail: '',
      street: '',
      streetNumber: '',
      office: '',
      reference: '',
      website: '',

      //Validation variables
      formIsValid: false,
      fantasyIsValid: '',
      businessIsValid: '',
      dateIsValid: '',
      giroIsValid: '',
      activityIsValid: '',
      categoryIsValid: '',
      dropzoneIsValid: '',
      regionIsValid: '',
      provinceIsValid: '',
      communeIsValid: '',
      streetIsValid: '',
      streetNumberIsValid: '',
      officeIsValid: '',
      referenceIsValid: '',

      //DatePicker data
      date: '',

      /*options: {
        format: "DD/MM/YYYY",
        useCurrent: false,
        showClear: true,
        showClose: true,
        toolbarPlacement: "bottom",
      },*/

      lang: {
        formatLocale: {
          firstDayOfWeek: 0,
          weekdaysMin: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
        },

        months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      },

      //Vue Dropzone data
      //vueDropzoneFile: [],
      tempAttachments: [],
      attachments: [],
      dropzoneOptions: {
        // The Url Where Dropped or Selected files will be sent
        url: `https://httpbin.org/post`,
        // File Size allowed in MB
        maxFilesize: 10,
        // Authentication Headers like Access_Token of your application
        headers: {
          Authorization: `Access Token`,
        },
        // The way you want to receive the files in the server
        paramName: function (n) {
          return "file[]";
        },
        //dictDefaultMessage: "Upload Files Here xD",
        //includeStyling: false,
        //previewsContainer: false,
        thumbnailWidth: 250,
        thumbnailHeight: 140,
        uploadMultiple: true,
        parallelUploads: 20,
        addRemoveLinks: true,
        dictRemoveFile: 'Eliminar archivo',
        dictCancelUpload: 'Cancelar subida',
        dictInvalidFileType: 'No puede subir archivos con este formato.',
        dictFileTooBig: "El archivo es muy grande ({{filesize}}MB). Máximo: {{maxFilesize}}MB.",
        acceptedFiles: '.jpg, .jpeg, .xls, .xlsx, .pdf, .doc, .docx, .png',
        dictCancelUploadConfirmation: '¿Está seguro que desea cancelar esta subida?'
      },

      stepOneObject: [],
      getStepOne: [],
      societyType: [],

      urlBase: this.$store.state.URL,
      datosBasicos: [],
      nroSolicitud: '',
      route: ''
    };
  },

  methods: {
    ...mapGetters([
      "getterRegion",
      "getterProvince",
      "getterCommune",
      "getterActivity",
      "getterCategory",
      "getterVueDropzoneFile",
      "getterRutIsValid",
      "getterWebsiteIsValid",
    ]),
    ...mapMutations([
      "focus",
      "blur",
      "dateFocus",
      "dateBlur",
      "rutValidation",
      "phoneNumberValidation",
      "emailValidation",
      "validateURL",
      "collapseClick",
      "setRegion",
      "setProvince",
      "setCommune",
      "setActivity",
      "setCategory",
      "setVueDropzoneFile",
      "setRutIsValid",
      "setWebsiteIsValid",
      "saveCompletedForm",
      "nroSolicitudObj",
      "tipoSocSendDoc",
      "setStepTwoValue",
      "setStepOneValue",
      "setCompletedForm",
      "getRutGlobal",
      "getGlobalBusinessName"
    ]),
    ...mapActions([
      "getRegion",
      "getProvince",
      "getCommune",
      "getActivity",
      "getCategory",
      "companyBackgroundUpload",
    ]),

    click() {
      alert("hey");
    },

    //Validation Input error
    fantasyValidation() {
      if (this.fantasyName == "") {
        this.fantasyIsValid = false;
      } else {
        this.fantasyIsValid = true;
      }
    },

    businessNameValidation() {
      if (this.businessName == "") {
        this.businessIsValid = false;
      } else {
        this.businessIsValid = true;
      }
    },

    dateValidation(refs) {
      if (this.date == "" || this.date == null) {
        console.log("test me");
        this.dateIsValid = false;
        this.dateBlur(refs);
      } else {
        this.dateIsValid = true;
      }
    },

    giroValidation() {
      if (this.giro == "") {
        this.giroIsValid = false;
      } else {
        this.giroIsValid = true;
      }
    },

    maxlengthGiroValidation(input){
      console.log(input);
      if (input > 100) {
        alert("El máximo de caracteres es 100.");
      }
    },

    activityValidation() {
      if (this.selectedActivity == "") {
        this.activityIsValid = false;
      } else {
        this.activityIsValid = true;
      }
    },

    categoryValidation() {
      if (this.selectedCategory == "") {
        this.categoryIsValid = false;
      } else {
        this.categoryIsValid = true;
      }
    },

    dropZoneValidation() {
      if (this.vueDropzoneFile == "") {
        this.dropzoneIsValid = false;
        alert("Debe agregar archivos antes de continuar.");
      } else {
        this.dropzoneIsValid = true;
      }
    },

    regionValidation() {
      if (this.selectedRegion == "") {
        this.regionIsValid = false;
      } else {
        this.regionIsValid = true;
      }
    },

    provinceValidation() {
      if (this.selectedProvince == "") {
        this.provinceIsValid = false;
      } else {
        this.provinceIsValid = true;
      }
    },

    communeValidation() {
      if (this.selectedCommune == "") {
        this.communeIsValid = false;
      } else {
        this.communeIsValid = true;
      }
    },

    streetValidation() {
      if (this.street == "") {
        this.streetIsValid = false;
      } else {
        this.streetIsValid = true;
      }
    },

    maxlengthStreetValidation(input){
      console.log(input);
      if (input > 100) {
        alert("El máximo de caracteres es 100.");
      }
    },

    streetNumberValidation() {
      if (this.streetNumber == "") {
        this.streetNumberIsValid = false;
      } else {
        this.streetNumberIsValid = true;
      }
    },

    acceptNumber() {
      var x = this.streetNumber.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
      this.streetNumber = !x[2] ? x[1] :  x[1] + x[2] + (x[3] ? + x[3] : '');
    },

    officeValidation() {
      if (this.office == "") {
        this.officeIsValid = false;
      } else {
        this.officeIsValid = true;
      }
    },

    maxlengthOfficeValidation(input) {
      console.log(input);
      if (input > 10) {
        alert("El máximo de caracteres es 100.");
      }
    },

    referenceValidation() {
      if (this.reference == "") {
        this.referenceIsValid = false;
      } else {
        this.referenceIsValid = true;
      }
    },

    maxlengthReferenceValidation(input) {
      console.log(input);
      if (input > 10) {
        alert("El máximo de caracteres es 100.");
      }
    },

    //Step One Inputs Validation
    checkFormStepOne() {
      if (this.rutCompany == "" || this.rutIsValid == false) {
        this.setRutIsValid(false);
      } else {
        this.setRutIsValid(true);
      }

      /*if (this.fantasyName == "") {
        this.fantasyIsValid = false;
        this.formIsValid = false;
      } else {
        this.fantasyIsValid = true;
        this.formIsValid = true;
      }*/

      if (this.businessName == "") {
        this.businessIsValid = false;
      } else {
        this.businessIsValid = true;
      }

      if (this.date == "" || this.date == null || this.dateIsValid == false) {
        this.dateIsValid = false;
      } else {
        this.dateIsValid = true;
      }

      if (this.giro == "") {
        this.giroIsValid = false;
      } else {
        this.giroIsValid = true;
      }

      if (this.selectedActivity == "") {
        this.activityIsValid = false;
      } else {
        this.activityIsValid = true;
      }

      if (this.selectedCategory == "") {
        this.categoryIsValid = false;
      } else {
        this.categoryIsValid = true;
      }

      if (this.vueDropzoneFile == "") {
        this.dropzoneIsValid = false;
      } else {
        this.dropzoneIsValid = true;
      }

      if (this.selectedRegion == "") {
        this.regionIsValid = false;
      } else {
        this.regionIsValid = true;
      }

      if (this.selectedProvince == "") {
        this.provinceIsValid = false;
      } else {
        this.provinceIsValid = true;
      }

      if (this.selectedCommune == "") {
        this.communeIsValid = false;
      } else {
        this.communesIsValid = true;
      }

      if (this.street == "") {
        this.streetIsValid = false;
      } else {
        this.streetIsValid = true;
      }

      this.streetNumberValidation()

      if (this.office == "") {
        this.officeIsValid = false;
      } else {
        this.officeIsValid = true;
      }

      this.dropZoneValidation();

      //this.referenceValidation();

      if (this.website == "" || this.websiteIsValid == false) {
        this.setWebsiteIsValid(false);
      } else {
        this.setWebsiteIsValid(true);
      }

      if (this.rutCompany == "" 
        || this.rutIsValid == false 
        || this.websiteIsValid == false 
        || this.dateIsValid == false
        || this.businessName == ""
        || this.date == ""
        || this.giro == ""
        || this.selectedActivity == ""
        || this.selectedCategory == ""
        || this.vueDropzoneFile == ""
        || this.selectedRegion == ""
        || this.selectedProvince == ""
        || this.selectedCommune == ""
        || this.street == ""
        || this.streetNumber == ""
        || this.office == ""
        || this.website == "") {
        
          this.formIsValid = false;
          console.log(this.formIsValid);
      } else {
        this.formIsValid = true;
      }

      if (this.formIsValid == true) {
        this.saveStepOne();
        //this.$router.push({ name: "StepTwo" });
        this.setStepTwoValue(true);
        this.setStepOneValue(false);
      } else {
        alert("Debe completar los campos requeridos");
        this.setStepTwoValue(false);
      }
    },

    test() {
      console.log("test");
      //this.companyBackgroundUpload();
    },

    saveStepOne () {
      this.companyBackgroundUpload();
      /*for(var i = 0; i < this.vueDropzoneFile.length; i++) {
        console.log("Dropzone file before saving in object" + this.vueDropzoneFile);
      }*/
      var dropzoneArray = [];
      for (const key in this.vueDropzoneFile) {
        console.log("key", key);
        console.log("value", this.vueDropzoneFile[key].name);
        dropzoneArray.push(this.vueDropzoneFile[key].name);
      }
      console.log("Dropzone file array before saving in object" + dropzoneArray);
      this.stepOneObject.push({
        stepOne: {
          rut: this.rutCompany,
          fantasy: this.fantasyName,
          businessName: this.businessName,
          date: this.date,
          giro: this.giro,
          activity: this.selectedActivity,
          category: this.selectedCategory,
          phoneCompany: this.phoneCompany,
          companyEmail: this.companyEmail,
          files: dropzoneArray,
          region: this.selectedRegion,
          province: this.selectedProvince,
          commune: this.selectedCommune,
          street: this.street,
          streetNumber: this.streetNumber,
          office: this.office,
          reference: this.reference,
          website: this.website
        }
        
      });
      console.log(this.stepOneObject);
      this.saveCompletedForm([this.stepOneObject, 1]);
      this.savePostStepOne();
      console.log(this.completedForm);
      this.stepOneObject = [];
    },
    
    getNroSolicitud(rut) {
      axios.get(this.urlBase+'/buscarPostulante/' + rut).then((response) => {
        this.datosBasicos = response.data;
        console.log(this.datosBasicos);
        this.nroSolicitud = this.datosBasicos[0].nro_solicitud;
        this.nroSolicitudObj(this.nroSolicitud);
        console.log(this.nroSolicitud);
      setTimeout(this.getStepOneRequest(this.nroSolicitud), 3000);
      this.getSocietyType(this.nroSolicitud);
      }).catch(function (error) {
      console.log("AXIOS ERROR: ", error);
      });
      //console.log(this.nroSolicitud);
      //this.getStepOneRequest(this.nroSolicitud);

    },

    savePostStepOne: function () {
          
      let stepOneObject = this.completedForm;
      let data = JSON.stringify(stepOneObject);
      console.log("Step one Object ready to be sent: " + data);
      console.log("stepOneObject length: " + stepOneObject.length);
      if (this.completedForm.length > 0) {
        axios.post(this.urlBase + '/guardarParcial', data).then((response) => {
        console.log(response.data);
        }).catch(function (error) {
        console.log("AXIOS ERROR: ", error);
        });
        /*this.completedForm.pop();
        console.log(this.completedForm);*/
        /*this.setCompletedForm('')
        console.log(this.completedForm);*/
      } else {
        alert("¡Error al guardar, intente de nuevo!");
      }
    },

    getStepOneRequest (number) {
      /*let stepOneObject = this.stepOneObject;
      let data = JSON.stringify(stepOneObject);
      console.log(data);*/
      console.log(number)
      let requestNumber = number;
      axios.get(this.urlBase + '/paso1/' + requestNumber).then((response) => {
        let stepOneSaved = response.data;
        console.log(stepOneSaved);
        console.log(stepOneSaved[0].object);
        this.getStepOne = JSON.parse(stepOneSaved[0].object);
        console.log(this.getStepOne);
      }).catch(function (error) {
        console.log("AXIOS ERROR: ", error);
      });
    },

    getSocietyType (number) {
      let requestNumber = number;
      axios.get(this.urlBase + '/tipoSociedad/' + requestNumber).then((response) => {
        let tipoSociedad = response.data;
        this.societyType = tipoSociedad;
        console.log(this.societyType[0].tipo_sociedad);
        this.tipoSocSendDoc(this.societyType[0].tipo_sociedad);
        //console.log(this.tipoSocDocs);
      }).catch(function (error) {
        console.log("AXIOS ERROR: ", error);
      });
    },

    companyRutValidation (rut) {
      let rutCompany = rut;
      axios.get(this.urlBase + '/rutEmpresa/' + rutCompany).then((response) => {
        let rutEmpresa = response.data;
        this.rutCompanyValidation = rutEmpresa;
        console.log(this.rutCompanyValidation);
        console.log(this.rutCompanyValidation.length);
        //console.log(this.rutCompanyValidation[0]);
        if (this.rutCompanyValidation.length > 0) {
          alert("Rut ingresado no corresponde a rut de empresa");
          this.setRutIsValid(false);
        } else {
          this.getRutGlobal(rutCompany);
        }
        //console.log(this.tipoSocDocs);
      }).catch(function (error) {
        console.log("AXIOS ERROR: ", error);
      });
    },

    getRut() {
      let routeNumber = this.$route.params.id;
      let number;
      let rut;
      console.log(routeNumber);
      axios.get(this.URL + '/getRut/' + routeNumber).then((response) => {
        let data = response.data;
        console.log(data);
        console.log(data[0].requestNumber);
        console.log(data[0].rut);
        number = data[0].requestNumber;
        rut = data[0].rut;
        if (routeNumber == number) {
          console.log("Match requestNumber");
          this.rutCompany = rut;
          this.getNroSolicitud(this.rutCompany);
          this.companyRutValidation(this.rutCompany);
          this.rutValidation(this.rutCompany);
        } else {
        }
        //console.log(this.tipoSocDocs);
      }).catch(function (error) {
        console.log("AXIOS ERROR: ", error);
      });
    }

  },

  computed: {
    ...mapState([
      "selectedRegion",
      "selectedProvince",
      "selectedCommune",
      "selectedActivity",
      "selectedCategory",
      "collapse",
      "rutIsValid",
      "telIsValid",
      "emailIsValid",
      "websiteIsValid",
      "activities",
      "categories",
      "regions",
      "provinces",
      "communes",
      "vueDropzoneFile",
      "completedForm",
      "URL",
      "nroSolicitudGlobal",
      "tipoSocDocs",
      "showStepTwo",
      "fileAttacthed"

    ]),

    /*test: {
        get() {
          return this.getName();
        },
        set(newName) {
          return this.SET_NAME(newName);
        }
      }*/
  },

  created() {
    this.getRegion();
    this.getActivity();
    this.getCategory();
    this.getRut();
    //this.getStepOneRequest();
    //this.getSocietyType();
    console.log(this.completedForm);
  },
};
</script>

<style>
.background {
  background: #f0f0f0;
}
.font {
  font-size: 100%;
}

.dropzone-custom-content {
  position: absolute;
  padding-top: 15%;
  left: 58%;
  transform: translate(-50%, -30%);
  text-align: center;
}

.dropzone-custom-title {
  margin-top: 0;
  color: #00b782;
}

.subtitle {
  color: #314b5f;
  width: 500px;
  height: 100px;
}

.border {
  /*background: url(../../assets/img/draganddrop.png) no-repeat !important;*/
  border: 1;
  /*height: 194px;
  width: 652px;*/
}

.border:hover {
  cursor: pointer;
}

.svg {
  background: url(../../assets/img/draganddrop-text.svg) no-repeat center;
  margin-left: -4%;
  height: 10px;
}

.datepickerr {
  margin-bottom: 35px;
  border-bottom: 1px solid #333;
  max-width: 360px;
}

.mx-datepicker {
  position: relative !important;
  display: inline;
}

.mx-input {
  width: 100% !important;
  border-radius: 0px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.0); 
  box-shadow: inset 0 1px 1px rgba(0,0,0,.0);
  border-bottom: 1px solid #333;
  padding: 0;
  padding-left: 0;
}

.mx-input:hover {
  border-color: black;
}
.mx-input:focus {
  border-color: black;
}

.mx-calendar:hover .mx-calendar-panel-date:hover {
  border-color: black;
}

.errorFile {
  font-size: 100%;
  color: red;
  position: relative;
  left: 100%;
}

.pointer {
  cursor: pointer !important;
}

.vue-dropzone>.dz-preview .dz-error-message {
    margin-left: auto;
    margin-right: auto;
    margin-top: 25px;
    left: 0;
    width: 100%;
    text-align: center;
}

.vue-dropzone>.dz-preview .dz-remove {
    position: absolute;
    z-index: 30;
    color: #fff;
    margin-left: 15px;
    margin-bottom: 35px;
    padding: 10px;
    top: inherit;
    bottom: 15px;
    border: 2px #fff solid;
    text-decoration: none;
    text-transform: uppercase;
    font-size: .8rem;
    font-weight: 800;
    letter-spacing: 1.1px;
    opacity: 0;
}
</style>