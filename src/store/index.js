import Vue from 'vue'
import Vuex from 'vuex'
import { mapState } from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

import { validaRut, telValidate, emailValidate } from "./../validation/validation";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	active: '',
  	activeRequest: '',
	activeRecovery: '',
	camaras: [],
	tipoSocs: [],
	URL: 'http://postulacion.isc.cl',
	URLEmail: 'http://postulacionweb.isc.cl', 
	regions: [],
	selectedRegion: '',
	provinces: [],
	selectedProvince: '',
	communes: [],
	selectedCommune: '',
	activities: [],
	selectedActivity: '',
	categories: [],
	selectedCategory: '',
	localhost: 'http://localhost:8080',
	rutIsValid: true,
	telIsValid: true,
	emailGlobal: '',
	emailIsValid: true,
	emailConfirmIsValid: true,
	collapse: 'EXPANDIR',
	vueDropzoneFile: [],
	postulacionCompleted: [{}],
	//resLimitadaDocsShow: false,
	resLimitadaDocs: [],
	socResLimitadaDocs: [],
	socColectivaDocs: [],
	socAccionesDocs:[],
	socAnonimaDocs:[],
	socComanditaDocs:[],
	corDerechoDocs:[],
	fundacionDocs:[],
	universidadDocs:[],
	tipoSocDocs: []
  },

  getters: {
    getterRegion(state) {
      return state.selectedRegion;
    },
    getterProvince(state) {
    	return state.selectedProvince;
    },

    getterCommune(state) {
    	return state.selectedCommune;
    },

    getterActivity(state) {
    	return state.selectedActivity;
    },

    getterCategory(state) {
    	return state.selectedCategory;
    },
    getterCategory(state) {
    	return state.selectedCategory;
    },
    getterVueDropzoneFile(state) {
    	return state.vueDropzoneFile;
    },
  },

  mutations: {

	savePostulacionCompleted(state, step) {
		state.postulacionCompleted.push(step);
	},
  	focus(state, refs) {
  		refs.className = 'input active'
  		console.log(refs);
  		//console.log(refs);
	},
	  
  	blur(state, refs) {
  		if (refs[1] == '') {

  			refs[0].className = 'input'
  		} else {
  			refs[0].className = 'input active'
  		}
  		console.log(refs);
  		console.log(refs[1]);
  		//state.active = ''
  	},


  	validation(state, rut, tel, email, emailConfirm) {
		//console.log(rut);
      if (rut !== '') {
        validaRut(rut) ? state.rutIsValid = true : state.rutIsValid = false; 
      }
	  //console.log(tel);
      if (tel !== '') {
        telValidate(tel) ? state.telIsValid = true : state.telIsValid = false;
      }
	  //console.log(email);
      if (this.email !== '') {
        emailValidate(this.email) ? this.emailIsValid = true : this.emailIsValid = false;
      }
	  //console.log(emailConfirm);
      if (this.emailConfirm !== '') {
         emailValidate(this.emailConfirm) ? this.emailConfirmIsValid = true : this.emailConfirmIsValid = false;
	  }
	},

  	collapseClick(state, refs) {
		
		if (refs[0].className == 'c-form-drag whitebg small font') {
			refs[0].className = 'c-form-drag whitebg font'
			refs[1].innerText = 'MINIMIZAR'
		}else if(refs[0].className == 'c-form-drag whitebg font') {
			refs[0].className = 'c-form-drag whitebg small font'
			refs[1].innerText = 'EXPANDIR'
		}

		if (refs[0].className == 'c-form-steps whitebg small') {
			refs[0].className = 'c-form-steps whitebg'
  			refs[1].innerText = 'MINIMIZAR'
		}else if(refs[0].className == 'c-form-steps whitebg') {
			refs[0].className = 'c-form-steps whitebg small'
			refs[1].innerText = 'EXPANDIR'
		}
		if (refs[0].className == 'c-form-steps greybg small') {
			refs[0].className = 'c-form-steps greybg'
  			refs[1].innerText = 'MINIMIZAR'
		}else if(refs[0].className == 'c-form-steps greybg') {
			refs[0].className = 'c-form-steps greybg small'
			refs[1].innerText = 'EXPANDIR'
		}
  		
  		if (refs[0].className == 'c-form-steps small font'){
  			refs[0].className = 'c-form-steps font'
  			refs[1].innerText = 'MINIMIZAR'
  		}else if(refs[0].className == 'c-form-steps font') {
  			refs[0].className = 'c-form-steps small font'
  			refs[1].innerText = 'EXPANDIR'
  		}
  		//console.log(refs);
	  },
	  
	collapseClickStep3(state, refs) {

		if (refs[0].className == 'c-form-drag whitebg small') {
			refs[0].className = 'c-form-drag whitebg'
			refs[1].innerText = 'MINIMIZAR'
		}else if(refs[0].className == 'c-form-drag whitebg') {
			refs[0].className = 'c-form-drag whitebg small'
			refs[1].innerText = 'EXPANDIR'
		}
	},

  	rutValidation(state, rut) {

		if (rut !== '') {
			console.log(rut);
			console.log(state.rutIsValid);
			validaRut(rut) ? state.rutIsValid = true : state.rutIsValid = false; 
		}
    },

    phoneNumberValidation (state, phone) {
    	if (phone !== '') {
	        console.log(phone);
	        telValidate(phone) ? state.telIsValid = true : state.telIsValid = false;
      	}
    },

    emailValidation (state, email) {
    	if (email !== '') {
        	emailValidate(email) ? state.emailIsValid = true : state.emailIsValid = false;
     	}
    },

    confirmEmailValidation(state, emailConfirm) {
    	if (emailConfirm !== '') {
        	emailValidate(emailConfirm) ? state.emailConfirmIsValid = true : state.emailConfirmIsValid = false;
      	}

    },
	
	loadCamaras(state, camarasAction) {
		state.camaras = camarasAction
	},


	loadTipoSocs(state, tipoSocsAction) {
		state.tipoSocs = tipoSocsAction
	},

	setRegion(state, newRegion) {
      state.selectedRegion = newRegion;
    },

    setProvince(state, newProvince) {
      state.selectedProvince = newProvince;
    },

    setCommune(state, newCommune) {
      state.selectedCommune = newCommune;
    },

    setActivity(state, newActivity) {
      state.selectedActivity = newActivity;
    },

    setCategory(state, newCategory) {
      state.selectedCategory = newCategory;
    },

    setVueDropzoneFile(state, newFile) {
      state.vueDropzoneFile = newFile;
    },


	emailForSendSolicitud(state, email) {
		state.emailGlobal = email
	},

	tipoSocSendDoc(state, tipo) {
		console.log(tipo);

		if (tipo == 'EIRL') {
			state.resLimitadaDocs = ['Escritura Pública de Constitución',
									 'Inscripción Extracto de la Constitución en el Registro de Comercio correspondiente',
									 'Publicación en el Diario Oficial',
									 'Protocolización Notarial de la Constitución, según los términos del Código de Comercio y Leyes especiales',
									 'Escrituras Públicas de Modificaciones (incluidas transformaciones), si existieren',
									 'Inscripción de Modificación en el Registro de Comercio correspondiente',
									 'Publicación en el Diario Oficial del Extracto de la Modificación',
									 'Protocolización Notarial de la Modificación, según los términos del Código de Comercio y Leyes especiales',
									 'Certificados del Registro de Comercio Correspondiente',
									 'Copia de inscripción de la Constitución de una Sociedad con anotaciones marginales, con vigencia',
									 'Certificado de Vigencia de Poder',
									 'Poderes Vigentes (Personerías). En este caso generalmente se encuentran en la escritura de Constitución o en alguna escritura de modificación'
		   							];
			state.tipoSocDocs.push(state.resLimitadaDocs);
		}
		if (tipo == 'SRL') {
			state.socResLimitadaDocs = ['Escritura Pública de Constitución', 'Inscripción Extracto de la Constitución en el Registro de Comercio correspondiente', 
										'Publicación en el Diario Oficial', 'Protocolización Notarial de la Constitución, según los términos del Código de Comercio y Leyes especiales',
										'Escrituras Públicas de Modificaciones (incluidas transformaciones) Sociales, si existieren', 'Inscripción de Modificación en el Registro de Comercio correspondiente',
										'Publicación en el Diario Oficial del Extracto de la Modificación', 'Protocolización Notarial de la Modificación, según los términos del Código de Comercio y Leyes especiales',
										'Certificados del Registro de Comercio Correspondiente', 'Copia de inscripción de la Constitución de una Sociedad con anotaciones marginales, con vigencia',
										'Certificado de Vigencia de Poder', 'Poderes Vigentes (Personerías). En este caso generalmente se encuentran en la escritura de Constitución o en alguna escritura de modificación social'
									   ];
			state.tipoSocDocs.push(state.socResLimitadaDocs);
		}
		if (tipo == 'SC') {
			state.socColectivaDocs = ['Constitución', 'Modificación', 'Vigencia', 'Estatuto Actualizado', 
			'Anotaciones', 'Migración (si fuera del caso)', 'Escritura Pública de Constitución',
			'Inscripción Extracto de la Constitución en el Registro de Comercio Correspondiente',
			'Publicación en el Diario Oficial',
			'Protocolización Notarial de la Constitución, según los términos del Código de Comercio y Leyes especiales',
			'Escrituras Pública de Modificaciones (incluidas transformaciones) Sociales, si existieren',
			'Inscripción de Modificación en el Registro de Comercio correspondiente',
			'Publicación en el Diario Oficial del Extracto de la Modificación',
			'Protocolización Notarial de la Modificación, según los términos del Código de Comercio y Leyes especiales',
			'Poderes Vigentes (Personerías). En este caso, generalmente se encuentran en la escritura de Constitución o en alguna escritura de modificación social',
			'Certificados del Registro de Comercio correspondiente',
			'Copia de Inscripción de la Constitución de una Sociedad con anotaciones marginales con vigencia',
			'Certificado de Vigencia de Poder'
		   ];
			state.tipoSocDocs.push(state.socColectivaDocs);
		}
		if (tipo == 'SAC') {
			state.socAccionesDocs = ['Escritura Pública de Constitución', 
									 'Inscripción Extracto de la Constitución en el Registro de Comercio correspondiente',
									 'Publicación en el Diario Oficial',
									 'Protocolización Notarial de la Constitución, según los términos del Código de Comercio y Leyes especiales',
									 'Escrituras Públicas de Modificaciones (incluidas transformaciones) Sociales, si existieren',
									 'Inscripción de Modificación en el Registro de Comercio correspondiente',
									 'Publicación en el Diario Oficial del Extracto de la Modificación',
									 'Protocolización Notarial de la Modificación, según los términos del Código de Comercio y Leyes especiales',
									 'Reducción a Escritura Pública de Actas de Directorio donde consten los Poderes Vigentes de la Sociedad (una o más según corresponda)',
									 'Certificados del Registro de Comercio Correspondiente',
									 'Copia de inscripción de la Constitución de una Sociedad con anotaciones marginales, con vigencia',
									 'Certificado de Inscripción de Poderes, si correspondiere' 
									];
			state.tipoSocDocs.push(state.socAccionesDocs);
		}
		if (tipo == 'SA') {
			state.socAnonimaDocs = ['Escritura Pública de Constitución', 
									'Inscripción Extracto de la Constitución en el Registro de Comercio correspondiente', 
									'Publicación en el Diario Oficial',
									'Protocolización Notarial de la Constitución, según los términos del Código de Comercio y Leyes especiales',
									'Escrituras Públicas de Modificaciones (incluidas transformaciones) Sociales, si existieren',
									'Inscripción de Modificación en el Registro de Comercio correspondiente',
									'Publicación en el Diario Oficial del Extracto de la Modificación',
									'Protocolización Notarial de la Modificación, según los términos del Código de Comercio y Leyes especiales',
									'Reducción a Escritura Pública de Actas de Directorio donde consten los Poderes Vigentes de la Sociedad (una o más según corresponda)',
									'Certificados del Registro de Comercio Correspondiente',
									'Copia de inscripción de la Constitución de una Sociedad con anotaciones marginales, con vigencia',
									'Certificado de Inscripción de Poderes, si correspondiere'
								   ];
			state.tipoSocDocs.push(state.socAnonimaDocs);
		}
		if (tipo == 'SCO') {
			state.socComanditaDocs = ['Escritura Pública de Constitución', 
									  'Inscripción Extracto de la Constitución en el Registro de Comercio correspondiente', 
									  'Publicación en el Diario Oficial',
									  'Protocolización Notarial de la Constitución, según los términos del Código de Comercio y Leyes especiales',
									  'Escrituras Públicas de Modificaciones (incluidas transformaciones) Sociales, si existieren',
									  'Inscripción de Modificación en el Registro de Comercio correspondiente',
									  'Publicación en el Diario Oficial del Extracto de la Modificación',
									  'Protocolización Notarial de la Modificación, según los términos del Código de Comercio y Leyes especiales',
									  'Certificados Registro de Comercio Correspondiente',
									  'Copia de Inscripción de la Constitución de una Sociedad con anotaciones marginales con vigencia',
									  'Certificado de Vigencia de Poder',
									  'Poderes Vigentes (Personerías). En este caso generalmente se encuentran en la escritura de Constitución o en alguna escritura de modificación social'];
			state.tipoSocDocs.push(state.socComanditaDocs);
		}
		if (tipo == 'CDP') {
			state.corDerechoDocs = ['El acto por medio del cual se constituyó la corporación o la fundación, que puede ser escritura pública o escritura privada suscrita ante notario', 
									'Oficio de la Secretaría Municipal de la Municipalidad correspondiente al domicilio, la que aprueba la constitución o modificación de los Estatutos de la corporación o fundación', 
									'Inscripción de la entidad en el Registro Nacional de Personas Jurídicas del Servicio de Registro Civil e Identificación (se acredita mediante certificado de personalidad jurídica vigente. También se solicita en este Registro el certificado de composición del Directorio)'
		  ];
			state.tipoSocDocs.push(state.corDerechoDocs);
		}

		if (tipo == 'FUN') {
			state.fundacionDocs = ['El acto por medio del cual se constituyó la corporación o la fundación, que puede ser escritura pública o escritura privada suscrita ante notario', 
									'Oficio de la Secretaría Municipal de la Municipalidad correspondiente al domicilio, la que aprueba la constitución o modificación de los Estatutos de la corporación o fundación', 
									'Inscripción de la entidad en el Registro Nacional de Personas Jurídicas del Servicio de Registro Civil e Identificación (se acredita mediante certificado de personalidad jurídica vigente. También se solicita en este Registro el certificado de composición del Directorio)'
								  ];
			state.tipoSocDocs.push(state.fundacionDocs);
		}

		if (tipo == 'UNI') {
			state.socResLimuniversidadDocsitadaDocs = ['Doc 4', 'Doc 5', 'Doc 6'];
			state.tipoSocDocs.push(state.universidadDocs);
		}
		
	}

  },

  actions: {

	  getCamaras: async function({commit, state}) {
		const data = await fetch(state.URL + '/listarCamaras');
		const camaras = await data.json();
		commit('loadCamaras', camaras);
	  },

	  getTipoSociedad: async function({commit, state}) {
		const data = await fetch(state.URL + '/listarTipoSoc');
		const tipoSocs = await data.json();
		commit('loadTipoSocs', tipoSocs);
	  },

	  getActivity: async function({state}) {
		const data = await fetch(state.URL + '/listarActividad');
		//const region = await data.json();
		state.activities = await data.json();
	  },

	  getCategory: async function({state}) {
		const data = await fetch(state.URL + '/listarCategoria');
		//const region = await data.json();
		state.categories = await data.json();
	  	console.log(state.categories);
	  },

	  getRegion: async function({state}) {
	  	const headers = { "Content-Type": "application/json" };
		const data = await fetch(state.URL + '/listarRegion');
		//const region = await data.json();
		state.regions = await data.json();
	  },

	  getProvince: async function({state}) {
	  	console.log(state.selectedRegion);
		const data = await fetch(state.URL + '/listarProvincias/' + state.selectedRegion);
		//const province = await data.json();
		state.provinces = await data.json();
	  },

	  getCommune: async function({state}) {
	  	console.log(state.selectedProvince);
		const data = await fetch(state.URL + '/listarComuna/' + state.selectedProvince);
		state.communes = await data.json();
	  	console.log(state.communes);
	  },

	  /*SET_NAME(context, newName) {
	    context.commit("setName", newName);
	  },*/

	  companyBackgroundUpload: async function({state}) {
		/*const data = await fetch(state.URL + '/uploadfile');
		console.log(data);
		const camaras = await data.json();
		commit('loadCamaras', camaras);*/

		console.log(state.vueDropzoneFile);
		/*const requestOptions = {
		    method: "POST",
		    headers: { "Content-Type": "application/json" },
		    body: JSON.stringify({ file: state.vueDropzoneFile })
		};
		const response = await fetch(state.URL + '/uploadfile', requestOptions);
		const data = await response.json();
		console.log(data);*/
		//this.postId = data.id;
		let fd = new FormData();
      	fd.append('file', this.state.vueDropzoneFile)
		axios.post( state.URL+'/uploadfile',
                fd,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }
            ).then(function(){
          console.log('SUCCESS!!');
        })
        .catch(function(){
          console.log('FAILURE!!');
        });
	  },


  },
  modules: {

  },

  
})
