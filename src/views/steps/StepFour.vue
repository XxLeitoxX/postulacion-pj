<template>
<div>
<Cabecera></Cabecera>
<main role="main">
<StepNumbers></StepNumbers>
   <div class="c-form-steps">
        <div class="c-form-steps__sections greybg" data-step="04">
          <div class="container u-pb0">
            <div class="c-form-steps__content step-data">
              <div class="row">
                <div class="col-md-12 col-lg-6 offset-lg-2">
                    <h2>Representante ante la CChC</h2>
                  <p>Será el principal nexo entre la empresa y la Cámara Chilena de la Construcción para todos los eventos de comunicación que se realicen.</p>
                  <form action="#" id="step06_1">
                    <div class="input" ref="rut">
                      <label>RUT del representante</label>
                      <input type="text" name="rutrepresentante_st06" v-model="rutRepre" ref="rutRepresentante" @focus="focus($refs.rut)" @blur="blur([$refs.rut, $refs.rutRepresentante.value])" @keyup="rutValidation($refs.rutRepresentante.value)">
                      <div class="small-text">Sin puntos y con guión (11111111-1)</div>
                      <div id="rutst02-error" class="formerror" v-if="!rutIsValid">Ingrese un rut Válido</div>
                    </div>
                    <div class="input" ref="nombre">
                      <label>Nombre del representante</label>
                      <input type="text" name="nombrerepresentante_st06" v-model="nombreRepre" ref="nombreRepre" @focus="focus($refs.nombre)" @blur="blur([$refs.nombre, $refs.nombreRepre.value])">
                    </div>
                    <div class="input" ref="apellido">
                      <label>Apellido Paterno del representante</label>
                      <input type="text" name="apellido1representante_st06" v-model="apellidoRepre" ref="apellidoRepre" @focus="focus($refs.apellido)" @blur="blur([$refs.apellido, $refs.apellidoRepre.value])">
                    </div>
                    <div class="input" ref="apellido2">
                      <label>Apellido Materno del representante</label>
                      <input type="text" name="apellido2representante_st06" v-model="apellidoRepre2" ref="apellidoRepre2" @focus="focus($refs.apellido2)" @blur="blur([$refs.apellido2, $refs.apellidoRepre2.value])">
                    </div>
                    <div class="input" ref="tel">
                      <label>Teléfono (fijo)</label>
                      <input type="text" name="telefonorepresentante_st06" v-model="telRepre" ref="telRepre" @focus="focus($refs.tel)" @blur="blur([$refs.tel, $refs.telRepre.value])" @keyup="phoneNumberValidation($refs.telRepre.value)">
                      <div class="small-text">Use el formato +56 0 0000 0000</div>
                      <div id="rutst02-error" class="formerror" v-if="!telIsValid">Ingrese un teléfono Válido</div>
                    </div>
                    <div class="input" ref="cel">
                      <label>Celular</label>
                      <input type="text" name="celularrepresentante_st06" v-model="celRepre" ref="celRepre" @focus="focus($refs.cel)" @blur="blur([$refs.cel, $refs.celRepre.value])" @keyup="phoneNumberValidation($refs.celRepre.value)">
                      <div class="small-text">Use el formato +56 0 0000 0000</div>
                      <div id="rutst02-error" class="formerror" v-if="!telIsValid">Ingrese un celular Válido</div>
                    </div>
                    <div class="input datepicker" ref="fecha">
                      <label>Fecha de nacimiento</label>
                      <!--<input type="text" data-toggle="datepicker" name="fecharepresentante_st06" ref="fechaRepre" @focus="focus($refs.fecha)" @blur="blur([$refs.fecha, $refs.fechaRepre.value])">-->
                        <date-picker name="date" v-model="date" :config="options" class="datepickerVue"
                          ref="fechaRepre"
                          @focus="focus($refs.fecha)" 
                          @blur="blur([$refs.fecha, $refs.fechaRepre.value])">
                          </date-picker>
                    </div>
                    <div class="input u-mb0" ref="email">
                      <label>Email de contacto</label>
                      <input type="text" name="emailrepresentante_st06" v-model="emailRepre" ref="emailRepre" @focus="focus($refs.email)" @blur="blur([$refs.email, $refs.emailRepre.value])" @keyup="emailValidation($refs.emailRepre.value)">
                      <div id="rutst02-error" class="formerror" v-if="!emailIsValid">Ingrese un email Válido</div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="c-form-steps whitebg small" ref="collapse">
            <div class="container u-pt40"><a class="section-minimizar" ref="collapseMin" @click="collapseClick([$refs.collapse, $refs.collapseMin])">{{collapse}}<span></span></a>
              <div class="c-form-steps__content step-data u-pt0">
                <div class="row">
                  <div class="col-md-12 col-lg-6 offset-lg-2">
                    <form action="#" id="step06_2">
                      <h2>Contacto DE cobranza</h2>
                      <p>Será la persona encargada de gestionar el pago de cuotas sociales ante la CChC.</p>
                      <div class="input" ref="rutContacto">
                        <label>RUT del contacto</label>
                        <input type="text" name="rutrepresentante02_st06" v-model="rutContactoCob" ref="rutContactoCob" @focus="focus($refs.rutContacto)" @blur="blur([$refs.rutContacto, $refs.rutContactoCob.value])" @keyup="rutValidation($refs.rutContactoCob.value)">
                        <div class="small-text">Sin puntos y con guión (11111111-1)</div>
                        <div id="rutst02-error" class="formerror" v-if="!rutIsValid">Ingrese un rut Válido</div>
                      </div>
                      <div class="input" ref="nombreContacto">
                        <label>Nombre del contacto</label>
                        <input type="text" name="nombrerepresentante02_st06" v-model="nombreContactoCob" ref="nombreContactoCob" @focus="focus($refs.nombreContacto)" @blur="blur([$refs.nombreContacto, $refs.nombreContactoCob.value])">
                      </div>
                      <div class="input" ref="apellidoContacto">
                        <label>Apellido Paterno del contacto</label>
                        <input type="text" name="apellido1representante02_st06" v-model="apellidoContacto" ref="apellidoContactoCob" @focus="focus($refs.apellidoContacto)" @blur="blur([$refs.apellidoContacto, $refs.apellidoContactoCob.value])">
                      </div>
                      <div class="input" ref="apellidoMaContacto">
                        <label>Apellido Materno del contacto</label>
                        <input type="text" name="apellido2representante02_st06" v-model="apellidoMatContacto" ref="apellidoMaContactoCob" @focus="focus($refs.apellidoMaContacto)" @blur="blur([$refs.apellidoMaContacto, $refs.apellidoMaContactoCob.value])">
                      </div>
                      <div class="input" ref="telContacto">
                        <label>Teléfono (fijo)</label>
                        <input type="text" name="telefonorepresentante02_st06" v-model="telContacto" ref="telContactoCob" @focus="focus($refs.telContacto)" @blur="blur([$refs.telContacto, $refs.telContactoCob.value])"  @keyup="phoneNumberValidation($refs.telContactoCob.value)">
                        <div class="small-text">Use el formato +56 0 0000 0000</div>
                        <div id="rutst02-error" class="formerror" v-if="!telIsValid">Ingrese un teléfono Válido</div>
                      </div>
                      <div class="input" ref="celContacto">
                        <label>Celular</label>
                        <input type="text" name="celularrepresentante02_st06" v-model="celContacto" ref="celContactoCob" @focus="focus($refs.celContacto)" @blur="blur([$refs.celContacto, $refs.celContactoCob.value])"  @keyup="phoneNumberValidation($refs.celContactoCob.value)">
                        <div class="small-text">Use el formato +56 0 0000 0000</div>
                        <div id="rutst02-error" class="formerror" v-if="!telIsValid">Ingrese un celular Válido</div>
                      </div>
                      <div class="input" ref="emailContacto">
                        <label>Email de contacto</label>
                        <input type="text" name="emailrepresentante02_st06" v-model="emailContacto" ref="emailContactoCob" @focus="focus($refs.emailContacto)" @blur="blur([$refs.emailContacto, $refs.emailContactoCob.value])" @keyup="emailValidation($ref.emailContactoCob.value)">
                        <div id="rutst02-error" class="formerror" v-if="!emailIsValid">Ingrese un email Válido</div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="c-form-steps greybg small" ref="collapse2">
            <div class="container u-pt10 u-pb60"><a class="section-minimizar" ref="collapseMin2" @click="collapseClick([$refs.collapse2, $refs.collapseMin2])">{{collapse}}<span></span></a>
              <div class="c-form-steps__content step-data u-pb0">
                <div class="row">
                  <div class="col-md-12 col-lg-6 offset-lg-2">
                    <form action="#" id="step06_3">
                      <h2>REPRESENTANTE LEGAL</h2>
                      <div class="content-repeater" id="repeater">
                        <div class="wrapper-repeater">
                          <div class="input">
                            <label>RUT del representante<i>	(<i class="contador">1</i> de<i class="total">1</i>)</i></label>
                            <input type="text" name="rutrepresentante03_st06">
                            <div class="small-text">Sin puntos y con guión (11111111-1)</div>
                          </div>
                          <div class="input">
                            <label>Nombre del representante<i>	(<i class="contador">1</i> de<i class="total">1</i>)</i></label>
                            <input type="text" name="nombrerepresentante03_st06">
                          </div>
                          <div class="input">
                            <label>Apellido Paterno del representante<i>	(<i class="contador">1</i> de<i class="total">1</i>)</i></label>
                            <input type="text" name="apellido1representante03_st06">
                          </div>
                          <div class="input">
                            <label>Apellido Materno del representante<i>	(<i class="contador">1</i> de<i class="total">1</i>)</i></label>
                            <input type="text" name="apellido2representante03_st06">
                          </div>
                          <div class="input">
                            <label>Teléfono (fijo)<i>	(<i class="contador">1</i> de<i class="total">1</i>)</i></label>
                            <input type="text" name="telefonorepresentante03_st06">
                            <div class="small-text">Use el formato +56 0 0000 0000</div>
                          </div>
                          <div class="input">
                            <label>Celular<i>	(<i class="contador">1</i> de<i class="total">1</i>)</i></label>
                            <input type="text" name="celularrepresentante03_st06">
                            <div class="small-text">Use el formato +56 0 0000 0000</div>
                          </div>
                          <div class="input datepicker">
                            <label>Fecha de nacimiento<i>	(<i class="contador">1</i> de<i class="total">1</i>)</i></label>
                            <input type="text" data-toggle="datepicker" name="fecharepresentante03_st06">
                          </div>
                          <div class="input">
                            <label>Mail de contacto<i>	(<i class="contador">1</i> de<i class="total">1</i>)</i></label>
                            <input type="text" name="emailrepresentante03_st06">
                          </div>
                        </div>
                      </div><a class="input-remover" href="#" style="display:none" id="repeater-rmv-btn">Eliminar socio<span>x</span></a><a class="input-repeater" href="#" id="repeater-add-btn">Añadir otro representante legal<span>+</span></a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="c-form-steps whitebg small" ref="collapse3">
            <div class="container"><a class="section-minimizar" ref="collapseMin3" @click="collapseClick([$refs.collapse3, $refs.collapseMin3])">{{collapse}}<span></span></a>
              <div class="c-form-steps__content step-data">
                <div class="row">
                  <div class="col-md-10 col-lg-10 offset-lg-2">
                    <form action="#" id="step06_4">
                      <h2>selección de comités</h2>
                      <p class="small">Seleccione un comité en el que desee inscribirse, según la actividad principal de su empresa. Apoye su selección en la descripción de cada comité.</p>
                      <div class="row">
                        <div class="col-lg-4">
                          <h3>Infraestructura</h3>
                          <div class="md-checkbox">
                            <input id="i1" name="comites" type="radio" v-model="contratista">
                            <label for="i1"><span class="label-input">Contratistas Generales</span><span aria-label=""  @click="show('contratistas-generales')" data-microtip-position="right" role="tooltip02">?</span></label>
                          </div>
                          <div class="md-checkbox">
                            <input id="i2" name="comites" type="radio" v-model="obras">
                            <label for="i2"><span class="label-input">Obras Infraestructura Pública</span><span aria-label="" @click="show('obras-infra')" data-microtip-position="right" role="tooltip02">?</span></label>
                          </div>
                          <div class="md-checkbox">
                            <input id="i3" name="comites" type="radio" v-model="concesiones">
                            <label for="i3"><span class="label-input">Concesiones</span><span aria-label="" @click="show('concesiones')" data-microtip-position="right" role="tooltip02">?</span></label>
                          </div>
                        </div>
                        <div class="col-lg-3">
                          <h3>Vivienda</h3>
                          <div class="md-checkbox">
                            <input id="i4" name="comites" type="radio" v-model="inmobiliario">
                            <label for="i4"><span class="label-input">Inmobiliario</span><span aria-label="" @click="show('inmobiliario')" data-microtip-position="right" role="tooltip02">?</span></label>
                          </div>
                          <div class="md-checkbox">
                            <input id="i5" name="comites" type="radio" v-model="vivienda">
                            <label for="i5"><span class="label-input">Vivienda</span><span @click="show('vivienda')" aria-label="" data-microtip-position="right" role="tooltip02">?</span></label>
                          </div>
                        </div>
                        <div class="col-lg-4">
                          <h3>Suministros</h3>
                          <div class="md-checkbox">
                            <input id="i6" name="comites" type="radio" v-model="proveedores">
                            <label for="i6"><span class="label-input">Proveedores</span><span @click="show('proveedores')" aria-label="" data-microtip-position="right" role="tooltip02">?</span></label>
                          </div>
                          <div class="md-checkbox">
                            <input id="i7" name="comites" type="radio" v-model="industriales">
                            <label for="i7"><span class="label-input">Industriales</span><span @click="show('industriales')" aria-label="" data-microtip-position="right" role="tooltip02">?</span></label>
                          </div>
                          <div class="md-checkbox">
                            <input id="i8" name="comites" type="radio" v-model="especialidades">
                            <label for="i8"><span class="label-input">Especialidades</span><span @click="show('especialidades')" aria-label="" data-microtip-position="right" role="tooltip02">?</span></label>
                          </div>
                        </div>
                      </div>
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
                  <div class="col-md-10 col-lg-10 offset-lg-2">
                    <form action="#" id="step06_4">
                      <button class="link prev btn-blue u-mt50 u-mr30 small" href="#"><i class="fa fa-angle-left"></i>Anterior</button>
                      <button class="link btn-red u-mt50 big" id="submitStep06">Guardar y continuar<i class="fa fa-angle-right"></i></button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Modales para comites -->
      <modal name="contratistas-generales" :height="400">
          <a class="close-modal-text" @click="$modal.hide('contratistas-generales')">X</a>
          <p>Agrupa empresas de ingeniería y de construcción que evalúan, estudian, diseñan y ejecutan obras de infraestructura 
             pública y privada, de edificación no habitacional, y obras industriales en general. Su labor se orienta a búsqueda de 
             soluciones para el sector, especialmente en lo que se refiere a las relaciones contractuales de sus socios con mandantes,
             subcontratistas, proveedores y trabajadores, buscando que imperen normas éticas y de equidad que aseguren la libre 
             competencia. El Comité investiga las tendencias de inversiones sectoriales y entrega información de interés para 
             orientar a las empresas del sector, principalmente en el logro de la calidad de las obras, cumplimientos de los 
             plazos y de la seguridad de sus trabajadores.</p>
      </modal>

      <modal name="obras-infra" :height="400">
          <a class="close-modal-text" @click="$modal.hide('obras-infra')">X</a>
          <p>Agrupa a empresas de construcción, de ingeniería y de consultoría relacionadas con los contratos de obras de 
            infraestructura de uso público (carreteras, puentes, obras hidráulicas, arquitectura, concesiones, obras sanitarias, 
            ferroviarias, etc). Su labor está orientada al estudio de las inversiones proyectadas por el MOP y otros mandantes de 
            infraestructura de uso público. Analiza las condiciones generales de contratación buscando relaciones contractuales que 
            favorezcan la equidad, transparencia y la incorporación de innovación tecnológica en los procesos constructivos. Mantiene 
            una permanente relación con los diferentes mandantes de infraestructura de uso público (MOP, Empresas Sanitarias, 
            Metro S.A., entre otras).</p>
      </modal>

      <modal name="concesiones" :height="400">
          <a class="close-modal-text" @click="$modal.hide('concesiones')">X</a>
          <p>Agrupa a las empresas concesionarias de obras de infraestructura de uso público y de servicios, con el 
            objeto de representar los intereses de las grandes, medianas y pequeñas concesionarias que operan en este 
            ámbito. Sus principales líneas de acción contemplan el perfeccionamiento de la institucionalidad de las 
            concesiones y la ampliación de su ámbito de aplicación; la participación en el debate formativo que afecta a 
            este sector; procurar agilidad en la tramitación de los decretos y en el cumplimiento de los calendarios de 
            licitaciones, así como el desarrollo de otras iniciativas que permitan posicionar esta industria e incrementar la 
            inversión en el ámbito de la infraestructura pública.</p>
      </modal>

      <modal name="inmobiliario" :height="400">
          <a class="close-modal-text" @click="$modal.hide('inmobiliario')">X</a>
          <p>Agrupa a empresas inmobiliarias, constructoras, instituciones financieras, corredores de propiedades, 
            arquitectos y otros profesionales relacionados con el mercado Inmobiliario. Tiene por finalidad estudiar la 
            oferta y demanda de bienes raíces, mantener el flujo de información sobre necesidades, requerimientos y 
            condiciones del mercado inmobiliario, como, asimismo, el análisis de la normativa referente al desarrollo urbano.</p>
      </modal>

      <modal name="vivienda" :height="400">
          <a class="close-modal-text" @click="$modal.hide('vivienda')">X</a>
          <p>Agrupa a empresas que se dedican a la construcción y venta de viviendas con subsidio otorgados por el Ministerio 
            de Vivienda y Urbanismo (MINVU) y otras instituciones públicas o privadas. Le corresponde el tratamiento de 
            todas las materias vinculadas con la vivienda subsidiada, especialmente: materias relacionadas con la actividad 
            del MINVU, incluida la vialidad urbana; subsidio habitacional; materias relacionadas con otros programas, tales como 
            lotes con servicio del Ministerio del Interior, obras de construcción de viviendas o de urbanización de iniciativa 
            municipal, etc.</p>
      </modal>

      <modal name="proveedores" :height="400">
          <a class="close-modal-text" @click="$modal.hide('proveedores')">X</a>
          <p>Agrupa a empresas distribuidoras y proveedoras de materiales de construcción del país. Desarrolla una labor 
            de promoción, difusión e intercambio de información, y realiza estudios sobre el mercado de la demanda de productos.</p>
      </modal>

      <modal name="industriales" :height="400">
          <a class="close-modal-text" @click="$modal.hide('industriales')">X</a>
          <p>Agrupa a empresas industriales, en su mayoría dedicadas a la producción y comercialización de bienes y servicios, 
            cuyo principal destinatario es el sector de la construcción. Constituye la instancia para canalizar las inquietudes 
            del sector industrial, obtener información respecto de la coyuntura económica, laboral, de seguridad industrial, 
            medio ambiental y toda otra materia que de alguna forma pueda influir en el quehacer de la industria de la construcción 
            en nuestro país.</p>
      </modal>

      <modal name="especialidades" :height="400">
          <a class="close-modal-text" @click="$modal.hide('especialidades')">X</a>
          <p>Agrupa a empresas y profesionales especializados en los diferentes procesos constructivos, 
            principalmente en las áreas de proyectos, confección e instalación. Su labor fundamental es promover 
            el uso de nuevas tecnologías, equipamiento y servicios de la más alta calidad.</p>
      </modal>
