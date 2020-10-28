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
          <div class="c-steps-numbers__item success"><span>2</span>
            <p>Antecedentes<br>financieros</p>
          </div>
          <div class="c-steps-numbers__item success"><span>3</span>
            <p>Patrocinios</p>
          </div>
          <div class="c-steps-numbers__item active"><span>4</span>
            <p>Participación</p>
          </div>
          <div class="c-steps-numbers__item"><span>5</span>
            <p>Declaraciones<br>y compromisos</p>
          </div>
        </div>
      </div>
   <div class="c-form-steps">
        <div class="c-form-steps__sections greybg" data-step="04">
          <div class="container u-pb0">
            <div class="c-form-steps__content step-data">
              <div class="row">
                <div class="col-md-12 col-lg-6 offset-lg-2">
                    <h2>Representante ante la CChC</h2>
                  <p>Será el principal nexo entre la empresa y la Cámara Chilena de la Construcción para todos los eventos de comunicación que se realicen.</p>
                  <form action="#" id="step06_1">
                    <div class="input"  ref="rut">
                      <label>RUT del representante</label>
                      <input type="text" name="rutrepresentante_st06"  v-model="dataRepresentante.rutRepre" ref="rutRepresentante" @focus="focus($refs.rut)" @blur="blur([$refs.rut, $refs.rutRepresentante.value])" @keyup="rutRepresentanteCChCIsValidation($refs.rutRepresentante.value), validateRutRepresentanteCchcExist($refs.rutRepresentante.value, $refs.nombre, $refs.apellido, $refs.apellido2)">
                      <div class="small-text">Sin puntos y con guión (11111111-1)</div>
                      <div id="rutst02-error" class="formerror" v-if="rutRepresentanteCChCIsValid === false">Ingrese un rut Válido</div>
                    </div>
                    <div class="input"  ref="nombre">
                      <label>Nombre del representante</label>
                      <input type="text" name="nombrerepresentante_st06" v-model="dataRepresentante.nombreRepre" ref="nombreRepreCChc" @focus="focus($refs.nombre)" @blur="blur([$refs.nombre, $refs.nombreRepreCChc.value])">
                    </div>
                    <div class="input" ref="apellido">
                      <label>Apellido Paterno del representante</label>
                      <input type="text" name="apellido1representante_st06" v-model="dataRepresentante.apellidoRepre" ref="apellidoRepre" @focus="focus($refs.apellido)" @blur="blur([$refs.apellido, $refs.apellidoRepre.value])">
                    </div>
                    <div class="input" ref="apellido2">
                      <label>Apellido Materno del representante</label>
                      <input type="text" name="apellido2representante_st06" v-model="dataRepresentante.apellidoRepre2" ref="apellidoRepre2" @focus="focus($refs.apellido2)" @blur="blur([$refs.apellido2, $refs.apellidoRepre2.value])">
                    </div>
                    <div class="input" ref="tel">
                      <label>Teléfono (fijo)</label>
                      <input type="text" name="telefonorepresentante_st06" v-model="dataRepresentante.telRepre" ref="telRepreCChc" @focus="focus($refs.tel)" @blur="blur([$refs.tel, $refs.telRepreCChc.value])" @keyup="telRepresentanteCChCIsValidation($refs.telRepreCChc.value)">
                      <div class="small-text">Use el formato +56 0 0000 0000</div>
                      <div id="rutst02-error" class="formerror" v-if="telRepresentanteCChCIsValid === false">Ingrese un teléfono Válido</div>
                    </div>
                    <div class="input" ref="cel">
                      <label>Celular</label>
                      <input type="text" name="celularrepresentante_st06" v-model="dataRepresentante.celRepre" ref="celRepreCChc" @focus="focus($refs.cel)" @blur="blur([$refs.cel, $refs.celRepreCChc.value])" @keyup="celRepresentanteCChCIsValidation($refs.celRepreCChc.value)">
                      <div class="small-text">Use el formato +56 0 0000 0000</div>
                      <div id="rutst02-error" class="formerror" v-if="celRepresentanteCChCIsValid === false">Ingrese un celular Válido</div>
                    </div>
                    <!--<div class="input datepicker" ref="fecha">
                      <label>Fecha de nacimiento</label>
                        <date-picker v-model="dataRepresentante.date" ref="fechaRepreCChc"
                        :lang="lang"
                        @focus="dateFocus($refs.fecha)"
                        @change="dateValidation($refs.fecha)"
                        valueType="format">
                      </date-picker>
                    </div>-->
                    <div class="input u-mb0" ref="email">
                      <label>Email de contacto</label>
                      <input type="text" name="emailrepresentante_st06" v-model="dataRepresentante.emailRepre" ref="emailRepreCChc" @focus="focus($refs.email)" @blur="blur([$refs.email, $refs.emailRepreCChc.value])" @keyup="emailRepresentanteCChCIsValidation($refs.emailRepreCChc.value)">
                      <div id="rutst02-error" class="formerror" v-if="emailRepresentanteCChCIsValid === false">Ingrese un email Válido</div>
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
                        <input type="text" name="rutrepresentante02_st06" v-model="dataContactoCobranza.rutContactoCob" ref="rutContactoCob" @focus="focus($refs.rutContacto)" @blur="blur([$refs.rutContacto, $refs.rutContactoCob.value])" @keyup="validateRutContactoCobranzaExist($refs.rutContactoCob.value) , rutContactoCobIsValidation($refs.rutContactoCob.value)">
                        <div class="small-text">Sin puntos y con guión (11111111-1)</div>
                        <div id="rutst02-error" class="formerror" v-if="rutContactoCobIsValid === false">Ingrese un rut Válido</div>
                      </div>
                      <div class="input" ref="nombreContacto">
                        <label>Nombre del contacto</label>
                        <input type="text" name="nombrerepresentante02_st06" v-model="dataContactoCobranza.nombreContactoCob" ref="nombreContactoCob" @focus="focus($refs.nombreContacto)" @blur="blur([$refs.nombreContacto, $refs.nombreContactoCob.value])">
                      </div>
                      <div class="input" ref="apellidoContacto">
                        <label>Apellido Paterno del contacto</label>
                        <input type="text" name="apellido1representante02_st06" v-model="dataContactoCobranza.apellidoContacto" ref="apellidoContactoCob" @focus="focus($refs.apellidoContacto)" @blur="blur([$refs.apellidoContacto, $refs.apellidoContactoCob.value])">
                      </div>
                      <div class="input" ref="apellidoMaContacto">
                        <label>Apellido Materno del contacto</label>
                        <input type="text" name="apellido2representante02_st06" v-model="dataContactoCobranza.apellidoMatContacto" ref="apellidoMaContactoCob" @focus="focus($refs.apellidoMaContacto)" @blur="blur([$refs.apellidoMaContacto, $refs.apellidoMaContactoCob.value])">
                      </div>
                      <div class="input" ref="telContacto">
                        <label>Teléfono (fijo)</label>
                        <input type="text" name="telefonorepresentante02_st06" v-model="dataContactoCobranza.telContacto" ref="telContactoCob" @focus="focus($refs.telContacto)" @blur="blur([$refs.telContacto, $refs.telContactoCob.value])"  @keyup="telContactoCobIsValidation($refs.telContactoCob.value)">
                        <div class="small-text">Use el formato +56 0 0000 0000</div>
                        <div id="rutst02-error" class="formerror" v-if="telContactoCobIsValid === false">Ingrese un teléfono Válido</div>
                      </div>
                      <div class="input" ref="celContacto">
                        <label>Celular</label>
                        <input type="text" name="celularrepresentante02_st06" v-model="dataContactoCobranza.celContacto" ref="celContactoCob" @focus="focus($refs.celContacto)" @blur="blur([$refs.celContacto, $refs.celContactoCob.value])"  @keyup="celContactoCobIsValidation($refs.celContactoCob.value)">
                        <div class="small-text">Use el formato +56 0 0000 0000</div>
                        <div id="rutst02-error" class="formerror" v-if="celContactoCobIsValid === false">Ingrese un celular Válido</div>
                      </div>
                      <div class="input" ref="emailContacto">
                        <label>Email de contacto</label>
                         <input type="text" name="emailrepresentante02_st06" v-model="dataContactoCobranza.emailContacto" ref="emailContactoCob" @focus="focus($refs.emailContacto)" @blur="blur([$refs.emailContacto, $refs.emailContactoCob.value])" @keyup="emailContactoCobIsValidation($refs.emailContactoCob.value)">
                        <div id="rutst02-error" class="formerror" v-if="emailContactoCobIsValid === false">Ingrese un email Válido</div>
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
                            <div v-for="(item, index) in inputs" :key="index">
                              <div class="input" ref="rutRepre2">
                                <label>RUT del representante<i>	(<i class="contador">{{ index + 1 }}</i> de<i class="total">{{ inputs.length }}</i>)</i></label>
                                  <input type="text" name="rutrepresentante03_st06" ref="rutRepreLeg2" @focus="focus($refs.rutRepre2[index])" @blur="blur([$refs.rutRepre2[index], form.rutRepreLegal[index]])" @keyup="rutRepreLegalIsValidation(form.rutRepreLegal[index]), validateRutRepresentanteLegalFormExist(form.rutRepreLegal[index], index)" v-model="form.rutRepreLegal[index]">
                                <div class="small-text">Sin puntos y con guión (11111111-1)</div>
                                <div id="rutst02-error" class="formerror" v-if="rutRepreLegalIsValid === false">Ingrese un rut Válido</div>
                              </div>

                              <div class="input" ref="nombreRepre2">
                                <label>Nombre del representante<i>	(<i class="contador">{{ index + 1 }}</i> de<i class="total">{{ inputs.length }}</i>)</i></label>
                                <input type="text" name="nombrerepresentante03_st06" ref="nombreRepreLeg2" @focus="focus($refs.nombreRepre2[index])" @blur="blur([$refs.nombreRepre2[index], form.nomRepreLegal[index]])" v-model="form.nomRepreLegal[index]">
                              </div>

                              <div class="input" ref="apePatRepre2">
                                <label>Apellido Paterno del representante<i>	(<i class="contador">{{ index + 1 }}</i> de<i class="total">{{ inputs.length }}</i>)</i></label>
                                <input type="text" name="apellido1representante03_st06" ref="apePatRepreLeg2" @focus="focus($refs.apePatRepre2[index])" @blur="blur([$refs.apePatRepre2[index], form.apePatRepreLegal[index]])" v-model="form.apePatRepreLegal[index]">
                              </div>

                              <div class="input" ref="apeMatRepre2">
                                <label>Apellido Materno del representante<i>	(<i class="contador">{{ index + 1 }}</i> de<i class="total">{{ inputs.length }}</i>)</i></label>
                                <input type="text" name="apellido2representante03_st06" ref="apeMatRepreLeg2" @focus="focus($refs.apeMatRepre2[index])" @blur="blur([$refs.apeMatRepre2[index], form.apeMatReprelegal[index]])" v-model="form.apeMatReprelegal[index]">
                              </div>

                              <div class="input" ref="telRepre2">
                                <label>Teléfono (fijo)<i>	(<i class="contador">{{ index + 1 }}</i> de<i class="total">{{ inputs.length }}</i>)</i></label>
                                <input type="text" name="telefonorepresentante03_st06" ref="telRepreLeg2" @focus="focus($refs.telRepre2[index])" @blur="blur([$refs.telRepre2[index], form.telRepreLegal[index]])" @keyup="telRepreLegalIsValidation(form.telRepreLegal[index])" v-model="form.telRepreLegal[index]">
                                <div class="small-text">Use el formato +56 0 0000 0000</div>
                                <div id="rutst02-error" class="formerror" v-if="telRepreLegalIsValid === false">Ingrese un teléfono Válido</div>
                              </div>

                              <div class="input" ref="celRepre2">
                                <label>Celular<i>	(<i class="contador">{{ index + 1 }}</i> de<i class="total">{{ inputs.length }}</i>)</i></label>
                                <input type="text" name="celularrepresentante03_st06" ref="celRepreLeg2" @focus="focus($refs.celRepre2[index])" @blur="blur([$refs.celRepre2[index], form.celRepreLegal[index]])" @keyup="celRepreLegalIsValidation(form.telRepreLegal[index])" v-model="form.celRepreLegal[index]">
                                <div class="small-text">Use el formato +56 0 0000 0000</div>
                                <div id="rutst02-error" class="formerror" v-if="celRepreLegalIsValid === false">Ingrese un celular Válido</div>
                              </div>

                              <!--<div class="input datepicker"  ref="fechaRepre">
                            <label>Fecha de nacimiento<i>	(<i class="contador">{{ index + 1 }}</i> de<i class="total">{{ inputs.length }}</i>)</i></label>
                              <date-picker v-model="form.dateRepreLegal[index]" ref="fechaRepreLegal"
                                          :lang="lang"
                                          @focus="dateFocus($refs.fechaRepre)"
                                          @change="dateValidation($refs.fechaRepre)"
                                          valueType="format">
                              </date-picker>
                          </div>-->

                          <div class="input" ref="emailRepre2">
                            <label>Mail de contacto<i>	(<i class="contador">{{ index + 1 }}</i> de<i class="total">{{ inputs.length }}</i>)</i></label>
                            <input type="text" name="emailrepresentante03_st06" ref="emailRepreLeg2" @focus="focus($refs.emailRepre2[index])" @blur="blur([$refs.emailRepre2[index], form.emailRereLegal[index]])" @keyup="emailRepreLegalIsValidation(form.emailRereLegal[index])" v-model="form.emailRereLegal[index]">
                            <div id="rutst02-error" class="formerror" v-if="emailRepreLegalIsValid === false">Ingrese un email Válido</div>
                          </div>
                          </div>
                          <!--</div> -->
                        </div>
                      </div><a class="input-remover" type="button" id="repeater-rmv-btn" v-if="inputs.length > 1" @click="deleteSocio(inputs.length - 1)">Eliminar socio<span>x</span></a><a class="input-repeater"  @click="addInput()" id="repeater-add-btn">Añadir otro representante legal<span>+</span></a>
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
          <div class="c-form-steps whitebg">
            <div class="container">
              <div class="c-form-steps__content step-data">
                <div class="row">
                  <div class="col-md-10 col-lg-10 offset-lg-2">
                    <form action="#" id="step06_4">
                      <button class="link prev btn-blue u-mt50 u-mr30 small" type="button" @click="anterior"><i class="fa fa-angle-left"></i>Anterior</button>
                      <button type="button" class="link btn-red u-mt50 big" id="submitStep06" style="margin-right: 25px;" @click="save">Guardar<i class="fa fa-angle-right"></i></button>
                      <button type="button" class="link btn-red u-mt50 big" id="submitStep06" @click="saveContinue">Continuar<i class="fa fa-angle-right"></i></button>
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
//axios
import axios from 'axios';
import VueAxios from 'vue-axios';
//Vue Datepicker
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';


