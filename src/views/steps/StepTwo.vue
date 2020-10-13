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
                    <div class="input u-mb0">
                      <label>Número total de trabajadores en la empresa</label>
                      <input type="text" name="trabajadores_st04">
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
                    <div class="input u-mb60">
                      <div class="input-select">
                        <select name="rangofacturacion_st04">
                          <option value="default">Rango de facturación según ventas anuales</option>
                        </select>
                      </div>
                    </div>
                    <div class="input u-mb60">
                      <div class="input-select">
                        <select name="patrimonio_st04">
                          <option value="default">Patrimonio según último balance o capital inicial para empresas < 1 año</option>
                        </select>
                      </div>
                    </div>
                    <div class="input u-mb60 percent">
                      <label>Porcentaje de la sociedad dedicado a la construcción</label>
                      <input type="text" name="porcentajesociedad_st04">
                    </div>
                    <div class="input u-mb30 uf">
                      <label>Volumen facturado año anterior</label>
                      <input type="text" name="volumenfacturacion_st04">
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="c-form-drag whitebg small font" ref="collapse">
            <div class="container">
              <a class="section-minimizar"
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
          <div class="c-form-steps whitebg small">
            <div class="container"><a class="section-minimizar" href="#" data-formulario="4">EXPANDIR<span></span></a>
              <div class="c-form-steps__content step-data u-pb0">
                <div class="row">
                  <div class="col-md-12 col-lg-6 offset-lg-2">
                    <form action="#" id="step04_3">
                      <h2>COMPOSICIÓN ACCIONARIA</h2>
                      <div class="content-repeater" id="repeater">
                        <div class="wrapper-repeater">
                          <div class="input item-content u-mb70">
                            <label>RUT de la persona (natural o jurídica)<i>  (<i class="contador">1</i> de<i class="total">1</i>)</i></label>
                            <input type="text" name="rutpersona_st04">
                            <div class="small-text">Sin puntos y con guión (11111111-1)</div>
                          </div>
                          <div class="input item-content u-mb70">
                            <label>Nombre<i>  (<i class="contador">1</i> de<i class="total">1</i>)</i></label>
                            <input type="text" name="nombrepersona_st04">
                          </div>
                          <div class="input item-content u-mb70">
                            <label>Apellido Paterno<i>  (<i class="contador">1</i> de<i class="total">1</i>)</i></label>
                            <input type="text" name="apellido1persona_st04">
                          </div>
                          <div class="input item-content u-mb70">
                            <label>Apellido Materno<i>  (<i class="contador">1</i> de<i class="total">1</i>)</i></label>
                            <input type="text" name="apellido2persona_st04">
                          </div>
                          <div class="input item-content u-mb70">
                            <label>Porcentaje de la sociedad<i> (<i class="contador">1</i> de<i class="total">1</i>)</i></label>
                            <input type="text" name="porcentajesociedad_st04">
                          </div>
                        </div>
                      </div><a class="input-remover" href="#" style="display:none" id="repeater-rmv-btn">Eliminar socio<span>x</span></a><a class="input-repeater" href="#" id="repeater-add-btn">Añadir otro socio<span>+</span></a>
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
                  <div class="col-md-12 col-lg-8 offset-lg-2">
                    <form action="#" id="step04_3"><a class="link prev btn-blue u-mt50 u-mr30 small" href="#"><i class="fa fa-angle-left"></i>Anterior</a><a class="link btn-red u-mt50 big" href="#" id="submitStep04">Guardar y continuar<i class="fa fa-angle-right"></i></a></form>
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
      ...mapMutations([
        "focus",
        "blur",
        "collapseClick",
        "setVueDropzoneFile",
      ]),

      ...mapActions([
        "companyBackgroundUpload",
      ]),
    },

    computed: {
      ...mapState([
        "collapse",
      ]),
    },
  }
</script>

    