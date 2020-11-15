<template>
	<div>
		<Cabecera></Cabecera>
		<main role="main">
	      <div class="c-steps-numbers">
	        <div class="container">
	          <div class="c-steps-numbers__item active"><span>1</span>
	            <p>Información y <br>antecedentes</p>
	          </div>
	          <div class="c-steps-numbers__item"><span>2</span>
	            <p>Patrocinios</p>
	          </div>
	          <div class="c-steps-numbers__item"><span>3</span>
	            <p>Declaraciones <br>y compromisos</p>
	          </div>
	        </div>
	      </div>
	      <div class="c-form-steps">
	        <div class="c-form-steps__sections" data-step="01">
	          <div class="container">
	            <div class="c-form-steps__content step-data">
	              <div class="row">
	                <div class="col-md-12 col-lg-6 offset-lg-2">
	                  <h2>Información de la persona</h2>
	                  <p>Ingrese los datos de la persona que se desea postular para ser socia de la Cámara Chilena de la Construcción.<br><br>Los antecedentes del postulante serán los mismos datos que se utilizarán para representante ante la CChC y contacto de cobranza.</p>
	                  <form action="#" id="step03_1">
	                    <div class="input" ref="name">
	                      <label>Nombre</label>
	                      <input
	                        type="text"
	                        name="nombre_st03"
	                        v-model="name"
	                        ref="personName"
	                        @focus="focus($refs.name)"
	                        @blur="blur([$refs.name, $refs.personName.value])"
	                        @keyup="nameValidation()"
	                      />
	                      <div
	                        class="errorlogin"
	                        v-if="nameIsValid === false"
	                      >
	                        Ingrese un nombre
	                      </div>
	                    </div>
	                    <div class="input" ref="firstLastname">
	                      <label>Apellido Paterno</label>
	                      <input 
	                      	type="text" 
	                      	name="apelllidopaterno_st03"
	                      	v-model="fatherLastName"
	                      	ref="fatherLastName"
	                      	@focus="focus($refs.firstLastname)"
	                        @blur="blur([$refs.firstLastname, $refs.fatherLastName.value])"
	                        @keyup="firstLastNameValidation()"
	                      >
	                      <div
	                        class="errorlogin"
	                        v-if="firstLastnameIsValid === false"
	                      >
	                        Ingrese un nombre
	                      </div>
	                    </div>
	                    <div class="input" ref="secondLastName">
	                      <label>Apellido Materno</label>
	                      <input type="text"
	                      	name="apelllidomaterno_st03"
	                      	v-model="motherLastName"
	                      	ref="motherLastName"
	                      	@focus="focus($refs.secondLastName)"
	                        @blur="blur([$refs.secondLastName, $refs.fatherLastName.value])"
	                        @keyup="secondLastNameValidation()">
	                        <div
		                    	class="errorlogin"
		                        v-if="secondLastNameIsValid === false"
		                    >
	                        	Ingrese un apellido
	                      	</div>
	                    </div>
	                    <div class="input" ref="rut">
	                      <label>RUT de la persona</label>
	                      <input type="text" 
	                      	name="rutempresa_st03"
	                      	v-model="rut"
	                      	ref="rutInput"
	                      	@focus="focus($refs.rut)"
	                        @blur="blur([$refs.rut, $refs.rutInput.value]), 
	                        	getNroSolicitud($refs.rutInput.value)"
	                        @keyup="rutValidation($refs.rutInput.value)">
	                      <div class="small-text">Sin puntos y con guión (11111111-1)</div>
	                      <div
	                        id="loginrut-error"
	                        class="errorlogin"
	                        v-if="rutIsValid === false"
	                      >
	                        Ingrese un rut Válido
	                      </div>
	                    </div>
	                    <div class="input " ref="date">
	                      <label>Fecha de Nacimiento</label>
	                      <date-picker v-model="date" ref="inputDatePicker"
	                        :lang="lang"
	                        @focus="dateFocus($refs.date)"
	                        @change="dateValidation($refs.date)"
	                        :disabled-date="(date) => date >= new Date()"
	                        valueType="format">
	                         <i slot="icon-clear" class="mx-icon-clear">
	                          <font-awesome-icon :icon="['far', 'calendar']" />
	                        </i> 
	                        <i slot="icon-calendar" class="mx-icon-calendar"
	                          @click="dateValidation($refs.date)">
	                          <font-awesome-icon :icon="['far', 'calendar']" />
	                        </i>  

	                      </date-picker>
	                      <div
	                        id="giro_st03-error"
	                        class="errorlogin"
	                        v-if="dateIsValid === false"
	                      >
	                        Ingrese una fecha
	                      </div>
	                    </div>
	                    <div class="input">
	                      <div class="input-select">
	                        <select
	                          name="profesion_st03"
	                          @input="$event = setProfession($event.target.value)"
	                          :value="selectedProfession"
	                          @change="professionValidation()"
	                        >
	                          <option value="" selected disabled hidden>
	                            Profesión
	                          </option>
	                          <option
	                            v-for="(profession, key) in professions"
	                            :value="profession.profession_id"
	                            :key="key"
	                          >
	                            {{ profession.profession }}
	                          </option>
	                        </select>
	                      </div>
	                    </div>
	                    <div class="input">
	                      <div class="input-select">
	                        <select name="especialidad_st03">
	                          <option value="default">Especialidad</option>
	                        </select>
	                      </div>
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
	            		{{collapse}}<span></span>
	            	</a>
	              <div class="row">
	                <div class="col-md-12 col-lg-6 offset-lg-2">
	                  <h2>Antecedentes</h2>
	                  <p>A continuación ingrese los documentos que acreditan su información. Los documentos requeridos son los siguientes:</p>
	                  <ul>
	                    <li>Memoria o CV de la empresa</li>
	                    <li>Dependientes de la selección de "Tipo de Sociedad" en fila 14</li>
	                  </ul>
	                  <form class="dropzone dropzone-custom custom-drop" action="/file-upload"></form>
	                </div>
	              </div>
	            </div>
	          </div>
	          <div class="c-form-steps small">
	            <div class="container"><a class="section-minimizar" href="#">EXPANDIR<span></span></a>
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
	                      <div class="input">
	                        <label>Punto de Referencia</label>
	                        <input type="text" name="puntodereferencia_st03">
	                      </div>
	                    </form>
	                  </div>
	                </div>
	              </div>
	            </div>
	          </div>
	          <div class="c-form-steps whitebg small">
	            <div class="container"><a class="section-minimizar" href="#" data-formulario="4">EXPANDIR<span></span></a>
	              <div class="c-form-steps__content step-data">
	                <div class="row">
	                  <div class="col-md-10 col-lg-10 offset-lg-2">
	                    <form action="#" id="step03_3">
	                      <h2>selección de comités</h2>
	                      <p class="small">Seleccione un comité en el que desee inscribirse, según su experiencia profesional. Apoye su selección en la descripción de cada comité.</p>
	                      <div class="row">
	                        <div class="col-lg-4">
	                          <h3>Infraestructura</h3>
	                          <div class="md-checkbox">
	                            <input id="i1" name="comites" type="radio">
	                            <label for="i1"><span class="label-input">Contratistas Generales</span><span aria-label="Agrupa empresas de ingeniería y de construcción que evalúan, estudian, diseñan y ejecutan obras de infraestructura pública y privada, de edificación no habitacional, y obras industriales en general. Su labor se orienta a búsqueda de soluciones para el sector, especialmente en lo que se refiere a las relaciones contractuales de sus socios con mandantes, subcontratistas, proveedores y trabajadores, buscando que imperen normas éticas y de equidad que aseguren la libre competencia. El Comité investiga las tendencias de inversiones sectoriales y entrega información de interés para orientar a las empresas del sector, principalmente en el logro de la calidad de las obras, cumplimientos de los plazos y de la seguridad de sus trabajadores." data-microtip-position="right" role="tooltip02">?</span></label>
	                          </div>
	                          <div class="md-checkbox">
	                            <input id="i2" name="comites" type="radio">
	                            <label for="i2"><span class="label-input">Obras Infraestructura Pública</span><span aria-label="Agrupa a empresas de construcción, de ingeniería y de consultoría relacionadas con los contratos de obras de infraestructura de uso público (carreteras, puentes, obras hidráulicas, arquitectura, concesiones, obras sanitarias, ferroviarias, etc). Su labor está orientada al estudio de las inversiones proyectadas por el MOP y otros mandantes de infraestructura de uso público. Analiza las condiciones generales de contratación buscando relaciones contractuales que favorezcan la equidad, transparencia y la incorporación de innovación tecnológica en los procesos constructivos. Mantiene una permanente relación con los diferentes mandantes de infraestructura de uso público (MOP, Empresas Sanitarias, Metro S.A., entre otras)." data-microtip-position="right" role="tooltip02">?</span></label>
	                          </div>
	                          <div class="md-checkbox">
	                            <input id="i3" name="comites" type="radio">
	                            <label for="i3"><span class="label-input">Concesiones</span><span aria-label="Agrupa a las empresas concesionarias de obras de infraestructura de uso público y de servicios, con el objeto de representar los intereses de las grandes, medianas y pequeñas concesionarias que operan en este ámbito. Sus principales líneas de acción contemplan el perfeccionamiento de la institucionalidad de las concesiones y la ampliación de su ámbito de aplicación; la participación en el debate formativo que afecta a este sector; procurar agilidad en la tramitación de los decretos y en el cumplimiento de los calendarios de licitaciones, así como el desarrollo de otras iniciativas que permitan posicionar esta industria e incrementar la inversión en el ámbito de la infraestructura pública." data-microtip-position="right" role="tooltip02">?</span></label>
	                          </div>
	                        </div>
	                        <div class="col-lg-3">
	                          <h3>Vivienda</h3>
	                          <div class="md-checkbox">
	                            <input id="i4" name="comites" type="radio">
	                            <label for="i4"><span class="label-input">Inmobiliario</span><span aria-label="Agrupa a empresas inmobiliarias, constructoras, instituciones financieras, corredores de propiedades, arquitectos y otros profesionales relacionados con el mercado Inmobiliario. Tiene por finalidad estudiar la oferta y demanda de bienes raíces, mantener el flujo de información sobre necesidades, requerimientos y condiciones del mercado inmobiliario, como, asimismo, el análisis de la normativa referente al desarrollo urbano." data-microtip-position="right" role="tooltip02">?</span></label>
	                          </div>
	                          <div class="md-checkbox">
	                            <input id="i5" name="comites" type="radio">
	                            <label for="i5"><span class="label-input">Vivienda</span><span aria-label="Agrupa a empresas que se dedican a la construcción y venta de viviendas con subsidio otorgados por el Ministerio de Vivienda y Urbanismo (MINVU) y otras instituciones públicas o privadas. Le corresponde el tratamiento de todas las materias vinculadas con la vivienda subsidiada, especialmente: materias relacionadas con la actividad del MINVU, incluida la vialidad urbana; subsidio habitacional; materias relacionadas con otros programas, tales como lotes con servicio del Ministerio del Interior, obras de construcción de viviendas o de urbanización de iniciativa municipal, etc." data-microtip-position="right" role="tooltip02">?</span></label>
	                          </div>
	                        </div>
	                        <div class="col-lg-4">
	                          <h3>Suministros</h3>
	                          <div class="md-checkbox">
	                            <input id="i6" name="comites" type="radio">
	                            <label for="i6"><span class="label-input">Proveedores</span><span aria-label="Agrupa a empresas distribuidoras y proveedoras de materiales de construcción del país. Desarrolla una labor de promoción, difusión e intercambio de información, y realiza estudios sobre el mercado de la demanda de productos." data-microtip-position="right" role="tooltip02">?</span></label>
	                          </div>
	                          <div class="md-checkbox">
	                            <input id="i7" name="comites" type="radio">
	                            <label for="i7"><span class="label-input">Industriales</span><span aria-label="Agrupa a empresas industriales, en su mayoría dedicadas a la producción y comercialización de bienes y servicios, cuyo principal destinatario es el sector de la construcción. Constituye la instancia para canalizar las inquietudes del sector industrial, obtener información respecto de la coyuntura económica, laboral, de seguridad industrial, medio ambiental y toda otra materia que de alguna forma pueda influir en el quehacer de la industria de la construcción en nuestro país." data-microtip-position="right" role="tooltip02">?</span></label>
	                          </div>
	                          <div class="md-checkbox">
	                            <input id="i8" name="comites" type="radio">
	                            <label for="i8"><span class="label-input">Especialidades</span><span aria-label="Agrupa a empresas y profesionales especializados en los diferentes procesos constructivos, principalmente en las áreas de proyectos, confección e instalación. Su labor fundamental es promover el uso de nuevas tecnologías, equipamiento y servicios de la más alta calidad." data-microtip-position="right" role="tooltip02">?</span></label>
	                          </div>
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
	                  <div class="col-md-12 col-lg-6 offset-lg-2">
	                    <form action="#" id="step03_3"><a class="link prev btn-blue u-mt20 u-mr30 small" href="#">Guardar</a><a class="link btn-red u-mt50 big" href="#" id="submitStep05">Guardar y continuar<i class="fa fa-angle-right"></i></a></form>
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
	import Cabecera from "@/components/Cabecera.vue";
	import { mapState, mapMutations, mapActions } from 'vuex';

	import DatePicker from 'vue2-datepicker';
	import 'vue2-datepicker/index.css';

	//Vue Dropzone
	import vue2Dropzone from "vue2-dropzone";
	import "vue2-dropzone/dist/vue2Dropzone.min.css";

	import mixin from "@/mixins/mixin.js";

	import axios from 'axios'
	import VueAxios from 'vue-axios'

	export default {
		name: "FirstStep",
		components: {
			Cabecera,
			DatePicker,
    		vueDropzone: vue2Dropzone,
		},
		data() {
			return {
				name: '',
				fatherLastName: '',
				motherLastName: '',
				rut: '',
				date: '',
				lang: {
			        formatLocale: {
			          firstDayOfWeek: 0,
			          weekdaysMin: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
			        },

			        months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
			    },
				nameIsValid: '',
				firstLastnameIsValid: '',
				secondLastNameIsValid: '',
				dateIsValid: '',

				professionIsValid: '',

				nroSolicitud: '',
				getfirstStep: '',
			}
		},

		methods: {
			...mapMutations(['focus', 'blur', 'rutValidation', 
				'collapseClick', 'dateFocus', 'setProfession',]),
			...mapActions(['getProfession']),

			nameValidation(){

			},

			firstLastNameValidation() {

			},

			secondLastNameValidation() {

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

		    professionValidation() {
		      if (this.selectedProfession == "") {
		        this.professionIsValid = false;
		      } else {
		        this.professionIsValid = true;
		      }
		    },

		    getNroSolicitud(rut) {
		    	axios.get(this.urlBase+'/buscarPostulante/' + rut).then((response) => {
		        this.datosBasicos = response.data;
		        console.log(this.datosBasicos);
		        this.nroSolicitud = this.datosBasicos[0].nro_solicitud;
		        this.nroSolicitudObj(this.nroSolicitud);
		        console.log(this.nroSolicitud);
		      setTimeout(this.getFirstStepRequest(this.nroSolicitud), 3000);
		      }).catch(function (error) {
		      console.log("AXIOS ERROR: ", error);
		      });
		    },

		    getFirstStepRequest(number) {
		      console.log(number)
		      let requestNumber = number;
		      axios.get(this.urlBase + '/paso1/' + requestNumber).then((response) => {
		        let firstStepSaved = response.data;
		        console.log(firstStepSaved);
		        console.log(firstStepSaved[0].object);
		        this.getfirstStep = JSON.parse(firstStepSaved[0].object);
		        console.log(this.getStepOne);
		      }).catch(function (error) {
		        console.log("AXIOS ERROR: ", error);
		      });
		    }
		},

		computed: {
			...mapState(['rutIsValid', 'collapse', 'selectedProfession', 'professions'])
		},

		created: function(){
			this.getProfession();
		}
	}
</script>
<style>
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
</style>