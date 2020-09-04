<template>
 <main role="main">
     <Cabecera />
      <div class="c-form-steps">
        <div class="c-form-steps__sections">
          <div class="container">
            <div class="c-form-steps__content step-data">
              <div class="row">
                <div class="col-md-12 col-lg-7 offset-lg-2 recovery-form">
                  <h2>RECUPERAR CÓDIGO DE SEGUIMIENTO</h2>
                  <p>Ingrese el RUT de la empresa registrada en el sistema para obtener el codigo de seguimiento asociado.</p>
                  <form action="#" id="loginform">
                    <div class="input">
                      <label>RUT DE LA EMPRESA</label>
                      <input type="text" name="loginrut">
                      <div class="small-text" style="font-size:11px;">Sin puntos y con guión (11111111-1)</div>
                    </div>
                    <button class="btn-red" id="loginSubmit">SOLICITAR CÓDIGO<i class="fa fa-angle-right"></i></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
</template>

<script>

import Cabecera from './../components/Cabecera.vue'

export default {
  name: 'RecoveryCode',
  components: {
    Cabecera,
  },
  data () {
    return {
     
    }
  },
  methods: {


  },

   created: function () {
    
  }
}
</script>