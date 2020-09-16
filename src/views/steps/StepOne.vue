  <template>
    <div>
      <Cabecera></Cabecera>
      <main role="main">
        <StepNumber></StepNumber>
        <div class="c-form-steps">
          <div class="c-form-steps__sections" data-step="01">
            <div class="container">
              <div class="c-form-steps__content step-data">
                <div class="row">
                  <div class="col-md-12 col-lg-6 offset-lg-2">
                    <h2>Información de la empresa</h2>
                    <p>Ingrese los datos de la empresa que se desea postular para ser socia de la Cámara Chilena de la Construcción</p>
                    <form action="#" id="step03_1">
                      <div class="input">
                        <label>RUT de la empresa</label>
                        <input type="text" name="rutempresa_st03">
                        <div class="small-text">Sin puntos y con guión (11111111-1)</div>
                      </div>
                      <div class="input">
                        <label>Nombre de Fantasía de la Empresa <i>(Opcional)</i></label>
                        <input type="text" name="nombreempresa_st03">
                      </div>
                      <div class="input">
                        <label>Razón Social</label>
                        <input type="text" name="razonsocial_st03">
                      </div>
                      <div class="input datepicker">
                        <label>Fecha de Constitución</label>
                        <input type="text" data-toggle="datepicker" name="consitucion_st03">
                      </div>
                      <div class="input">
                        <label>Giro</label>
                        <input type="text" name="giro_st03">
                      </div>
                      <div class="input">
                        <div class="input-select">
                          <select name="actividad_st03">
                            <option value="default">Actividad</option>
                          </select>
                        </div>
                      </div>
                      <div class="input">
                        <div class="input-select">
                          <select name="categoria_st03">
                            <option value="default">Categoría</option>
                          </select>
                        </div>
                      </div>
                      <div class="input">
                        <label>Teléfono de la empresa <i>(Opcional)</i></label>
                        <input type="text" name="telefonoempresa_st03">
                        <div class="small-text">Use el formato +56 0 0000 0000</div>
                      </div>
                      <div class="input">
                        <label>Email de la empresa <i>(Opcional)</i></label>
                        <input type="text" name="emailempresa_st03">
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div class="c-form-drag whitebg small">
              <div class="container"><a class="section-minimizar" href="#">EXPANDIR<span></span></a>
                <div class="row">
                  <div class="col-md-12 col-lg-6 offset-lg-2">
                    <h2>Antecedentes de la empresa</h2>
                    <p>A continuación ingrese los documentos que acreditan la información de tu empresa. Los documentos requeridos son los siguientes:</p>
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
                        <div class="input">
                          <label>Sitio web</label>
                          <input type="text" name="sitioweb_st03">
                        </div>
                        <button class="btn-red u-mt50 big" id="submitStep03">Guardar y continuar<i class="fa fa-angle-right"></i></button>
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

  export default {
    name: 'StepOne',
  /*components:{
  },*/
    data () {
      return {

      }
    },
  

  }

</script>