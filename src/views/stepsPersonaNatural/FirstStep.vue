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
	                        @blur="blur([$refs.name, $refs.personName.value]), 
	                        	getGlobalName($refs.personName.value)"
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
	                        @blur="blur([$refs.firstLastname, $refs.fatherLastName.value]),
	                        	getGlobalLastname($refs.fatherLastName.value)"
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
	                        @blur="blur([$refs.secondLastName, $refs.motherLastName.value])"
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
	                        <select
	                          name="especialidad_st03"
	                          @input="$event = setSpecialty($event.target.value)"
	                          :value="selectedSpecialty"
	                          @change="specialtyValidation()"
	                        >
	                          <option value="" selected disabled hidden>
	                            Especialidad
	                          </option>
	                          <option
	                            v-for="(specialty, key) in specialties"
	                            :value="specialty.especialidad_id"
	                            :key="key"
	                          >
	                            {{ specialty.especialidad }}
	                          </option>
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
	                    <li>
	                    	Fotocopia de Cédula de Identidad por ambos lados.
						</li>
						<li>
							<b>Tener alguna profesión relacionada con la industria de la construcción, según lo establece la Ley General de Urbanismo y Construcciones, es decir: arquitectos, ingenieros civiles, constructores civiles e ingenieros en construcción.</b>
						</li>
						<li>
							Currículum Profesional que acredite experiencia en el rubro de la construcción.
						</li>
						<li>
							Copia simple de certificado de título.
						</li>
						<li>
							<b>En caso de tener otras profesiones, acreditar experiencia laboral en la industria de la construcción.</b>
						</li>
						<li>
							Currículum Profesional que acredite experiencia en el rubro de la construcción.
						</li>
						<li>
							Copia simple de certificado de título.
						</li>
						<li>
							<b>Que el ejercicio de la profesión lo realice en forma independiente, sin trabajadores a su cargo.</b>
						</li>
						<li>
							<b>Que no sea accionista mayoritario o socio con más del 50% de los derechos sobre el capital social de alguna empresa vinculada directamente a la industria de la construcción que NO sea socia.</b>
						</li>
	                  </ul>
	                  <div class="input">
	                    <vue-dropzone
	                      ref="vueDropzonePN"
	                      :useCustomSlot="true"
	                      id="dropzonePN"
	                      @vdropzone-upload-progress="uploadProgress"
	                      :options="dropzoneOptionsPN"
	                      @vdropzone-file-added="fileAddedPN"
	                      @vdropzone-sending-multiple="sendingFiles"
	                      @vdropzone-success-multiple="successPN"
	                      @vdropzone-removed-file="removeFilePN"
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
	          <div class="c-form-steps small font" ref="collapseAddress">
	            <div class="container">
	            	<a class="section-minimizar"
		            	ref="collapseCommercial"
	               		@click="collapseClick([$refs.collapseAddress, $refs.collapseCommercial])">
               			{{collapse}}<span></span>
               		</a>
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
	                          name="callecomercial_st03"
	                          v-model="street"
	                          ref="streetInput"
	                          @focus="focus($refs.street)"
	                          @blur="blur([$refs.street, $refs.streetInput.value])"
	                          @keyup="streetValidation()"
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
	                          name="numerocomercial_st03"
	                          v-model="streetNumber"
	                          ref="numberInput"
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
	                          name="oficinacomercial_st03"
	                          v-model="office"
	                          ref="officeInput"
	                          @focus="focus($refs.office)"
	                          @blur="blur([$refs.office, $refs.officeInput.value])"
	                          @keyup="officeValidation()"
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
	                        <label>Punto de Referencia</label>
	                        <input
	                          type="text"
	                          name="oficinacomercial_st03"
	                          v-model="reference"
	                          ref="referenceInput"
	                          @focus="focus($refs.reference)"
	                          @blur="blur([$refs.reference, $refs.referenceInput.value])"
	                          @keyup="referenceValidation()"
	                        />
	                        <div
	                          id="email2st02-error"
	                          class="formerror"
	                          v-if="referenceIsValid === false"
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
	          <div class="c-form-steps whitebg small" ref="committeeSelection">
	            <div class="container">
	            	<a class="section-minimizar" data-formulario="4"
	            	ref="committee"
	                @click="collapseClick([$refs.committeeSelection, $refs.committee])">
	            		{{collapse}}<span></span>
	            	</a>
	              <div class="c-form-steps__content step-data">
	                <div class="row">
	                  <div class="col-md-10 col-lg-10 offset-lg-2">
	                    <form action="#" id="step03_3">
	                      <h2>selección de comités</h2>
	                      <p class="small">Seleccione un comité en el que desee inscribirse, según su experiencia profesional. Apoye su selección en la descripción de cada comité.</p>
	                      <!-- <div class="row">
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
	                      </div> -->

	                      <div class="row">
	                        <div class="col-lg-4">
	                          <h3>Infraestructura</h3>
	                          <div class="md-checkbox">
	                            <input id="i1" name="comites" type="radio" value="true" v-model="dataComites.contratista">
	                            <label for="i1"><span class="label-input">Contratistas Generales</span><span aria-label=""  @click="show('contratistas-generales')" data-microtip-position="right" role="tooltip02">?</span></label>
	                          </div>
	                          <div class="md-checkbox">
	                            <input id="i2" name="comites" type="radio" value="true"  v-model="dataComites.obras">
	                            <label for="i2"><span class="label-input">Obras Infraestructura Pública</span><span aria-label="" @click="show('obras-infra')" data-microtip-position="right" role="tooltip02">?</span></label>
	                          </div>
	                          <div class="md-checkbox">
	                            <input id="i3" name="comites" type="radio" value="true" v-model="dataComites.concesiones">
	                            <label for="i3"><span class="label-input">Concesiones</span><span aria-label="" @click="show('concesiones')" data-microtip-position="right" role="tooltip02">?</span></label>
	                          </div>
	                        </div>
	                        <div class="col-lg-3">
	                          <h3>Vivienda</h3>
	                          <div class="md-checkbox">
	                            <input id="i4" name="comites" type="radio" value="true" v-model="dataComites.inmobiliario">
	                            <label for="i4"><span class="label-input">Inmobiliario</span><span aria-label="" @click="show('inmobiliario')" data-microtip-position="right" role="tooltip02">?</span></label>
	                          </div>
	                          <div class="md-checkbox">
	                            <input id="i5" name="comites" type="radio" value="true" v-model="dataComites.vivienda">
	                            <label for="i5"><span class="label-input">Vivienda</span><span @click="show('vivienda')" aria-label="" data-microtip-position="right" role="tooltip02">?</span></label>
	                          </div>
	                        </div>
	                        <div class="col-lg-4">
	                          <h3>Suministros</h3>
	                          <div class="md-checkbox">
	                            <input id="i6" name="comites" type="radio" value="true" v-model="dataComites.proveedores">
	                            <label for="i6"><span class="label-input">Proveedores</span><span @click="show('proveedores')" aria-label="" data-microtip-position="right" role="tooltip02">?</span></label>
	                          </div>
	                          <div class="md-checkbox">
	                            <input id="i7" name="comites" type="radio" value="true" v-model="dataComites.industriales">
	                            <label for="i7"><span class="label-input">Industriales</span><span @click="show('industriales')" aria-label="" data-microtip-position="right" role="tooltip02">?</span></label>
	                          </div>
	                          <div class="md-checkbox">
	                            <input id="i8" name="comites" type="radio" value="true" v-model="dataComites.especialidades">
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
	          <div class="c-form-drag whitebg">
	            <div class="container">
	              <div class="c-form-steps__content">
	                <div class="row">
	                  <div class="col-md-12 col-lg-6 offset-lg-2">
	                    <form action="#" id="step03_3">
	                    	<button class="link prev btn-blue u-mt20 u-mr30 small"
	                    	type="button"
                        	@click="saveFirstStep()">
	                    		Guardar
	                    	</button>
	                    	<button class="link btn-red u-mt50 big" id="submitStep05"
	                    	type="button"
	                    	@click="firstStepValidation()">
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
		mixins: [mixin],
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

			    //Vue Dropzone data
			    tempAttachments: [],
			    attachments: [],
			    dropzoneOptionsPN: {
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
			        dictFileTooBig: "El archivo es muy grande ({{filesize}}MiB). Máximo: {{maxFilesize}}MiB.",
			        acceptedFiles: '.jpg, .jpeg, .xls, .xlsx, .pdf, .doc, .docx',
			    },

			    street: '',
			    streetNumber: '',
				office: '',
				reference: '',

				dataComites: {
			        contratista: false,
			        obras: false,
			        concesiones: false,
			        inmobiliario: false,
			        vivienda: false,
			        proveedores: false,
			        industriales: false,
			        especialidades: false
			    },

				nameIsValid: '',
				firstLastnameIsValid: '',
				secondLastNameIsValid: '',
				dateIsValid: '',

				professionIsValid: '',
				specialtyIsValid: '',
				dropzoneIsValid: '',
				regionIsValid: '',
				provinceIsValid: '',
				communeIsValid: '',
				streetIsValid: '',
				streetNumberIsValid: '',
				referenceIsValid: '',
				officeIsValid: '',
				formIsValid: '',
				requestNumberValue: '',
				datosBasicos: '',
				getfirstStep: '',
				firstStepObject: [],
			}
		},

		methods: {
			...mapMutations(['focus', 'blur', 'dateBlur', 'rutValidation', 
				'collapseClick', 'dateFocus', 'setProfession', 'setSpecialty', 'setVueDropzoneFilePN',
				'requestNumberObject', 'setRegion', 'setProvince', 'setCommune', 'saveCompletedFormPN',
				'setRutIsValid', 'setSecondStepValue', 'setFirstStepValue', 'getRutGlobal', 
				'getGlobalName', 'getGlobalLastname']),
			...mapActions(['getProfession', 'getSpecialty', 'backgroundUploadPN', 
				'getRegion', 'getProvince', 'getCommune']),

			nameValidation(){
				if (this.name == "") {
					this.nameIsValid = false;
				} else {
					this.nameIsValid = true;
				}
			},

			firstLastNameValidation() {
				if (this.fatherLastName == "") {
					this.firstLastnameIsValid = false;
				} else {
					this.firstLastnameIsValid = true;
				}
			},

			secondLastNameValidation() {
				if (this.motherLastName == "") {
					this.secondLastNameIsValid = false;
				} else {
					this.secondLastNameIsValid = true;
				}
			},

			dateValidation(refs) {
		      if (this.date == "" || this.date == null) {
		        console.log("test me");
		        this.dateIsValid = false;
		        //this.dateBlur(refs);
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

		    specialtyValidation() {
		      if (this.selectedSpecialty == "") {
		        this.specialtyIsValid = false;
		      } else {
		        this.specialtyIsValid = true;
		      }
		    },

		    dropZoneValidation() {
		      if (this.vueDropzoneFilePN == "") {
		        this.dropzoneIsValid = false;
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

		    streetNumberValidation() {
		      if (this.streetNumber == "") {
		        this.streetNumberIsValid = false;
		      } else {
		        this.streetNumberIsValid = true;
		      }
		    },

		    officeValidation() {
		      if (this.office == "") {
		        this.officeIsValid = false;
		      } else {
		        this.officeIsValid = true;
		      }
		    },

		    referenceValidation() {
		      if (this.reference == "") {
		        this.referenceIsValid = false;
		      } else {
		        this.referenceIsValid = true;
		      }
		    },

		    comiteValue() {
		      if (this.dataComites.contratista !== false 
		          || this.dataComites.obras !== false 
		          || this.dataComites.concesiones !== false
		          || this.dataComites.inmobiliario !== false 
		          || this.dataComites.vivienda !== false 
		          || this.dataComites.proveedores !== false
		          || this.dataComites.industriales !== false
		          || this.dataComites.especialidades !== false) {
		              return true;
		          } else {
		            return false;
		          }
		    },

		    show (modalName) {
		        this.$modal.show(modalName);
		    },

		    hide (modalName) {
		        this.$modal.hide(modalName);
		    },

		    getNroSolicitud(rut) {
		    	axios.get(this.URL + '/buscarPostulante/' + rut).then((response) => {
		        this.datosBasicos = response.data;
		        console.log(this.datosBasicos);
		        console.log(this.datosBasicos[0].nro_solicitud);
		        this.requestNumberValue = this.datosBasicos[0].nro_solicitud;
		        this.requestNumberObject(this.requestNumberValue);
		        console.log(this.requestNumberValue);
		      setTimeout(this.getFirstStepRequest(this.requestNumberValue), 3000);
		      this.getRutGlobal(rut);
		      }).catch(function (error) {
		      console.log("AXIOS ERROR: ", error);
		      });
		    },

		    getFirstStepRequest(number) {
		      console.log(number)
		      let requestNumber = number;
		      axios.get(this.URL + '/paso1/' + requestNumber).then((response) => {
		        let firstStepSaved = response.data;
		        console.log(firstStepSaved);
		        console.log(firstStepSaved[0].object);
		        this.getfirstStep = JSON.parse(firstStepSaved[0].object);
		        console.log(this.getfirstStep);
		      }).catch(function (error) {
		        console.log("AXIOS ERROR: ", error);
		      });
		    },

		    saveFirstStep() {
		    	this.backgroundUploadPN();
		    	this.firstStepObject.push({
		    		firstStep: {
		    			name: this.name,
		    			fatherLastName: this.fatherLastName,
		    			motherLastName: this.motherLastName,
		    			rut: this.rut,
		    			date: this.date,
		    			profession: this.selectedProfession,
		    			specialty: this.selectedSpecialty,
		    			files: this.vueDropzoneFilePN,
		    			region: this.selectedRegion,
		    			province: this.selectedProvince,
		    			commune: this.selectedCommune,
		    			street: this.street,
		    			streetNumber: this.streetNumber,
		    			office: this.office,
		    			reference: this.reference,
		    			dataComites: {
				            contratista: this.dataComites.contratista,
				            obras: this.dataComites.obras,
				            concesiones: this.dataComites.concesiones,
				            inmobiliario: this.dataComites.inmobiliario,
				            vivienda: this.dataComites.vivienda,
				            proveedoresa: this.dataComites.proveedores,
				            industriales: this.dataComites.industriales,
				            especialidades: this.dataComites.especialidades
			           } 
		    		}
		    	})
		    	console.log(this.firstStepObject);
		        this.saveCompletedFormPN([this.firstStepObject, 1]);
		        this.savePostFirstStep();
		        console.log(this.completeObject);
		        this.firstStepObject = [];
		    },

		    savePostFirstStep: function () {
          
		      let firstStepObject = this.completeObject;
		      let data = JSON.stringify(firstStepObject);
		      axios.post(this.URL + '/guardarParcial', data).then((response) => {
		      console.log(response.data);
		      }).catch(function (error) {
		      console.log("AXIOS ERROR: ", error);
		      });
		    },

		    //First Step Inputs Validation
		    firstStepValidation() {
		      if (this.rut == "" || this.rutIsValid == false) {
		        this.setRutIsValid(false);
		      } else {
		        this.setRutIsValid(true);
		      }

		      this.nameValidation();
			  this.firstLastNameValidation();
			  this.secondLastNameValidation();
			  //this.dateValidation();
			  this.professionValidation();
			  this.specialtyValidation();
			  this.dropZoneValidation();
			  this.regionValidation();
			  this.provinceValidation();
			  this.communeValidation();
			  this.streetValidation();
			  this.streetNumberValidation();
			  this.officeValidation();
			  this.referenceValidation();


		      if (this.rut == "" 
		        || this.rutIsValid == false 
		        || this.dateIsValid == false
		        || this.nameIsValid == ""
		        || this.fatherLastName == ""
		        || this.motherLastName == ""
		        || this.selectedProfession == ""
		        || this.selectedSpecialty == ""
		        || this.vueDropzonePN == ""
		        || this.selectedRegion == ""
		        || this.selectedProvince == ""
		        || this.selectedCommune == ""
		        || this.street == ""
		        || this.streetNumber == ""
		        || this.office == ""
		        || this.reference == ""
		        || this.comiteValue() == false) {
		        
		          this.formIsValid = false;
		          console.log(this.formIsValid);
		      } else {
		        this.formIsValid = true;
		      }

		      if (this.formIsValid == true) {
		        this.saveFirstStep();
		        //this.$router.push({ name: "StepTwo" });
		        this.setSecondStepValue(true);
		        this.setFirstStepValue(false);
		      } else {
		        alert("Debe completar los campos requeridos");
		        this.setSecondStepValue(false);
		      }
		    },
		},

		computed: {
			...mapState(['rutIsValid', 'collapse', 'selectedProfession', 'professions',
				'selectedSpecialty', 'specialties', 'vueDropzoneFilePN', 'URL', 'completeObject',
				'regions', 'selectedRegion', 'provinces', 'selectedProvince', 'communes', 
				'selectedCommune', 'globalName', 'globalLastname'])
		},

		created: function(){
			this.getProfession();
			this.getSpecialty();
			this.getRegion();
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

	.svg {
	  background: url(../../assets/img/draganddrop-text.svg) no-repeat center;
	  margin-left: 1%;
	  height: 40px;
	}

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