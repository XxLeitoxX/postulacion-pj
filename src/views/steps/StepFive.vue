<template>
    <div>
        <Cabecera />
        <!-- <StepNumbers /> -->
        <div class="c-steps-numbers">
        <div class="container">
          <div class="c-steps-numbers__item success"><span>1</span>
            <p>Información y<br>antecedentes legales</p>
          </div>
          <div class="c-steps-numbers__item success"><span>2</span>
            <p>Antecedentes<br>financieros</p>
          </div>
          <div class="c-steps-numbers__item success"><span>3</span>
            <p>Patrocinios</p>
          </div>
          <div class="c-steps-numbers__item success"><span>4</span>
            <p>Participación</p>
          </div>
          <div class="c-steps-numbers__item active"><span>5</span>
            <p>Declaraciones<br>y compromisos</p>
          </div>
        </div>
      </div>
        <main role="main">
      <div class="c-form-steps">
        <div class="c-form-steps__sections" data-step="05">
          <div class="container u-pt50">
            <div class="c-form-steps__content step-data u-pt0">
              <div class="row">
                <div class="col-md-12 col-lg-8 offset-lg-2">
                  <h2>Adhesión a compromisos y códigos de buenas prácticas</h2>
                  <p>Lea y confirme cada uno de los compromisos obligatorios que los postulantes a socios  deben adquirir con la Cámara Chilena de la Construcción</p>
                  <form action="#">
                    <div class="form-tabs">
                      <div :class="tab1" ref="tab1">
                        <div class="tab-number">
                          <p>1</p>
                        </div>
                        <div class="tab-info">
                          <h3>Código de Buenas Prácticas en la Industria de la Construcción</h3>
                          <p>Este Código regula el comportamiento ético y las buenas prácticas de los socios de la Cámara Chilena de la Construcción, ya sea en sus relaciones o bien con terceros y es de carácter obligatorio.</p>
                          <p>El postulante declara que toma conocimiento de lo antes señalado y se obliga al cumplimiento de las disposiciones contenidas en el Código y sus anexos.</p>
                          <p>Conocer <a href="https://www.cchc.cl/uploads/basica/archivos/Descargar-Codigo-de-Buenas-Practicas-en-la-Industria-de-la-Construccion.pdf" target="_blank">aquí:</a></p>
                          <div class="md-checkbox">
                            <input id="tab01" type="checkbox" 
                              @click="activeClass($refs.tab1), tabValidation()">
                            <label for="tab01" id="checbox01">Acepto.</label>
                          </div>
                        </div>
                      </div>
                      <div :class="tab2" ref="tab2">
                        <div class="tab-number">
                          <p>2</p>
                        </div>
                        <div class="tab-info">
                          <h3>Declaración de Compromiso hacia Cero Accidentes Fatales</h3>
                          <p>Declaro mi compromiso de trabajo permanente para alcanzar el objetivo de “Cero Accidentes Fatales” en la empresa que represento, ya referida, de acuerdo a los lineamientos y estrategias que, al efecto, implemente la Cámara Chilena de la Construcción A.G.</p>
                          <p>Con el propósito de seguir construyendo una Cultura de Seguridad, mantendré integrada la Prevención de Riesgos en las operaciones habituales que ejecute la empresa a la cual represento, en todos sus centros de trabajo, comprometiéndome a establecer los más altos estándares de seguridad y salud laboral en todo nuestro quehacer y con todos los actores de la cadena de valor, a través de las siguientes conductas empresariales: </p>
                          <ul>
                            <li>Reconocer y gestionar la seguridad y la salud de todos nuestros trabajadores y de quienes participan de sus actividades como valor estratégico.</li>
                            <li>stablecer una cultura de seguridad y salud en toda la organización, comenzando por los líderes, promoviendo la participación de nuestros trabajadores y fomentando la prevención.</li>
                            <li>Anticipar los peligros inherentes en sus actividades, y analizar e implementar soluciones para eliminar o mitigar la exposición al riesgo.</li>
                          </ul>
                          <p>Lo anterior a través de las siguientes prácticas:<br>Definir y comunicar a la organización los objetivos en Seguridad y Salud en el trabajo, en adelante “SST”.<br>Identificar los peligros de SST e implementar un plan de mitigación asociados a ellos, con al menos una revisión anual.<br>Implementar un Sistema de Gestión en Seguridad y Salud en el Trabajo que involucre la participación de ejecutivos mandos medios y trabajadores.<br>Desarrollar un plan anual de capacitación en SST para ejecutivos, mandos medios y trabajadores.<br>Implementar un modelo de reporte de incidentes, realizando gestión sobre los hallazgos de riesgos mayores.<br>Reportar a la Comisión de Seguridad y Salud Laboral de la CChC los accidentes graves y/o fatales que se produzcan en la empresa y obras y afecten a trabajadores propios o de contratistas, facilitando información a la Comisión que permita realizar los aprendizajes de cada caso.</p>
                          <div class="md-checkbox">
                            <input id="tab02" type="checkbox" 
                              @click="activeClass($refs.tab2), tabValidation()">
                            <label for="tab02">Acepto y me comprometo</label>
                          </div>
                        </div>
                      </div>
                      <div :class="tab3" ref="tab3">
                        <div class="tab-number">
                          <p>3</p>
                        </div>
                        <div class="tab-info">
                          <h3>Declaración de Conocimiento del Modelo de Prevención de Delitos CChC</h3>
                          <p>En cumplimiento de lo dispuesto en la Ley N° 20.393, la Cámara Chilena de la Construcción-CChC, ha adoptado e implementado un Modelo de Prevención de Delitos, que conforme a lo dispuesto en el Artículo 4°, N° 3, letra d), de dicha ley, entre otros elementos, debe incluir la existencia de obligaciones, prohibiciones, sanciones administrativas y procedimientos de denuncia y determinación de responsabilidades en contra de las personas que incumplan el modelo de prevención de delitos. Además, estas obligaciones, prohibiciones y sanciones deben ser incorporadas expresamente en los documentos que la CChC celebre con terceras partes, proveedores, socios y otros que considere necesario.<br>De esta manera, como postulante a socio de la CChC, declaro conocer y a su vez me obligo a cumplir con el Modelo de Prevención de Delitos (disponible en el sitio web www.CCHC.cl, en el Portal del Socio y entregado en este acto) implementado por la CChC, con el objeto de prevenir, evitar y detectar la comisión de los delitos de  Lavado de Activos, Financiamiento del Terrorismo, Cohecho Funcionario Público Nacional o Extranjero, Receptación, Negociación Incompatible, Corrupción entre Particulares, Apropiación Indebida, Administración Desleal, y los artículos 136, 139, 139 bis, 139 ter de la Ley General de Pesca y Acuicultura, como también en relación aquellos delitos que se incorporen en lo sucesivo en la Ley Nº20.393.</p>
                          <div class="md-checkbox">
                            <input id="tab03" type="checkbox" 
                              @click="activeClass($refs.tab3), tabValidation()">
                            <label for="tab03">Acepto y me comprometo</label>
                          </div>
                        </div>
                      </div>
                      <div :class="tab4" ref="tab4">
                        <div class="tab-number bg">
                          <p>4</p>
                        </div>
                        <div class="tab-info">
                          <h3>Declaración de Compromiso Protocolo Sanitario Covid-19 </h3>
                          <p>Por el presente acto e instrumento vengo en declarar: <br>Nuestro <strong>compromiso con la protección y el cuidado de los trabajadores, sus familias y la comunidad </strong>, mediante la implementación y cumplimiento efectivo en nuestras obras/faenas/centros de trabajo del Protocolo Sanitario elaborado por la Cámara Chilena de la Construcción A.G.-CChC, para mitigar el riesgo de contagio de Covid-19. <br>Nuestro <strong>compromiso con el bienestar de los trabajadores y de sus familias </strong>, mediante la implementación de los <strong>programas sociales </strong>que la CChC ha diseñado para apoyarlos permanentemente y en estas especiales circunstancias, en coherencia con su misión institucional de mejorar la calidad de vida de las personas y comprometidos con el desarrollo sostenible del sector construcción. <br>Ejercer un <strong>liderazgo permanente </strong>, propio y de nuestros equipos ejecutivos, para que se ejecuten las acciones y se produzcan rápida y efectivamente los cambios conductuales que demanda la compleja situación que hoy enfrenta el país. <br>Particularmente en relación con el cumplimiento del Protocolo Sanitario de la CChC y el desafío permanente de seguir construyendo una cultura preventiva, nos comprometemos a cumplir efectivamente con las siguientes prácticas: 
                            <ul> 
                              <li><strong>Asignar los recursos necesarios </strong>que permitan implementar las medidas sanitarias en todos nuestros centros de trabajo. </li>
                              <li><strong>Mantener informados </strong>a nuestros trabajadores (directos e indirectos) sobre las medidas preventivas definidas por nuestra organización. </li>
                              <li><strong>Visitar nuestras obras, faenas o centros de trabajo </strong>para conocer directamente el estado de implementación del Protocolo Sanitario (liderazgo visible).</li>
                              <li><strong>Autoevaluar y verificar semanalmente el cumplimiento de las medidas</strong>indicadas en el Protocolo, con las herramientas que la CChC ponga a disposición.</li>
                            </ul>
                          </p>
                          <div class="md-checkbox">
                            <input id="tab04" type="checkbox" 
                              @click="activeClass($refs.tab4), tabValidation()">
                            <label for="tab04">Acepto y me comprometo</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="c-form-drag whitebg small font" ref="collapse">
            <div class="container u-pb0">
              <a class="section-minimizar pointer"
                ref="collapseMin"
                @click="collapseClick([$refs.collapse, $refs.collapseMin])">
                {{ collapse }}<span></span>
              </a>
              <div class="row">
                <div class="col-md-12 col-lg-6 offset-lg-2">
                  <h2>BUENAS PRÁCTICAS</h2>
                  <p class="u-mb50">La Cámara insta a sus socios a comprometerse con las mejores prácticas empresariales y de la industria. Es por ello que pedimos acreditarlas con los siguientes documentos</p>
                  <!-- <form class="dropzone dropzone-custom small-drop" action="/file-upload"><span class="dropzone-tooltip" aria-label="Este certificado se obtiene en la Dirección del Trabajo." data-microtip-position="right" role="tooltip">?</span></form>
                  <form class="dropzone dropzone-custom small-drop02" action="/file-upload"><span class="dropzone-tooltip" aria-label="Este certificado se obtiene en la mutualidad correspondiente." data-microtip-position="right" role="tooltip">?</span></form> -->
                  <vue-dropzone
                    ref="myVueDropzone3"
                    :useCustomSlot="true"
                    id="dropzone3"
                    @vdropzone-upload-progress="uploadProgress"
                    :options="dropzoneOptions3"
                    @vdropzone-file-added="fileAdded3"
                    @vdropzone-sending-multiple="sendingFiles"
                    @vdropzone-success-multiple="success3"
                    @vdropzone-removed-file="removeFile3"
                    class="border4"
                  >
                    <div class="dropzone-custom-content svg3">
                      
                      <div class="subtitle">

                      </div>
                    </div>
                  </vue-dropzone>
                 <!--  <AttachmentList
                    :tempAttachments="getTempAttachments"
                    :attachments="getAttachments"
                  /> -->
                  <div
                    id="email2st02-errord"
                    class="errorlogin"
                    v-if="dropzone3IsValid === false">
                      Ingrese un archivo
                  </div>
                  <br>
                  <vue-dropzone
                    ref="myVueDropzone4"
                    :useCustomSlot="true"
                    id="dropzone4"
                    @vdropzone-upload-progress="uploadProgress"
                    :options="dropzoneOptions4"
                    @vdropzone-file-added="fileAdded4"
                    @vdropzone-sending-multiple="sendingFiles"
                    @vdropzone-success-multiple="success4"
                    @vdropzone-removed-file="removeFile4"
                    class="border4"
                  >
                    <div class="dropzone-custom-content svg4">
                      
                      <div class="subtitle">

                      </div>
                    </div>
                  </vue-dropzone>
                  <!-- <AttachmentList
                    :tempAttachments="getTempAttachments"
                    :attachments="getAttachments"
                  /> -->
                  <div
                    id="email2st02-errord"
                    class="errorlogin"
                    v-if="dropzone4IsValid === false">
                      Ingrese un archivo
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="c-form-steps whitebg">
            <div class="container">
              <div class="c-form-steps__content step-data">
                <div class="row">
                  <div class="col-md-12 col-lg-6 offset-lg-2">
                    <button class="btn-grey" type="button" 
                      id="submitEnd" @click="checkStepFive()">
                        ENVIAR POSTULACIÓN<i class="fa fa-angle-right"></i>
                    </button>
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
  import Cabecera from './../../components/Cabecera';
  import StepNumbers from './../../components/StepNumbers';
  import { mapState, mapMutations, mapActions } from 'vuex';

  import vue2Dropzone from "vue2-dropzone";
  import "vue2-dropzone/dist/vue2Dropzone.min.css";

  import mixin from "@/mixins/mixin.js";

  import axios from 'axios'
  import VueAxios from 'vue-axios'

