<template>
	<div>
		<main role="main">
			<div class="c-form-steps">
				<div class="container">
				  <div class="row">
				    <div class="col-md-12 col-lg-8 offset-lg-2 form-success">
				      <div class="success-box">
				        <h2>Datos de postulación enviados</h2>
				        <p>Se recibieron correctamente sus datos de postulación. Por favor guarde en un lugar seguro su número de solicitud para poder hacer seguimiento. La Cámara Chilena de la Construcción evaluará y validará los datos ingresados.</p>
				        <div class="success-id"> 
				          <p>SOLICITUD Nº {{this.nroSolicitudGlobal}}</p>
				        </div>
				        <div class="success-data">
				          <div class="box-data"><span>Postulante</span>
				            <p>{{this.globalBusinessName}}</p>
				          </div>
				          <div class="box-data"><span>RUT</span>
				            <p>{{this.rutGlobal}}</p>
				          </div>
				          <div class="box-data"><span>Estado</span>
				            <p>Pendiente</p>
				          </div>
				        </div>
				        <p>Puedes consultar el estado de tu solicitud en el siguiente link:</p><a class="btn-blue">CONSULTAR ESTADO<i>?</i></a>
				      </div>
				    </div>
				  </div>
				</div>
			</div>
	    </main>
	</div>
</template>

<script>
	import { mapState } from 'vuex';

	export default {
		name: 'StepSixSuccess',
		components: {

		},
		data () {
			return {

			}
		},
		methods: {

		},

		computed: {
			...mapState([
		        "nroSolicitudGlobal",
		        "rutGlobal",
		        "globalBusinessName"
		      ]),
		}
	}
</script>