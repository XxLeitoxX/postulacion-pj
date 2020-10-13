<template>
    <main role="main">
        <Cabecera />
      <div class="c-form-steps">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-lg-8 offset-lg-2 form-success">
              <div class="success-box">
                <h2>Datos de postulación enviados</h2>
                <p>Se recibieron correctamente sus datos de postulación. Por favor guarde en un lugar seguro su número de solicitud para poder hacer seguimiento. La Cámara Chilena de la Construcción evaluará y validará los datos ingresados.</p>
                <div class="success-id"> 
                  <p>SOLICITUD Nº 18768763287</p>
                </div>
                <div class="success-data">
                  <div class="box-data"><span>Postulante</span>
                    <p>Gustavo Andrés González Urrutia</p>
                  </div>
                  <div class="box-data"><span>RUT</span>
                    <p>11111111-1</p>
                  </div>
                  <div class="box-data"><span>Estado</span>
                    <p>Pendiente</p>
                  </div>
                </div>
                <p>Puedes consultar el estado de tu solicitud en el siguiente link:</p><a class="btn-blue" href="estado-postulacion.html">CONSULTAR ESTADO<i>?</i></a>
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
  name: 'SuccessForm',
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