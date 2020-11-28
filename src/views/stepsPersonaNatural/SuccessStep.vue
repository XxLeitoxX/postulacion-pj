<template>
	<div>
		<Cabecera v-show="head"></Cabecera>
		<main role="main" v-if="stepSix">
			<div class="c-form-steps">
				<div class="container">
				  <div class="row">
				    <div class="col-md-12 col-lg-8 offset-lg-2 form-success">
				      <div class="success-box">
				        <h2>Datos de postulación enviados</h2>
				        <p>Se recibieron correctamente sus datos de postulación. Por favor guarde en un lugar seguro su número de solicitud para poder hacer seguimiento. La Cámara Chilena de la Construcción evaluará y validará los datos ingresados.</p>
				        <div class="success-id"> 
				          <p>SOLICITUD Nº {{this.globalRequestNumber}}</p>
				        </div>
				        <div class="success-data">
				          <div class="box-data"><span>Postulante</span>
				            <p>{{this.globalName}} {{this.globalLastname}} {{this.globalSecondLastName}}</p>
				          </div>
				          <div class="box-data"><span>RUT</span>
				            <p>{{this.rutGlobal}}</p>
				          </div>
				          <div class="box-data"><span>Estado</span>
				            <p>Pendiente</p>
				          </div>
				        </div>
				        <p>Puedes consultar el estado de tu solicitud en el siguiente link:</p>
				        	<a class="btn-blue" @click="viewStatus">
				        		CONSULTAR ESTADO<i>?</i>
				        	</a>
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
	import Cabecera from "@/components/Cabecera.vue";
	import { mapState, mapMutations, mapActions } from 'vuex';
	import RequestStatus from '@/views/RequestStatus.vue'
	import axios from 'axios'
	import VueAxios from 'vue-axios'
	export default {
		name: 'SuccessStep',
		components: {
			RequestStatus,
			Cabecera
		},
		data () {
			return {
				stepSix: true,
				showStatus: '',
				idRequest: '',
				head: true,
			}
		},
		methods: {
			...mapActions(['getRequestNumber']),
			...mapMutations(['saveProcessStage', 'setStageRequest', 'setFinalStatus',
				'setCheck1', 'setCheck2', 'setCheck3', 'setCheck4', 'setCheck5', 'setCheck6']),

			viewStatus() {
				this.stepSix = false;
				this.showStatus = true;
				this.head = false;
				this.request(this.rutGlobal);
				console.log(this.statusRequest);
				console.log(this.idRequest);
				
			},

			request(rut) {
				axios.get(this.URL + '/buscarPostulante/' + rut).then((response) => {
		        let data = response.data;
		        console.log(data);
		        let requestNumber = data[0].nro_solicitud;
		        console.log(requestNumber);
		        console.log(requestNumber);
		        //commit('saveRequestNumber', state.requestNumber);
		        this.requestIdConecta(requestNumber);
		      }).catch(function (error) {
		      console.log("AXIOS ERROR: ", error);
		      });
			},
 
			requestIdConecta(number) {
				console.log(number);
				let requestNumber = number;
				axios.get(this.URL + '/status/' + requestNumber).then((response) => {
			        let data = response.data;
			        //let test = JSON.parse(data);
			        console.log(data[0].id_conecta);
			        console.log("data: " + data);
			        let statusRequest;
			        for (const key in data) {
					  console.log("key", key);
					  console.log("value", data[key]);
					  statusRequest = data[0];
					}
			        //console.log(status[0].object);
			        //this.statusRequest = JSON.parse(status[0].id_conecta);
			        let status = data[0].status;
			        console.log(data[0].status);
			        console.log(statusRequest);
			        this.idRequest = statusRequest;
			        this.process(this.idRequest);
			      }).catch(function (error) {
			        console.log("AXIOS ERROR: ", error);
			      });
			},

			process (idConecta) {
		      console.log(idConecta.id_conecta);
		      axios.get(this.URL + '/stage/' + idConecta.id_conecta).then((response) => {
		        let stage = response.data;
		        console.log(stage);
		        console.log(stage[0].ID_ESTADO);
		        //console.log(status[0].object);
		        //this.statusRequest = JSON.parse(status[0].id_conecta);
		        //this.setStageRequest(stage);
		        //console.log(this.stageRequest);
		        //console.log(this.stageRequest[0]);
		        //this.saveProcessStage(this.stageRequest);
		        this.saveProcess(stage[0].ID_ESTADO);
		      }).catch(function (error) {
		        console.log("AXIOS ERROR: ", error);
		      });
	        },

	        saveProcess(idEstado){
	        	console.log("Stage: " + idEstado);
				if (idEstado == 3) {
					this.setFinalStatus("Postulación enviada");
				} else if (idEstado == 11) {
					this.setFinalStatus("Verificación de Antecedentes");
				} else if (idEstado == 12) {
					this.setFinalStatus("Verificación de Antecedentes");
				} else if (idEstado == 13) {
					this.setFinalStatus("Verificación de Antecedentes");
				} else if (idEstado == 5) {
					this.setFinalStatus("Evaluación de comisión de socios");
				} else if (idEstado == 9) {
					this.setFinalStatus("Revisión del Directorio");
				} else if (idEstado == 6) {
					this.setFinalStatus("El Área Socios se contactará telefónicamente con usted");
				} else if (idEstado == 8) {
					this.setFinalStatus("Corrección de antecedentes");
				}

				if (idEstado == 3) {
			        this.setCheck1("c-steps-numbers__item orange");
			        this.setCheck2('c-steps-numbers__item checkSecond')
			        this.setCheck3('c-steps-numbers__item checkThird')
			        this.setCheck4('c-steps-numbers__item checkFourth')
			        this.setCheck5('c-steps-numbers__item checkFifth')
			        this.setCheck6('c-steps-numbers__item checkSixth')
			    }
			      if (idEstado == 11) {
			        this.setCheck2("c-steps-numbers__item yellow");
			        this.setCheck1("c-steps-numbers__item orange");
			        this.setCheck3('c-steps-numbers__item checkThird')
			        this.setCheck4('c-steps-numbers__item checkFourth')
			        this.setCheck5('c-steps-numbers__item checkFifth')
			        this.setCheck6('c-steps-numbers__item checkSixth')
			      }
			      if (idEstado == 5 || idEstado == 6
			        || idEstado == 8) {
			        console.log("Soy blue");
			        this.setCheck3("c-steps-numbers__item blue");
			        this.setCheck1("c-steps-numbers__item orange");
			        this.setCheck2('c-steps-numbers__item yellow')
			        this.setCheck4('c-steps-numbers__item checkFourth')
			        this.setCheck5('c-steps-numbers__item checkFifth')
			        this.setCheck6('c-steps-numbers__item checkSixth')
			      }
			      if (idEstado == 9 || idEstado == 6) {
			        this.setCheck4("c-steps-numbers__item green");
			        this.setCheck1("c-steps-numbers__item orange");
			        this.setCheck2('c-steps-numbers__item yellow')
			        this.setCheck3('c-steps-numbers__item blue');
			        this.setCheck5('c-steps-numbers__item checkFifth')
			        this.setCheck6('c-steps-numbers__item checkSixth')
			      }
			      if (idEstado == 9) {
			        this.setCheck5("c-steps-numbers__item purple");
			        this.setCheck1("c-steps-numbers__item orange");
			        this.setCheck2('c-steps-numbers__item yellow')
			        this.setCheck3('c-steps-numbers__item blue');
			        this.setCheck4("c-steps-numbers__item green");
			        this.setCheck6('c-steps-numbers__item checkSixth')
			      }
			      if (idEstado == 9 && idEstado == 1) {
			        this.setCheck6('c-steps-numbers__item lightorange')
			        this.setCheck1("c-steps-numbers__item orange");
			        this.setCheck2('c-steps-numbers__item yellow')
			        this.setCheck3('c-steps-numbers__item blue');
			        this.setCheck4("c-steps-numbers__item green");
			        this.setCheck5('c-steps-numbers__item purple')
			      }
	        }
		},

		computed: {
			...mapState([
		        "globalRequestNumber",
		        "rutGlobal",
		        "globalName",
		        "globalLastname",
		        "globalSecondLastName",
		        "statusRequest",
		        "stageRequest",
		        "requestDefinitive",
		        "URL",
		        "finalStatus",
		        "check1",
		        "check2",
		        "check3",
		        "check4",
		        "check5",
		        "check6"
		      ]),
		},

		created: function() {
		}
	}
</script>