</main>
      </div>
</template>

<script>
import Cabecera from './../../components/Cabecera';
import StepNumbers from './../../components/StepNumbers';
import { mapState, mapMutations } from 'vuex';
//Vue Datepicker
import datePicker from 'vue-bootstrap-datetimepicker';
import 'bootstrap/dist/css/bootstrap.css';
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';

export default {
  name: 'StepFour',
  components: {
    Cabecera,
    StepNumbers,
    datePicker,
},
  data () {
      return {
      data: [{}],
      //DatePicker data
        date: null,
        options: {
          format: 'DD/MM/YYYY',
          useCurrent: false,
          showClear: true,
          showClose: true,
          toolbarPlacement: 'bottom',
        },
      //Data form representante
      rutRepre: '',
      nombreRepre: '',
      apellidoRepre: '',
      apellidoRepre2: '',
      telRepre: '',
      celRepre: '',
      emailRepre: '',
      //Data form contacto de cobranza
      rutContactoCob: '',
      nombreContactoCob: '',
      apellidoContacto: '',
      apellidoMatContacto: '',
      telContacto: '',
      celContacto: '',
      emailContacto: '',
      //Data form comites
      contratista: null,
      obras: null,
      concesiones: null,
      inmobiliario: null,
      vivienda: null,
      proveedores: null,
      industriales: null,
      especialidades: null

      }
    },
    methods:{
      ...mapMutations(['focus', 'blur', 'collapseClick', 'rutValidation', 'phoneNumberValidation', 'emailValidation']),

      save() {
        this.data.push({
        
      });
      console.log(this.dataPatrocinantes);

      },

      saveContinue() {
        alert("Guarda y continua");
      },

      show (modalName) {
            this.$modal.show(modalName);
      },

      hide (modalName) {
            this.$modal.hide(modalName);
      }
    },
    computed: {
      ...mapState(['collapse', 'telIsValid', 'emailIsValid','rutIsValid'])
    },

    
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
