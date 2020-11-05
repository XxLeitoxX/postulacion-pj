<template>
	<div>
		<main role="main" v-if="stepSix">
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
				        <p>Puedes consultar el estado de tu solicitud en el siguiente link:</p><a class="btn-blue" @click="viewStatus">CONSULTAR ESTADO<i>?</i></a>
				      </div>
				    </div>
				  </div>
				</div>
			</div>
	    </main>
	    <RequestStatus v-if="showStatus"></RequestStatus>
	</div>
</template>

<script>
	import { mapState, mapMutations, mapActions } from 'vuex';
	import RequestStatus from '@/views/RequestStatus.vue'
	import axios from 'axios'
	import VueAxios from 'vue-axios'
	export default {
		name: 'StepSixSuccess',
		components: {
			RequestStatus
		},
		data () {
			return {
				stepSix: true,
				showStatus: '',
			}
		},
		methods: {
			...mapActions(['getRequestNumber']),
			...mapMutations(['saveProcessStage', 'setStageRequest']),

			viewStatus() {
				this.stepSix = false;
				this.showStatus = true;
				this.getRequestNumber(this.rutGlobal);
				//console.log(this.statusRequest[0].id_conecta);
				this.process(this.requestDefinitive);
			},

			process (idConecta) {
		      console.log(idConecta)
		      axios.get(this.URL + '/stage/' + idConecta).then((response) => {
		        let stage = response.data;
		        console.log(stage);
		        //console.log(status[0].object);
		        //this.statusRequest = JSON.parse(status[0].id_conecta);
		        this.setStageRequest(stage);
		        //console.log(this.stageRequest);
		        //console.log(this.stageRequest[0]);
		        this.saveProcessStage(this.stageRequest[0]);
		      }).catch(function (error) {
		        console.log("AXIOS ERROR: ", error);
		      });
	        }
		},

		computed: {
			...mapState([
		        "nroSolicitudGlobal",
		        "rutGlobal",
		        "globalBusinessName",
		        "statusRequest",
		        "stageRequest",
		        "requestDefinitive",
		        "URL"
		      ]),
		}
	}
</script>