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
                         <input type="text" name="emailrepresentante02_st06" v-model="emailContacto" ref="emailContactoCob" @focus="focus($refs.emailContacto)" @blur="blur([$refs.emailContacto, $refs.emailContactoCob.value])" @keyup="emailValidation($refs.emailContactoCob.value)">
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
                          <div class="input" ref="rutRepre">
                            <label>RUT del representante<i>	(<i class="contador">1</i> de<i class="total">{{ total }}</i>)</i></label>
                            <input type="text" name="rutrepresentante03_st06"  ref="rutRepreLeg" @focus="focus($refs.rutRepre)" @blur="blur([$refs.rutRepre, $refs.rutRepreLeg.value])" @keyup="rutValidation($refs.rutRepreLeg.value)"  v-model="rutRepreLegal">
                            <div class="small-text">Sin puntos y con guión (11111111-1)</div>
                            <div id="rutst02-error" class="formerror" v-if="!rutIsValid">Ingrese un rut Válido</div>
                          </div>
                          <div class="input" ref="nombreRepre">
                            <label>Nombre del representante<i>	(<i class="contador">1</i> de<i class="total">1</i>)</i></label>
                            <input type="text" name="nombrerepresentante03_st06" ref="nombreRepreLeg" @focus="focus($refs.nombreRepre)" @blur="blur([$refs.nombreRepre, $refs.nombreRepreLeg.value])" v-model="nombreRepreLegal">
                          </div>
                          <div class="input" ref="apePatRepre">
                            <label>Apellido Paterno del representante<i>	(<i class="contador">1</i> de<i class="total">1</i>)</i></label>
                            <input type="text" name="apellido1representante03_st06" ref="apePatRepreLeg" @focus="focus($refs.apePatRepre)" @blur="blur([$refs.apePatRepre, $refs.apePatRepreLeg.value])"  v-model="apePatRepreLegal">
                          </div>
                          <div class="input" ref="apeMatRepre">
                            <label>Apellido Materno del representante<i>	(<i class="contador">1</i> de<i class="total">1</i>)</i></label>
                            <input type="text" name="apellido2representante03_st06" ref="apeMatRepreLeg" @focus="focus($refs.apeMatRepre)" @blur="blur([$refs.apeMatRepre, $refs.apeMatRepreLeg.value])" v-model="apeMatReprelegal">
                          </div>
                          <div class="input" ref="telRepre">
                            <label>Teléfono (fijo)<i>	(<i class="contador">1</i> de<i class="total">1</i>)</i></label>
                            <input type="text" name="telefonorepresentante03_st06" ref="telRepreLeg" @focus="focus($refs.telRepre)" @blur="blur([$refs.telRepre, $refs.telRepreLeg.value])"  @keyup="phoneNumberValidation($refs.telRepreLeg.value)" v-model="telRepreLegal">
                            <div class="small-text">Use el formato +56 0 0000 0000</div>
                            <div id="rutst02-error" class="formerror" v-if="!telIsValid">Ingrese un teléfono Válido</div>
                          </div>
                          <div class="input" ref="celRepre">
                            <label>Celular<i>	(<i class="contador">1</i> de<i class="total">1</i>)</i></label>
                            <input type="text" name="celularrepresentante03_st06" ref="celRepreLeg" @focus="focus($refs.celRepre)" @blur="blur([$refs.celRepre, $refs.celRepreLeg.value])" @keyup="phoneNumberValidation($refs.celRepreLeg.value)" v-model="celRepreLegal">
                            <div class="small-text">Use el formato +56 0 0000 0000</div>
                            <div id="rutst02-error" class="formerror" v-if="!telIsValid">Ingrese un celular Válido</div>
                          </div>
                          <div class="input datepicker"  ref="fechaRepre">
                            <label>Fecha de nacimiento<i>	(<i class="contador">1</i> de<i class="total">1</i>)</i></label>
                            <!--<input type="text" data-toggle="datepicker" name="fecharepresentante03_st06"> -->
                              <date-picker name="date" v-model="dateRepreLegal" :config="options" class="datepickerVue"
                                ref="fechaRepreLegal"
                                @focus="focus($refs.fechaRepre)" 
                                @blur="blur([$refs.fechaRepre, $refs.fechaRepreLegal.value])">
                              </date-picker>
                          </div>
                          <div class="input" ref="emailRepre">
                            <label>Mail de contacto<i>	(<i class="contador">1</i> de<i class="total">1</i>)</i></label>
                            <input type="text" name="emailrepresentante03_st06" ref="emailRepreLeg" @focus="focus($refs.emailRepre)" @blur="blur([$refs.emailRepre, $refs.emailRepreLeg.value])" @keyup="emailValidation($refs.emailRepreLeg.value)" v-model="emailRereLegal">
                            <div id="rutst02-error" class="formerror" v-if="!emailIsValid">Ingrese un email Válido</div>
                          </div>
                          <div v-if="inputs" >
                            <div v-for="(item, index) in inputs" :key="index">

                              <div class="input" ref="rutRepre2">
                                <label>RUT del representante<i>	(<i class="contador">1</i> de<i class="total">1</i>)</i></label>
                                  <input type="text" name="rutrepresentante03_st06" ref="rutRepreLeg2" @focus="focus($refs.rutRepre2[index])" @blur="blur([$refs.rutRepre2[index], form.rutRepreLegal[index]])" @keyup="rutValidation(form.rutRepreLegal[index])" v-model="form.rutRepreLegal[index]">
                                <div class="small-text">Sin puntos y con guión (11111111-1)</div>
                                <div id="rutst02-error" class="formerror" v-if="!rutIsValid">Ingrese un rut Válido</div>
                              </div>

                              <div class="input" ref="nombreRepre2">
                                <label>Nombre del representante<i>	(<i class="contador">1</i> de<i class="total">1</i>)</i></label>
                                <input type="text" name="nombrerepresentante03_st06" ref="nombreRepreLeg2" @focus="focus($refs.nombreRepre2[index])" @blur="blur([$refs.nombreRepre2[index], form.nomRepreLegal[index]])" v-model="form.nomRepreLegal[index]">
                              </div>

                              <div class="input" ref="apePatRepre2">
                                <label>Apellido Paterno del representante<i>	(<i class="contador">1</i> de<i class="total">1</i>)</i></label>
                                <input type="text" name="apellido1representante03_st06" ref="apePatRepreLeg2" @focus="focus($refs.apePatRepre2[index])" @blur="blur([$refs.apePatRepre2[index], form.apePatRepreLegal[index]])" v-model="form.apePatRepreLegal[index]">
                              </div>

                              <div class="input" ref="apeMatRepre2">
                                <label>Apellido Materno del representante<i>	(<i class="contador">1</i> de<i class="total">1</i>)</i></label>
                                <input type="text" name="apellido2representante03_st06" ref="apeMatRepreLeg2" @focus="focus($refs.apeMatRepre2[index])" @blur="blur([$refs.apeMatRepre2[index], form.apeMatReprelegal[index]])" v-model="form.apeMatReprelegal[index]">
                              </div>

                              <div class="input" ref="telRepre2">
                                <label>Teléfono (fijo)<i>	(<i class="contador">1</i> de<i class="total">1</i>)</i></label>
                                <input type="text" name="telefonorepresentante03_st06" ref="telRepreLeg2" @focus="focus($refs.telRepre2[index])" @blur="blur([$refs.telRepre2[index], form.telRepreLegal[index]])" v-model="form.telRepreLegal[index]">
                                <div class="small-text">Use el formato +56 0 0000 0000</div>
                                <div id="rutst02-error" class="formerror" v-if="!telIsValid">Ingrese un teléfono Válido</div>
                              </div>

                              <div class="input" ref="celRepre2">
                                <label>Celular<i>	(<i class="contador">1</i> de<i class="total">1</i>)</i></label>
                                <input type="text" name="celularrepresentante03_st06" ref="celRepreLeg2" @focus="focus($refs.celRepre2[index])" @blur="blur([$refs.celRepre2[index], form.celRepreLegal[index]])" v-model="form.celRepreLegal[index]">
                                <div class="small-text">Use el formato +56 0 0000 0000</div>
                                <div id="rutst02-error" class="formerror" v-if="!telIsValid">Ingrese un celular Válido</div>
                              </div>

                              <div class="input datepicker"  ref="fechaRepre">
                            <label>Fecha de nacimiento<i>	(<i class="contador">1</i> de<i class="total">1</i>)</i></label>
                              <date-picker name="date" v-model="form.dateRepreLegal[index]" :config="options" class="datepickerVue"
                                ref="fechaRepreLegal"
                                @focus="focus($refs.fechaRepre)" 
                                @blur="blur([$refs.fechaRepre, $refs.fechaRepreLegal.value])">
                              </date-picker>
                          </div>

                          <div class="input" ref="emailRepre2">
                            <label>Mail de contacto<i>	(<i class="contador">1</i> de<i class="total">1</i>)</i></label>
                            <input type="text" name="emailrepresentante03_st06" ref="emailRepreLeg2" @focus="focus($refs.emailRepre2[index])" @blur="blur([$refs.emailRepre2[index], form.emailRereLegal[index]])" v-model="form.emailRereLegal[index]">
                            <div id="rutst02-error" class="formerror" v-if="!emailIsValid">Ingrese un email Válido</div>
                          </div>
                          </div>
                          </div>
                        </div>
                      </div><a class="input-remover" type="button" id="repeater-rmv-btn" v-if="inputs.length >= 1" @click="deleteSocio(inputs.length - 1)">Eliminar socio<span>x</span></a><a class="input-repeater"  @click="addInput()" id="repeater-add-btn">Añadir otro representante legal<span>+</span></a>
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
                            <input id="i1" name="comites" type="radio" value="true" v-model="contratista">
                            <label for="i1"><span class="label-input">Contratistas Generales</span><span aria-label=""  @click="show('contratistas-generales')" data-microtip-position="right" role="tooltip02">?</span></label>
                          </div>
                          <div class="md-checkbox">
                            <input id="i2" name="comites" type="radio" value="true"  v-model="obras">
                            <label for="i2"><span class="label-input">Obras Infraestructura Pública</span><span aria-label="" @click="show('obras-infra')" data-microtip-position="right" role="tooltip02">?</span></label>
                          </div>
                          <div class="md-checkbox">
                            <input id="i3" name="comites" type="radio" value="true" v-model="concesiones">
                            <label for="i3"><span class="label-input">Concesiones</span><span aria-label="" @click="show('concesiones')" data-microtip-position="right" role="tooltip02">?</span></label>
                          </div>
                        </div>
                        <div class="col-lg-3">
                          <h3>Vivienda</h3>
                          <div class="md-checkbox">
                            <input id="i4" name="comites" type="radio" value="true" v-model="inmobiliario">
                            <label for="i4"><span class="label-input">Inmobiliario</span><span aria-label="" @click="show('inmobiliario')" data-microtip-position="right" role="tooltip02">?</span></label>
                          </div>
                          <div class="md-checkbox">
                            <input id="i5" name="comites" type="radio" value="true" v-model="vivienda">
                            <label for="i5"><span class="label-input">Vivienda</span><span @click="show('vivienda')" aria-label="" data-microtip-position="right" role="tooltip02">?</span></label>
                          </div>
                        </div>
                        <div class="col-lg-4">
                          <h3>Suministros</h3>
                          <div class="md-checkbox">
                            <input id="i6" name="comites" type="radio" value="true" v-model="proveedores">
                            <label for="i6"><span class="label-input">Proveedores</span><span @click="show('proveedores')" aria-label="" data-microtip-position="right" role="tooltip02">?</span></label>
                          </div>
                          <div class="md-checkbox">
                            <input id="i7" name="comites" type="radio" value="true" v-model="industriales">
                            <label for="i7"><span class="label-input">Industriales</span><span @click="show('industriales')" aria-label="" data-microtip-position="right" role="tooltip02">?</span></label>
                          </div>
                          <div class="md-checkbox">
                            <input id="i8" name="comites" type="radio" value="true" v-model="especialidades">
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
        options: {
          format: 'DD/MM/YYYY',
          useCurrent: false,
          showClear: true,
          showClose: true,
          toolbarPlacement: 'bottom',
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
        date: null,
      }],
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
      inputs: [],
      dataRepreLegal: {
        rutRepreLegal:"",
        nombreRepreLegal: "",
        apePatRepreLegal: "",
        apeMatReprelegal: "",
        telRepreLegal: "",
        celRepreLegal: "",
        dateRepreLegal: "",
        emailRereLegal: "",
      },
      form: {
        rutRepreLegal: [],
        nomRepreLegal: [],
        apePatRepreLegal: [],
        apeMatReprelegal: [],
        telRepreLegal: [],
        celRepreLegal: [],
        dateRepreLegal: [],
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
      }
      }
    },
    methods:{
      ...mapMutations(['focus', 'blur', 'collapseClick', 'rutValidation', 'phoneNumberValidation', 'emailValidation', 'savePostulacionCompleted']),

      save() {

        if (this.rutIsValid == true && this.telIsValid == true && this.emailIsValid == true) {
        this.data.push({

          //Data form representante
          dataRepresentante:{
            rutRepre: this.rutRepre,
            nombreRepre: this.nombreRepre,
            apellidoRepre: this.apellidoRepre,
            apellidoRepre2: this.apellidoRepre2,
            telRepre: this.telRepre,
            celRepre: this.celRepre,
            emailRepre: this.emailRepre,
            date: this.date
          },

           //Data form contacto de cobranza
          dataContactoCobranza: {
            rutContactoCob: this.rutContactoCob,
            nombreContactoCob: this.nombreContactoCob,
            apellidoContacto: this.apellidoContacto,
            apellidoMatContacto: this.apellidoMatContacto,
            telContacto: this.telContacto,
            celContacto: this.celContacto,
            emailContacto: this.emailContacto,
          },
          
           //Data Representante Legal
           dataRepreLegal: {
              rutRepreLegal: this.rutRepreLegal,
              nombreRepreLegal: this.nombreRepreLegal,
              apePatRepreLegal: this.apePatRepreLegal,
              apeMatReprelegal: this.apeMatReprelegal,
              telRepreLegal: this.telRepreLegal,
              celRepreLegal: this.celRepreLegal,
              dateRepreLegal: this.dateRepreLegal,
              emailRereLegal: this.emailRereLegal,
              datosRepreAdd: this.form,
           },
           
           //Data form comites
           dataComites: {
            contratista: this.contratista,
            obras: this.obras,
            concesiones: this.concesiones,
            inmobiliario: this.inmobiliario,
            vivienda: this.vivienda,
            proveedoresa: this.proveedores,
            industriales: this.industriales,
            especialidades: this.especialidades
           }
            
          
      });

      } else {
        alert("Tiene que ingresar datos válidos");
      }
      console.log(this.data);

      },

      saveContinue() {
        if (this.validateInput()) {
            this.save();
            this.savePostulacionCompleted(this.data);
            this.$router.push({ name: "StepFive" });
        } else {
          alert("Debe llenar todos los campos");
        }
        
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
      
      llenar() {
        //Data form representante
        this.rutRepre = "111111111-1"
        this.nombreRepre = "Leonardo"
        this.apellidoRepre = "Gimenez"
        this.apellidoRepre2 = "Rodriguez"
        this.telRepre = "9 74055802"
        this.celRepre = "9 74055802"
        this.emailRepre = "leo@gmail.com"
        this.date = "06/02/1991"
        //Data form contacto de cobranza
        this.rutContactoCob = "33333333-3"
        this.nombreContactoCob = "pablo"
        this.apellidoContacto = "Rodriguez"
        this.apellidoMatContacto ="Vasquez"
        this.telContacto = "9 74055802"
        this.celContacto = "974055802"
        this.emailContacto = "pablo@gmail.com"
        //Data Representante Legal
        this.rutRepreLegal = "22222222-2"
        this.nombreRepreLegal = "Marianceli"
        this.apePatRepreLegal = "Subero"
        this.apeMatReprelegal = "Camacho"
        this.telRepreLegal = "9 74055802"
        this.celRepreLegal = "9 74055802"
        this.dateRepreLegal = "06/11/1991"
        this.emailRereLegal = "marianceli@gmail.com"
        //Data form comites
        this.contratista = ""
        this.obras = ""
        this.concesiones = ""
        this.inmobiliario = "true"
        this.vivienda = ""
        this.proveedores = ""
        this.industriales = ""
        this.especialidades = ""
      },

      contAddInput() {
        this.contador = this.contador + 1;
        this.total = this.total + this.contador;
      },

      validateInput() {

        if (this.nombreRepre !== '' 
            && this.apellidoRepre !== '' 
            && this.apellidoRepre2 !== '' 
            && this.rutRepre !== '' 
            && this.telRepre !== ''
            && this.celRepre !== ''
            && this.emailRepre !== '' 
            && this.date !== '' 
            && this.rutContactoCob !== '' 
            && this.nombreContactoCob !== '' 
            && this.apellidoContacto !== '' 
            && this.apellidoMatContacto !== '' 
            && this.telContacto !== '' 
            && this.celContacto !== ''
            && this.emailContacto !== '' 
            && this.rutRepreLegal !== '' 
            && this.nombreRepreLegal !== '' 
            && this.apePatRepreLegal !== '' 
            && this.telRepreLegal !== ''
            && this.celRepreLegal !== '' 
            && this.dateRepreLegal !== '' 
            && this.emailRereLegal !== '' 
            && this.form.lenght !== 0) {

          if (this.rutIsValid == true && this.telIsValid == true && this.emailIsValid == true) {
            return true;
          }
        } else {
          return false;
        }
      }
    },
    computed: {
      ...mapState(['collapse', 'telIsValid', 'emailIsValid','rutIsValid'])
    },

    created: function () {
      //this.llenar();
    }

    
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