export default {
  name: 'StepFour',
  components: {
    Cabecera,
    StepNumbers,
    DatePicker,
},
  data () {
      return {
      data: [{}],
      dataValidaciones: [],
      lang: {
        formatLocale: {
          firstDayOfWeek: 1,
          weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
        },
      }, 
      //Data form representante
      dataRepresentante:[{
        rutRepre: '',
        nombreRepre: '',
        apellidoRepre: '',
        apellidoRepre2: '',
        telRepre: '',
        celRepre: '',
        emailRepre: '',
        date: '',
      }],
      dateIsValid: '',
      //Data form contacto de cobranza
      dataContactoCobranza: {
        rutContactoCob: '',
        nombreContactoCob: '',
        apellidoContacto: '',
        apellidoMatContacto: '',
        telContacto: '',
        celContacto: '',
        emailContacto: ''
      },
      //Data representante legal
      inputs: [
        {
          form: {
        rutRepreLegal: [],
        nomRepreLegal: [],
        apePatRepreLegal: [],
        apeMatReprelegal: [],
        telRepreLegal: [],
        celRepreLegal: [],
        //dateRepreLegal: [],
        emailRereLegal: [],
      }

      }],
      dataRepreLegal: {
        form: {
        rutRepreLegal: [],
        nomRepreLegal: [],
        apePatRepreLegal: [],
        apeMatReprelegal: [],
        telRepreLegal: [],
        celRepreLegal: [],
        //dateRepreLegal: [],
        emailRereLegal: [],
        }
      },
      form: {
        rutRepreLegal: [],
        nomRepreLegal: [],
        apePatRepreLegal: [],
        apeMatReprelegal: [],
        telRepreLegal: [],
        celRepreLegal: [],
        //dateRepreLegal: [],
        emailRereLegal: [],
      },
      contador: 1,
      total: 1,
      //Data form comites
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
      urlBase: this.$store.state.URL,
      rutPatrocinateValid: ''
      }
    },
    methods:{
      ...mapMutations(['focus', 
                        'blur', 
                        'collapseClick', 
                        'rutValidation', 
                        'phoneNumberValidation', 
                        'emailValidation', 
                        'saveCompletedForm', 
                        'dateFocus', 
                        'dateBlur', 
                        "setStepThreeValue", 
                        "setStepFourValue", 
                        "setStepFiveValue",
                        'rutRepresentanteCChCIsValidation',
                        'rutContactoCobIsValidation',
                        'rutRepreLegalIsValidation',
                        'telRepresentanteCChCIsValidation',
                        'telContactoCobIsValidation',
                        'telRepreLegalIsValidation',
                        'celRepresentanteCChCIsValidation',
                        'celContactoCobIsValidation',
                        'celRepreLegalIsValidation',
                        'emailRepresentanteCChCIsValidation',
                        'emailContactoCobIsValidation',
                        'emailRepreLegalIsValidation'
                        ]),

      save() {
        
        if (this.rutRepresentanteCChCIsValid == true 
            && this.telRepresentanteCChCIsValid == true 
            && this.celRepresentanteCChCIsValid == true
            && this.emailRepresentanteCChCIsValid == true
            && this.rutContactoCobIsValid == true
            && this.telContactoCobIsValid == true
            && this.celContactoCobIsValid == true 
            && this.emailContactoCobIsValid == true
            && this.rutRepreLegalIsValid == true
            && this.telRepreLegalIsValid == true
            && this.celRepreLegalIsValid == true
            && this.emailRepreLegalIsValid == true ) {

        this.data.push({

          //Data form representante
          dataRepresentante:{
            rutRepre: this.dataRepresentante.rutRepre,
            nombreRepre: this.dataRepresentante.nombreRepre,
            apellidoRepre: this.dataRepresentante.apellidoRepre,
            apellidoRepre2: this.dataRepresentante.apellidoRepre2,
            telRepre: this.dataRepresentante.telRepre,
            celRepre: this.dataRepresentante.celRepre,
            emailRepre: this.dataRepresentante.emailRepre,
            //date: this.dataRepresentante.date
          },

           //Data form contacto de cobranza
          dataContactoCobranza: {
            rutContactoCob: this.dataContactoCobranza.rutContactoCob,
            nombreContactoCob: this.dataContactoCobranza.nombreContactoCob,
            apellidoContacto: this.dataContactoCobranza.apellidoContacto,
            apellidoMatContacto: this.dataContactoCobranza.apellidoMatContacto,
            telContacto: this.dataContactoCobranza.telContacto,
            celContacto: this.dataContactoCobranza.celContacto,
            emailContacto: this.dataContactoCobranza.emailContacto,
          },
          
           //Data Representante Legal
           dataRepreLegal: {
              datosRepreAdd: this.form,
           },
           
           //Data form comites
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
      });

      this.saveCompletedForm([this.data, 4]);
      this.savePostStepFour();
      console.log(this.completedForm);
      } else {
        alert("Tiene que ingresar datos válidos");
      }
      ///console.log(this.completedForm);

      },

      saveContinue() {
        if (this.validateInput()) {
            this.save();
            //this.saveCompletedForm(this.data);
            //this.$router.push({ name: "StepFive" });
            this.setStepFiveValue(true);
            this.setStepFourValue(false);  
        } else {
          alert("Debe llenar todos los campos");
          this.setStepFiveValue(false);
        }
        
      },

      anterior() {
        //this.$router.push({ name: "StepTree" });
        this.setStepThreeValue(true);
        this.setStepFourValue(false);
      },

      show (modalName) {
            this.$modal.show(modalName);
      },

      hide (modalName) {
            this.$modal.hide(modalName);
      },

      addInput() {
        this.inputs.push(this.form);
      },

      deleteSocio(i) {
        this.inputs.splice(i, 1);
      },
      

      contAddInput() {
        this.contador = this.contador + 1;
        this.total = this.total + this.contador;
      },

      validateInput() {
        
        if (this.dataRepresentante.nombreRepre !== '' 
            && this.dataRepresentante.apellidoRepre !== '' 
            && this.dataRepresentante.apellidoRepre2 !== '' 
            && this.dataRepresentante.rutRepre !== '' 
            && this.dataRepresentante.telRepre !== ''
            && this.dataRepresentante.celRepre !== ''
            && this.dataRepresentante.emailRepre !== '' 
            //&& this.dataRepresentante.date !== '' 
            && this.dataContactoCobranza.rutContactoCob !== '' 
            && this.dataContactoCobranza.nombreContactoCob !== '' 
            && this.dataContactoCobranza.apellidoContacto !== '' 
            && this.dataContactoCobranza.apellidoMatContacto !== '' 
            && this.dataContactoCobranza.telContacto !== '' 
            && this.dataContactoCobranza.celContacto !== ''
            && this.dataContactoCobranza.emailContacto !== '' 
            ) {

          if (this.rutRepresentanteCChCIsValid == true 
            && this.telRepresentanteCChCIsValid == true 
            && this.celRepresentanteCChCIsValid == true
            && this.emailRepresentanteCChCIsValid == true
            && this.rutContactoCobIsValid == true
            && this.telContactoCobIsValid == true
            && this.celContactoCobIsValid == true 
            && this.emailContactoCobIsValid == true
            && this.rutRepreLegalIsValid == true
            && this.telRepreLegalIsValid == true
            && this.celRepreLegalIsValid == true
            && this.emailRepreLegalIsValid == true 
            && this.dateIsValid == true) {
              
            return true;
          }
        } else {
          return false;
        }
      },

      validateRutRepresentanteCchcExist(rut, refsNom, refsApe, refsApe2) {
      
        if (this.rutPatrocinanteGlobal.length > 0) {
          if (this.rutPatrocinanteGlobal[0].rut1 !== rut && this.rutPatrocinanteGlobal[0].rut2 !== rut) {

          axios.get(this.urlBase+'/validarRepresentantes/' + rut).then((response) => {
          this.dataValidaciones = response.data;
          
          if (Object.keys(this.dataValidaciones).length !== 0) {

            if (this.dataValidaciones[0].ESTADO == "1") {

              this.dataRepresentante.nombreRepre = this.dataValidaciones[0].NOMBRE;
              this.dataRepresentante.apellidoRepre = this.dataValidaciones[0].APELLIDO_PAT;
              this.dataRepresentante.apellidoRepre2 = this.dataValidaciones[0].APELLIDO_MAT;
              this.focus(refsNom);
              this.focus(refsApe);
              this.focus(refsApe2);
             

            } else {
              alert("El Representante tiene que estar activo");
            }
            
          }else {
            
            this.dataRepresentante.nombreRepre = "";
            this.dataRepresentante.apellidoRepre = "";
            this.dataRepresentante.apellidoRepre2 = "";
          }
          
 
        }).catch(function (error) {
        console.log("AXIOS ERROR: ", error);
        });

        } else {
          alert("El Rut no puede ser el de un patrocinante");
            this.dataRepresentante.rutRepre = "";
            this.dataRepresentante.nombreRepre = "";
            this.dataRepresentante.apellidoRepre = "";
            this.dataRepresentante.apellidoRepre2 = "";
        }

        } else {
          alert("Debe ingresar los RUT de los patrocinantes del paso anterior");
          this.dataRepresentante.rutRepre = "";
        }
        
        
      
      },

      validateRutContactoCobranzaExist(rut) {
        
        axios.get(this.urlBase+'/validarRepresentantes/' + rut).then((response) => {
          this.dataValidaciones = response.data;
          
          if (Object.keys(this.dataValidaciones).length !== 0) {

            if (this.dataValidaciones[0].ESTADO == "1") {

              this.dataContactoCobranza.nombreContactoCob = this.dataValidaciones[0].NOMBRE;
              this.dataContactoCobranza.apellidoContacto = this.dataValidaciones[0].APELLIDO_PAT;
              this.dataContactoCobranza.apellidoMatContacto = this.dataValidaciones[0].APELLIDO_MAT;

            } else {
              alert("El Representante tiene que estar activo");
            }
            
          }else {
            this.dataContactoCobranza.nombreContactoCob = "";
            this.dataContactoCobranza.apellidoContacto= "";
            this.dataContactoCobranza.apellidoMatContacto = "";
          }
          
 
        }).catch(function (error) {
        console.log("AXIOS ERROR: ", error);
        });
      
      },

      validateRutRepresentanteLegalExist(rut) {
        
        axios.get(this.urlBase+'/validarRepresentantes/' + rut).then((response) => {
          this.dataValidaciones = response.data;
          
          if (Object.keys(this.dataValidaciones).length !== 0) {

            if (this.dataValidaciones[0].ESTADO == "1") {
            
              this.dataRepreLegal.nombreRepreLegal = this.dataValidaciones[0].NOMBRE;
              this.dataRepreLegal.apePatRepreLegal = this.dataValidaciones[0].APELLIDO_PAT;
              this.dataRepreLegal.apeMatReprelegal = this.dataValidaciones[0].APELLIDO_MAT;

            } else {
              alert("El Representante tiene que estar activo");
            }
            
          }else {
            this.dataRepreLegal.nombreRepreLegal = "";
            this.dataRepreLegal.apePatRepreLegal= "";
            this.dataRepreLegal.apeMatReprelegal = "";
          }
          
 
        }).catch(function (error) {
        console.log("AXIOS ERROR: ", error);
        });
      
      },


      validateRutRepresentanteLegalFormExist(rut, index) {
    
        axios.get(this.urlBase+'/validarRepresentantes/' + rut).then((response) => {
          this.dataValidaciones = response.data;
          
          if (Object.keys(this.dataValidaciones).length !== 0) {

            if (this.dataValidaciones[0].ESTADO == "1") {
              
              this.form.nomRepreLegal[index] = this.dataValidaciones[0].NOMBRE;
              this.form.apePatRepreLegal[index] = this.dataValidaciones[0].APELLIDO_PAT;
              this.form.apeMatReprelegal[index] = this.dataValidaciones[0].APELLIDO_MAT;

            } else {
              alert("El Representante tiene que estar activo");
            }
            
          }else {
            this.form.nomRepreLegal[index] = "";
            this.form.apePatRepreLegal[index] = "";
            this.form.apeMatReprelegal[index]  = "";
          }
          
 
        }).catch(function (error) {
        console.log("AXIOS ERROR: ", error);
        });
      
      },

      savePostStepFour: function () {
          
      let objPatrocinante = this.completedForm;
      let data = JSON.stringify(objPatrocinante);
      axios.post(this.urlBase + '/guardarParcial', data).then((response) => {
      console.log(response.data);
      }).catch(function (error) {
      console.log("AXIOS ERROR: ", error);
      });
    },

      /*dateValidation(refs) {
      if (this.dataRepresentante.date == "" || this.dataRepresentante.date == null) {
        this.dateIsValid = false;
        this.dateBlur(refs);
      } else {
        this.dateIsValid = true;
      }
    },*/

    },
    computed: {
      ...mapState(['collapse', 
                  'telIsValid', 
                  'emailIsValid',
                  'rutIsValid', 
                  'completedForm', 
                  'completedForm',
                  'rutPatrocinanteGlobal',
                  'rutRepresentanteCChCIsValid',
                  'telRepresentanteCChCIsValid',
                  'celRepresentanteCChCIsValid',
                  'emailRepresentanteCChCIsValid',
                  'rutContactoCobIsValid',
                  'telContactoCobIsValid',
                  'celContactoCobIsValid',
                  'emailContactoCobIsValid',
                  'rutRepreLegalIsValid',
                  'telRepreLegalIsValid',
                  'celRepreLegalIsValid',
                  'emailRepreLegalIsValid',
                  ]),
    },

    created: function () {
      //this.llenar();
      this.validateInput();
    }

    
}
</script>

<style scoped>
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
