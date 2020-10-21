<template>
  <div>
    <Cabecera></Cabecera>
    <main role="main">
      <!-- <StepNumbers></StepNumbers> -->
      <div class="c-steps-numbers">
        <div class="container">
          <div class="c-steps-numbers__item success"><span>1</span>
            <p>Información y<br>antecedentes legales</p>
          </div>
          <div class="c-steps-numbers__item active"><span>2</span>
            <p>Antecedentes<br>financieros</p>
          </div>
          <div class="c-steps-numbers__item"><span>3</span>
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
        <div class="c-form-steps__sections" data-step="02">
          <div class="container u-pb0">
            <div class="c-form-steps__content step-data">
              <div class="row">
                <div class="col-md-12 col-lg-6 offset-lg-2">
                  <h2>Información de los Trabajadores</h2>
                  <p>Ingresa el número de la totalidad de sus trabajadores, incluyendo los que están en obra, faena o centro de trabajo.</p>
                  <form action="#" id="step04_1">
                    <!-- <div class="input u-mb0">
                      <label>Número total de trabajadores en la empresa</label>
                      <input type="text" name="trabajadores_st04">
                    </div> -->
                    <div class="input u-mb0">
                      <div class="input-select">
                        <select
                          name="trabajadores_st03"
                          @input="$event = setTotalEmployees($event.target.value)"
                          :value="selectedTotalEmployees"
                          @change="employeesTotalValidation()"
                        >
                          <option value="" selected disabled hidden>
                            Número total de trabajadores en la empresa
                          </option>
                          <option
                            v-for="(employees, key) in totalEmployees"
                            :value="employees.num_Trabajadores_Id"
                            :key="key"
                          >
                            {{ employees.numero_trabajadores }}
                          </option>
                        </select>
                        <div
                          id="giro_st03-error"
                          class="errorlogin"
                          v-if="totalEmployeesIsValid === false"
                        >
                          Ingrese un número de trabajadores
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="c-form-drag">
            <div class="container">
              <div class="row">
                <div class="col-md-12 col-lg-6 offset-lg-2">
                  <h2>Información Financiera</h2>
                  <form action="#" id="step04_2">
                    <!-- <div class="input u-mb60">
                      <div class="input-select">
                        <select name="rangofacturacion_st04">
                          <option value="default">Rango de facturación según ventas anuales</option>
                        </select>
                      </div>
                    </div> -->
                    <div class="input u-mb60">
                      <div class="input-select">
                        <select
                          name="rango_st03"
                          @input="$event = setRange($event.target.value)"
                          :value="selectedRange"
                          @change="rangeValidation()"
                        >
                          <option value="" selected disabled hidden>
                            Rango de facturación según ventas anuales
                          </option>
                          <option
                            v-for="(range, key) in range"
                            :value="range.rangoId"
                            :key="key"
                          >
                            {{ range.rango }}
                          </option>
                        </select>
                        <div
                          id="giro_st03-error"
                          class="errorlogin"
                          v-if="rangeIsValid === false"
                        >
                          Ingrese un rango
                        </div>
                      </div>
                    </div>
                    <div class="input u-mb60" ref="input">
                      <!-- <div class="input-select">
                        <select name="patrimonio_st04">
                          <option value="default">Patrimonio según último balance o capital inicial para empresas < 1 año</option>
                        </select>
                      </div> -->
                      <label>Porcentaje de la sociedad dedicado a la construcción</label>
                      <input type="text" name="patrimonio_st04" ref="percentage"
                        v-model="firstPercentage"
                        @focus="focus($refs.input)"
                        @blur="blur([$refs.input, $refs.percentage.value])">
                    </div>
                    <div class="input u-mb60 percent" ref="society">
                      <label>Porcentaje de la sociedad dedicado a la construcción</label>
                      <input type="text" name="porcentajesociedad_st04"
                        ref="build"
                        v-model="secondPercentage"
                        @focus="focus($refs.society)"
                        @blur="blur([$refs.society, $refs.build.value])">
                    </div>
                    <div class="input u-mb30 uf" ref="volume">
                      <label>Volumen facturado año anterior</label>
                      <input type="text" name="volumenfacturacion_st04"
                        ref="volumeInput"
                        v-model="volume"
                        @focus="focus($refs.volume)"
                        @blur="blur([$refs.volume, $refs.volumeInput.value])">
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="c-form-drag whitebg small font" ref="collapse">
            <div class="container">
              <a class="section-minimizar pointer"
                ref="collapseMin"
                @click="collapseClick([$refs.collapse, $refs.collapseMin])">
                {{ collapse }}<span></span>
              </a>
              <div class="row">
                <div class="col-md-12 col-lg-6 offset-lg-2">
                  <h2>Antecendentes financieros de la empresa</h2>
                  <p>A continuación ingrese los documentos que acreditan la información de su empresa. Los documentos requeridos son los siguientes:</p>
                  <ul>
                    <li>Documento carpeta tributaria especial</li>
                  </ul>
                  <!-- <form class="dropzone dropzone-custom custom-drop" action="/file-upload" id="dz-form"></form> -->

                  <vue-dropzone
                    ref="myVueDropzone"
                    :useCustomSlot="true"
                    id="dropzone"
                    @vdropzone-upload-progress="uploadProgress"
                    :options="dropzoneOptions"
                    @vdropzone-file-added="fileAdded"
                    @vdropzone-sending-multiple="sendingFiles"
                    @vdropzone-success-multiple="success"
                    class="border"
                  >
                    <div class="dropzone-custom-content svg">
                      
                      <div class="subtitle">

                      </div>
                    </div>
                  </vue-dropzone>
                  <AttachmentList
                    :tempAttachments="getTempAttachments"
                    :attachments="getAttachments"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="c-form-steps whitebg small" ref="collapseC">
            <div class="container">
              <a class="section-minimizar pointer" ref="collapseComp"
                @click="collapseClick([$refs.collapseC, $refs.collapseComp])"
                data-formulario="4">
              {{ collapse }}<span></span></a>
              <div class="c-form-steps__content step-data u-pb0">
                <div class="row">
                  <div class="col-md-12 col-lg-6 offset-lg-2">
                    <form action="#" id="step04_3">
                      <h2>COMPOSICIÓN ACCIONARIA</h2>

                      <div class="content-repeater" id="repeater">
                        <div class="wrapper-repeater" 
                          v-for="(inputs, index) in addPartner" :key="index">
                          <div class="input item-content u-mb70" ref="rut">
                            <label>RUT de la persona (natural o jurídica)<i>  (<i class="contador">1</i> de<i class="total">1</i>)</i></label>
                            <input type="text" name="rutpersona_st04"
                              v-model="rutPerson"
                              ref="rutPerson"
                              @focus="focus($refs.rut)"
                              @blur="blur([$refs.rut, $refs.rutPerson.value])"
                              @keyup="rutValidation($refs.rutPerson.value)">
                            <div class="small-text">Sin puntos y con guión (11111111-1)</div>
                            <div
                              id="giro_st03-error"
                              class="errorlogin"
                              v-if="rutIsValid === false">
                                Ingrese un rut válido
                            </div>
                          </div>
                          <div class="input item-content u-mb70" ref="name">
                            <label>Nombre<i>  (<i class="contador">1</i> de<i class="total">1</i>)</i></label>
                            <input type="text" name="nombrepersona_st04"
                              v-model="name"
                              ref="nameInput"
                              @focus="focus($refs.name)"
                              @blur="blur([$refs.name, $refs.nameInput.value])"
                              @keyup="nameValidation()">
                              <div
                                id="giro_st03-error"
                                class="errorlogin"
                                v-if="nameIsValid === false">
                                  Ingrese un nombre
                              </div>
                          </div>
                          <div class="input item-content u-mb70" ref="lastname">
                            <label>Apellido Paterno<i>  (<i class="contador">1</i> de<i class="total">1</i>)</i></label>
                            <input type="text" name="apellido1persona_st04"
                              v-model="fatherLastname"
                              ref="fatherLastnameInput"
                              @focus="focus($refs.lastname)"
                              @blur="blur([$refs.lastname, $refs.fatherLastnameInput.value])"
                              @keyup="fatherLastnameValidation()">
                              <div
                                id="giro_st03-error"
                                class="errorlogin"
                                v-if="fatherLastnameIsValid === false">
                                  Ingrese un apellido
                              </div>
                          </div>
                          <div class="input item-content u-mb70" ref="motherLastname">
                            <label>Apellido Materno<i>  (<i class="contador">1</i> de<i class="total">1</i>)</i></label>
                            <input type="text" name="apellido2persona_st04"
                              v-model="motherLastname"
                              ref="motherLastnameInput"
                              @focus="focus($refs.motherLastname)"
                              @blur="blur([$refs.motherLastname, $refs.motherLastnameInput.value])"
                              @keyup="motherLastnameValidation()">
                              <div
                                id="giro_st03-error"
                                class="errorlogin"
                                v-if="motherLastnameIsValid === false">
                                  Ingrese un apellido
                              </div>
                          </div>
                          <div class="input item-content u-mb70" ref="societyPercentage">
                            <label>Porcentaje de la sociedad<i> (<i class="contador">1</i> de<i class="total">1</i>)</i></label>
                            <input type="text" name="porcentajesociedad_st04"
                              v-model="societyPercentage"
                              ref="societyPercentageInput"
                              @focus="focus($refs.societyPercentage)"
                              @blur="blur([$refs.societyPercentage, $refs.societyPercentageInput.value])"
                              @keyup="societyValidation()">
                              <div
                                id="giro_st03-error"
                                class="errorlogin"
                                v-if="societyPercentageIsValid === false">
                                  Ingrese un porcentaje
                              </div>
                          </div>
                        </div>
                      </div><a class="input-remover" href="#" style="display:none" id="repeater-rmv-btn">Eliminar socio<span>x</span></a>
                      <a class="input-repeater pointer" @click="addPartnerValidation()" id="repeater-add-btn">Añadir otro socio<span>+</span></a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="c-form-steps whitebg">
            <div class="container">
              <div class="c-form-steps__content step-data">
                <div class="row">
                  <div class="col-md-12 col-lg-12 offset-lg-2">
                    <form action="#" id="step04_3">
                      <button class="link prev btn-blue u-mt50 u-mr30 small" @click="goStepOne">
                        <i class="fa fa-angle-left"></i>Anterior</button>
                      <button class="link btn-red u-mt50 big u-mr20" type="button" id="submitStep04">
                        Guardar<i class="fa fa-angle-right"></i></button>
                      <button class="link btn-red u-mt50 big" id="submitStep04">Continuar<i class="fa fa-angle-right"></i></button>
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
  //Store import
  import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
  //Vue Dropzone
  import vue2Dropzone from "vue2-dropzone";
  import "vue2-dropzone/dist/vue2Dropzone.min.css";

  import mixin from "@/mixins/mixin.js";
  export default {
    name: 'StepTwo',
    mixins: [mixin],
    components:{
      Cabecera,
      StepNumbers,
      vueDropzone: vue2Dropzone,
    },
    data () {
      return {
        firstPercentage: '',
        secondPercentage: '',
        volume: '',
        rutPerson: '',
        name: '',
        fatherLastname: '',
        motherLastname: '',
        societyPercentage: '',
        addPartner: [],
        inputsPartner: [],
        totalEmployeesIsValid: '',
        rangeIsValid: '',
        nameIsValid: '',
        fatherLastnameIsValid: '',
        motherLastnameIsValid: '',
        societyPercentageIsValid: '',
        formIsValid: '',

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
            Authorization: `Access Token`,
          },
          // The way you want to receive the files in the server
          paramName: function (n) {
            return "file[]";
          },
          dictDefaultMessage: "Upload Files Here xD",
          includeStyling: false,
          previewsContainer: false,
          thumbnailWidth: 250,
          thumbnailHeight: 140,
          uploadMultiple: true,
          parallelUploads: 20,
          addRemoveLinks: true,
        },
      }
    },

    methods: {
      ...mapGetters([
        "getterTotalEmployees",
        "getterRange",
        "getterRutIsValid"
      ]),
      ...mapMutations([
        "focus",
        "blur",
        "rutValidation",
        "collapseClick",
        "setVueDropzoneFile",
        "setTotalEmployees",
        "setRange",
        "setRutIsValid",
      ]),

      ...mapActions([
        "companyBackgroundUpload",
        "getTotalEmployees",
        "getRange",
      ]),

      employeesTotalValidation() {
        if (this.selectedTotalEmployees == "") {
          this.totalEmployeesIsValid = false;
        } else {
          this.totalEmployeesIsValid = true;
        }
      },

      rangeValidation () {
        if (this.selectedRange == "") {
          this.rangeIsValid = false;
        } else {
          this.rangeIsValid = true;
        }
      },

      nameValidation() {
        if (this.name == "") {
          this.nameIsValid = false;
        } else {
            this.nameIsValid = true;
        }
      },

      fatherLastnameValidation() {
        if (this.fatherLastname == "") {
          this.fatherLastnameIsValid = false;
        } else {
            this.fatherLastnameIsValid = true;
        }
      },

      motherLastnameValidation() {
        if (this.motherLastname == "") {
          this.motherLastnameIsValid = false;
        } else {
            this.motherLastnameIsValid = true;
        }
      },

      societyValidation() {
        if (this.societyPercentage == "") {
          this.societyPercentageIsValid = false;
        } else {
            this.societyPercentageIsValid = true;
        }
      },

      addPartnerValidation() {
        this.addPartner.push({
          rutPerson: this.rutPerson, 
          name: this.name,
          fatherLastname: this.fatherLastname,
          motherLastname: this.motherLastname,
          percentage: this.percentage});
        console.log(this.addPartner);
        //this.addPartner.push(this.inputsPartner);
      },

      goStepOne() {
        this.$router.push({ name: "StepOne" });
      },

      checkForm() {
        if (this.rutPerson == "") {
          this.setRutIsValid(false);
          this.formIsValid = false;
        } else {
          this.setRutIsValid(true);
          this.formIsValid = true;
        }
      },
    },

    computed: {
      ...mapState([
        "collapse",
        "selectedTotalEmployees",
        "selectedRange",
        "totalEmployees",
        "range",
        "rutIsValid",
      ]),
    },

    created () {
      this.getTotalEmployees();
      this.getRange();
    }
  }
</script>

<style>
  .pointer {
    cursor: pointer !important;
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
  background: url(../../assets/img/draganddrop.png) no-repeat !important;
  border: 0;
  height: 194px;
  width: 652px;
}

.border:hover {
  cursor: pointer;
}

.svg {
  background: url(../../assets/img/draganddrop-text.svg) no-repeat center;
}
</style>

    