export default {
  name: 'StepFive',
  mixins: [mixin],
  components: {
    Cabecera,
    StepNumbers,
    vueDropzone: vue2Dropzone,
},
  data () {
      return {
      active: '',
      dropzone3IsValid: '',
      dropzone4IsValid: '',
      //vueDropzoneFile: [],
        tempAttachments: [],
        attachments: [],
        dropzoneOptions3: {
          // The Url Where Dropped or Selected files will be sent
          url: `https://httpbin.org/post`,
          // File Size allowed in MB
          maxFilesize: 10000000,
          // Authentication Headers like Access_Token of your application
          headers: {
            Authorization: `Access Token`,
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
          acceptedFiles: '.jpg, .jpeg, .xls, .xlsx, .pdf, .doc, .docx',
        },

        dropzoneOptions4: {
          // The Url Where Dropped or Selected files will be sent
          url: `https://httpbin.org/post`,
          // File Size allowed in MB
          maxFilesize: 10000000,
          // Authentication Headers like Access_Token of your application
          headers: {
            Authorization: `Access Token`,
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
          acceptedFiles: '.jpg, .jpeg, .xls, .xlsx, .pdf, .doc, .docx',
        },
        tabCount: 0,
        sendPostulation: '',
        stepFiveObject: []
     
      }
    },
    methods:{
      ...mapMutations(['focus', 'blur', 'collapseClick', 'rutValidation', 'phoneNumberValidation', 'emailValidation', "saveCompletedForm", "activeClass", "setVueDropzoneFileThree", 
        "setVueDropzoneFileFour", "setStepSixValue", "setStepFiveValue"]),

      ...mapActions([
        "companyBackgroundUploadThree", "companyBackgroundUploadFour"
      ]),

      tabValidation() {
        this.tabCount = this.tabCount + 1;
        console.log("Count = " + this.tabCount);
      },

      checkStepFive() {
        console.log(this.tab1);
        this.companyBackgroundUploadThree();
        this.companyBackgroundUploadFour();
        console.log(this.vueDropzoneFileThree);
        console.log(this.vueDropzoneFileFour);
        if (this.tabCount < 4 || this.vueDropzoneFileThree == "" || this.vueDropzoneFileFour == "") {
          this.sendPostulation = false;
        } else {
          this.sendPostulation = true;
        }

        if (this.sendPostulation == true) {
          this.saveStepFive();
          this.sendBigObject();
          this.setStepSixValue(true);
          this.setStepFiveValue(false);
        } else {
          alert("Debe completar el formulario para enviar su postulación.");
        }
      },

      saveStepFive() {
        this.stepFiveObject.push({
          stepFive: {
            stepFiveFirstDropzone: this.vueDropzoneFileThree,
            stepFiveSecondDropzone: this.vueDropzoneFileFour,
          }
          
        });
        console.log(this.stepFiveObject);
        this.saveCompletedForm([this.stepFiveObject, 5]);
        this.savePostFive();
        console.log(this.completedForm);
        this.stepFiveObject = [];
      },

      savePostFive: function () {
          
        let stepFiveObject = this.completedForm;
        let data = JSON.stringify(stepFiveObject);
        axios.post(this.URL + '/guardarParcial', data).then((response) => {
          console.log(response.data);
        }).catch(function (error) {
          console.log("AXIOS ERROR: ", error);
        });
      },

      sendBigObject: function () {
          
        let bigObject = this.completedForm[0].nroSolicitud;
        let data = JSON.stringify(bigObject); 
        axios.post(this.URL + '/guardarObjeto/' + data).then((response) => {
          console.log(response.data);
        }).catch(function (error) {
          console.log("AXIOS ERROR: ", error);
        });
      },
     
    },

    computed: {
      ...mapState([
        "collapse",
        "vueDropzoneFileThree",
        "vueDropzoneFileFour",
        "completedForm",
        "tab1",
        "tab2",
        "tab3",
        "tab4",
        "URL"
      ]),
    },
    

    created: function () {
      
    }

    
}
</script>

<style>
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

.border4 {
  /*background: url(../../assets/img/draganddrop.png) no-repeat !important;*/
  border: 1;
  height: 194px;
  width: 652px;
}

.border:hover {
  cursor: pointer;
}

.svg3 {
  background: url(../../assets/img/dropzone01.svg) no-repeat center;
}

.svg4 {
  background: url(../../assets/img/dropzone02.svg) no-repeat center;
}
</style>