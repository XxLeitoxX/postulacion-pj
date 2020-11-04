import Vue from 'vue'
import Vuex from 'vuex'
import { mapState } from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { validaRut, telValidate, emailValidate, validaURL } from "./../validation/validation";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	active: '',
  	activeRequest: '',
	activeRecovery: '',
	camaras: [],
	tipoSocs: [],
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
	totalEmployees: [],
	selectedTotalEmployees: '',
	range: [],
	selectedRange: '',
	localhost: 'http://localhost:8080',
	URL: 'http://postulacion.isc.cl',
	rutIsValid: '',
	telIsValid: '',
	emailIsValid: '',
	emailConfirmIsValid: '',
	websiteIsValid: '',
	totalEmployeesIsValid: '',
	emailGlobal: '',
	collapse: 'EXPANDIR',
	vueDropzoneFile: [],
	vueDropzoneFileTwo: [],
	vueDropzoneFileThree: [],
	vueDropzoneFileFour: [],
	fileAttacthed: [],
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
	tipoSocDocs: [],
	completedForm: [], 
	rutGlobal: '',
	globalBusinessName: '',
	globalRequestNumber: '',
	nroSolicitudGlobal: '',
	statusRequestGlobal: [],
	processStageRequest: [],
	finalStatus: '',
	showStepOne: true,
	showStepTwo: false,
	showStepThree: false,
	showStepFour: false,
	showStepFive: false,
	showStepSix: false,
	tab1: 'form-tab tab01 active',
	tab2: 'form-tab tab02',
	tab3: 'form-tab tab03',
	tab4: 'form-tab tab04',
	rutPatrocinanteGlobal: [],
	rutPartnersGlobal:[],
	/* Step 3 validation*/
	rutPatrocinanteIsValid: '',
	rutPatrocinante2IsValid: '',
	telPatrocinanteIsValid: '',
	telPatrocinante2IsValid: '',
	emailPatrocinanteIsValid: '',
	emailPatrocinante2IsValid: '',
	/* Step 4 validation*/
	rutRepresentanteCChCIsValid: '',
	telRepresentanteCChCIsValid: '',
	celRepresentanteCChCIsValid: '',
	emailRepresentanteCChCIsValid: '',

	rutContactoCobIsValid: '',
	telContactoCobIsValid: '',
	celContactoCobIsValid: '',
	emailContactoCobIsValid: '',

	rutRepreLegalIsValid: '',
	telRepreLegalIsValid: '',
	celRepreLegalIsValid: '',
	emailRepreLegalIsValid: '',

	emailRecoveryCodeGlobal: ''

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
    getterRutIsValid(state) {
    	return state.rutIsValid;
    },

    getterWebsiteIsValid(state) {
    	return state.websiteIsValid;
    },

    getterTotalEmployees(state) {
    	return state.selectedTotalEmployees;
    },

    getterRange(state) {
    	return state.selectedTotalEmployees;
    },
  },

  mutations: {

	saveCompletedForm(state, step) {
		/*state.completedForm.push(step);
		console.log(state.completedForm);*/
		console.log(step);
		/*var object = [];
		object.push(step);
		console.log(object[0]);*/
		console.log(step[0][0]);
		console.log(step[0]);
		console.log(step[1]);
		console.log(step[0].patrocinantes);
		console.log(state.completedForm);
		/*console.log(state.completedForm[0]);
		console.log(state.completedForm[1]);
		console.log(state.completedForm[2]);
		console.log(state.completedForm[3]);
*/		console.log(state.completedForm.length);
		if (step[1] == 1) {
			state.completedForm.splice(1, 1, step[0][0]);
			console.log(state.completedForm);
		} else if (step[1] == 2) {
			state.completedForm.splice(2, 1, step[0][0]);
			console.log(state.completedForm);
		} else if (step[1] == 3) {
			state.completedForm.splice(3, 1, step[0]);
			console.log(state.completedForm);
		} else if (step[1] == 4) {
			state.completedForm.splice(4, 1, step[0]);
			console.log(state.completedForm);
		} else if (step[1] == 5){
			state.completedForm.splice(5, 1, step[0][0]);
			console.log(state.completedForm);
		}
	},

	activeClass (state, refs) {
  		console.log(refs);
  		if (refs.className == 'form-tab tab01 active') {
  			state.tab1 = 'form-tab tab01 success'
  			state.tab2 = 'form-tab tab02 active'
  		}
  		if (refs.className == 'form-tab tab02 active') {
  			state.tab2 = 'form-tab tab02 success'
  			state.tab3 = 'form-tab tab03 active'
  		}

  		if (refs.className == 'form-tab tab03 active') {
  			state.tab3 = 'form-tab tab02 success'
  			state.tab4 = 'form-tab tab04 active'
  		}

  		if (refs.className == 'form-tab tab04 active') {
  			state.tab4 = 'form-tab tab04 success'
  		}
  		
		
		//refs.className = 'active'
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

  	dateFocus(state, refs){
  		refs.className = 'input active'
  		console.log(refs);
  		//console.log(refs);
  		/*if (refs2 == '' || refs2 == null) {
  			this.dateBlur(refs);
  		} else {
  			refs.className = 'input active'
  		}*/
  	},

  	dateBlur(state, refs) {
  		console.log(refs);
  		/*console.log(refs);
  		if (refs == '' || refs == null) {
  			refs.className = 'input'
  		} else {
  			refs.className = 'input active'
  		}	*/
  		refs.className = 'input'
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
			console.log(state.rutIsValid);
			console.log(rut);
			validaRut(rut) ? state.rutIsValid = true : state.rutIsValid = false; 
		}
	},
	
	rutPatrocinanteValidation(state, rut) {

		if (rut !== '') {
			validaRut(rut) ? state.rutPatrocinanteIsValid = true : state.rutPatrocinanteIsValid = false; 
		}
	},
	
	rutPatrocinante2Validation(state, rut) {

		if (rut !== '') {
			validaRut(rut) ? state.rutPatrocinante2IsValid = true : state.rutPatrocinante2IsValid = false; 
		}
	},
	
	telPatrocinanteValidation(state, tel) {

		if (tel !== '') {
			telValidate(tel) ? state.telPatrocinanteIsValid = true : state.telPatrocinanteIsValid = false; 
		}
	},
	
	telPatrocinante2Validation(state, tel) {

		if (tel !== '') {
			telValidate(tel) ? state.telPatrocinante2IsValid = true : state.telPatrocinante2IsValid = false; 
		}
	},
	
	emailPatrocinanteValidation(state, email) {

		if (email !== '') {
			emailValidate(email) ? state.emailPatrocinanteIsValid = true : state.emailPatrocinanteIsValid = false; 
		}
	},
	
	emailPatrocinante2Validation(state, email) {

		if (email !== '') {
			emailValidate(email) ? state.emailPatrocinante2IsValid = true : state.emailPatrocinante2IsValid = false; 
		}
	},

	rutRepresentanteCChCIsValidation(state, rut) {
		if (rut !== '') {
			validaRut(rut) ? state.rutRepresentanteCChCIsValid = true : state.rutRepresentanteCChCIsValid = false; 
		}
	},

	rutContactoCobIsValidation(state, rut) {
		if (rut !== '') {
			validaRut(rut) ? state.rutContactoCobIsValid = true : state.rutContactoCobIsValid = false; 
		}
	},

	rutRepreLegalIsValidation(state, rut) {
		if (rut !== '') {
			validaRut(rut) ? state.rutRepreLegalIsValid = true : state.rutRepreLegalIsValid = false; 
		}
	},

	telRepresentanteCChCIsValidation(state, tel) {

		if (tel !== '') {
			telValidate(tel) ? state.telRepresentanteCChCIsValid = true : state.telRepresentanteCChCIsValid = false; 
		}
	},

	telContactoCobIsValidation(state, tel) {

		if (tel !== '') {
			telValidate(tel) ? state.telContactoCobIsValid = true : state.telContactoCobIsValid = false; 
		}
	},

	telRepreLegalIsValidation(state, tel) {

		if (tel !== '') {
			telValidate(tel) ? state.telRepreLegalIsValid = true : state.telRepreLegalIsValid = false; 
		}
	},

	celRepresentanteCChCIsValidation(state, cel) {

		if (cel !== '') {
			telValidate(cel) ? state.celRepresentanteCChCIsValid = true : state.celRepresentanteCChCIsValid = false; 
		}
	},

	celContactoCobIsValidation(state, cel) {

		if (cel !== '') {
			telValidate(cel) ? state.celContactoCobIsValid = true : state.celContactoCobIsValid = false; 
		}
	},


	celRepreLegalIsValidation(state, cel) {

		if (cel !== '') {
			telValidate(cel) ? state.celRepreLegalIsValid = true : state.celRepreLegalIsValid = false; 
		}
	},
	
	emailRepresentanteCChCIsValidation(state, email) {

		if (email !== '') {
			emailValidate(email) ? state.emailRepresentanteCChCIsValid = true : state.emailRepresentanteCChCIsValid = false; 
		}
	},

	emailContactoCobIsValidation(state, email) {

		if (email !== '') {
			emailValidate(email) ? state.emailContactoCobIsValid = true : state.emailContactoCobIsValid = false; 
		}
	},

	emailRepreLegalIsValidation(state, email) {

		if (email !== '') {
			emailValidate(email) ? state.emailRepreLegalIsValid = true : state.emailRepreLegalIsValid = false; 
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

    validateURL (state, URL) {
    	if (URL !== '') {
    		validaURL(URL) ? state.websiteIsValid = true : state.websiteIsValid = false;
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
    	console.log(newFile);
      state.vueDropzoneFile = newFile;
    	console.log(state.vueDropzoneFile);
    },

    setVueDropzoneFileTwo(state, newFile) {
    	console.log(newFile);
      state.vueDropzoneFileTwo = newFile;
    	console.log(state.vueDropzoneFileTwo);
    },

    setVueDropzoneFileThree(state, newFile) {
    	console.log(newFile);
      state.vueDropzoneFileThree = newFile;
    	console.log(state.vueDropzoneFileThree);
    },

    setVueDropzoneFileFour(state, newFile) {
    	console.log(newFile);
      state.vueDropzoneFileFour = newFile;
    	console.log(state.vueDropzoneFileFour);
    },

    setRutIsValid(state, newRutIsValid) {
    	if (newRutIsValid == false) {
    		console.log(newRutIsValid);
     		state.rutIsValid = false;
    	} else {
    		state.rutIsValid = true;
    	}
    },

    setWebsiteIsValid(state, newWebsiteIsValid) {
    	if (newWebsiteIsValid == false) {
    		console.log(newWebsiteIsValid);
     		state.websiteIsValid = false;
    	} else {
    		state.websiteIsValid = true;
    	}
    },

    setTotalEmployees(state, newSelectedTotalEmployees) {
    	state.selectedTotalEmployees = newSelectedTotalEmployees;
    	console.log(state.selectedTotalEmployees);
    },

    setRange(state, newSelectedRange) {
    	state.selectedRange = newSelectedRange;
    	console.log(state.selectedRange);
    },


	setStepOneValue(state, newValue) {
    	state.showStepOne = newValue;
    	console.log(state.showStepOne);
    },

    setStepTwoValue(state, newValue) {
    	state.showStepTwo = newValue;
    	console.log(state.showStepTwo);
    },

    setStepThreeValue(state, newValue) {
    	state.showStepThree = newValue;
    	console.log(state.showStepThree);
    },

    setStepFourValue(state, newValue) {
    	state.showStepFour = newValue;
    	console.log(state.showStepFour);
    },

    setStepFiveValue(state, newValue) {
    	state.showStepFive = newValue;
    	console.log(state.showStepFive);
    },

    setStepSixValue(state, newValue) {
    	state.showStepSix = newValue;
    	console.log(state.showStepSix);
    },

    setCompletedForm(state, newCompletedForm) {
    	state.completedForm = newCompletedForm;
    	console.log(state.completedForm);
    },

	emailForSendSolicitud(state, email) {
		state.emailGlobal = email
	},

	nroSolicitudObj(state, nro) {

		state.nroSolicitudGlobal = nro;
		state.completedForm.push({
			nroSolicitud: nro,
		});
	},

	saveRequestNumber(state, number) {
		state.globalRequestNumber = number;
		console.log(state.globalRequestNumber);
	},

	emailRecoveryCode(state, email) {
		state.emailRecoveryCodeGlobal = email;
	},

	rutPatrocinates(state, rutPatrocinantes) {

		console.log(rutPatrocinantes);
		state.rutPatrocinanteGlobal = rutPatrocinantes;
		/*state.rutPatrocinanteGlobal.push({
			rut: rutPatrocinantes,
		});*/
	},

	getRutParnersGlobal(state, parners) {
		state.rutPartnersGlobal = parners;
	},

	getRutGlobal(state, newRut) {
		state.rutGlobal = newRut;
		console.log("Rut global: " + newRut);
	},

	getGlobalBusinessName(state, newBusinessName) {
		state.globalBusinessName = newBusinessName;
		console.log("Business Name: " + state.globalBusinessName);
	},

	saveStatusRequest(state, newStatusRequest) {
		console.log("Status Request: " + newStatusRequest);
		state.statusRequestGlobal.push(newStatusRequest);
		console.log("Status Request: " + state.statusRequestGlobal[0].id_conecta);
	},

	saveProcessStage(state, newProcess) {
		state.processStageRequest.push(newProcess);
		console.log("Stage: " + state.processStageRequest[0].SOL_ID);
		if (state.processStageRequest[0].SOL_ID == 3) {
			state.finalStatus = "Postulación enviada";
		} else if (state.processStageRequest[0].SOL_ID == 11) {
			state.finalStatus = "Verificación de Antecedentes";
		} else if (state.processStageRequest[0].SOL_ID == 12) {
			state.finalStatus = "Verificación de Antecedentes";
		} else if (state.processStageRequest[0].SOL_ID == 13) {
			state.finalStatus = "Verificación de Antecedentes";
		} else if (state.processStageRequest[0].SOL_ID == 4) {
			state.finalStatus = "Evaluación de comisión de socios";
		} else if (state.processStageRequest[0].SOL_ID == 5) {
			state.finalStatus = "Revisión del Directorio";
		} else if (state.processStageRequest[0].SOL_ID == 6) {
			state.finalStatus = "El Área Socios se contactará telefónicamente con usted";
		} else if (state.processStageRequest[0].SOL_ID == 8) {
			state.finalStatus = "Corrección de antecedentes";
		}
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
		
	},

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
		console.log(state.activities);
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

		let formData = new FormData();
		/*
		  Iteate over any file sent over appending the files
		  to the form data.
		*/
		  console.log("before for");
		  console.log(state.vueDropzoneFile.length);
		for( var i = 0; i < state.vueDropzoneFile.length; i++ ){
		  console.log("inside for");
		  let file = state.vueDropzoneFile[i];
		  console.log(file);
		  formData.append('files[' + i + ']', file);
		  console.log(formData);
		}

		//let fd = new FormData();
      	//fd.append('file', state.vueDropzoneFile)
		axios.post( state.URL+'/uploadfile',
                formData,
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

	  companyBackgroundUploadTwo: async function({state}) {
		console.log(state.vueDropzoneFileTwo);

		let formData = new FormData();
		/*
		  Iteate over any file sent over appending the files
		  to the form data.
		*/
		  console.log("before for");
		  console.log(state.vueDropzoneFileTwo.length);
		for( var i = 0; i < state.vueDropzoneFileTwo.length; i++ ){
		  console.log("inside for");
		  let file = state.vueDropzoneFileTwo[i];
		  console.log(file);
		  formData.append('files[' + i + ']', file);
		  console.log(formData);
		}

		//let fd = new FormData();
      	//fd.append('file', state.vueDropzoneFileTwo)
		axios.post( state.URL+'/uploadfile',
                formData,
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

	  companyBackgroundUploadThree: async function({state}) {
		console.log(state.vueDropzoneFileThree);

		let formData = new FormData();
		/*
		  Iteate over any file sent over appending the files
		  to the form data.
		*/
		  console.log("before for");
		  console.log(state.vueDropzoneFileThree.length);
		for( var i = 0; i < state.vueDropzoneFileThree.length; i++ ){
		  console.log("inside for");
		  let file = state.vueDropzoneFileThree[i];
		  console.log(file);
		  formData.append('files[' + i + ']', file);
		  console.log(formData);
		}

		//let fd = new FormData();
      	//fd.append('file', state.vueDropzoneFileThree)
		axios.post( state.URL+'/uploadfile',
                formData,
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

	  companyBackgroundUploadFour: async function({state}) {
		console.log(state.vueDropzoneFileFour);

		let formData = new FormData();
		/*
		  Iteate over any file sent over appending the files
		  to the form data.
		*/
		  console.log("before for");
		  console.log(state.vueDropzoneFileFour.length);
		for( var i = 0; i < state.vueDropzoneFileFour.length; i++ ){
		  console.log("inside for");
		  let file = state.vueDropzoneFileFour[i];
		  console.log(file);
		  formData.append('files[' + i + ']', file);
		  console.log(formData);
		}

		//let fd = new FormData();
      	//fd.append('file', state.vueDropzoneFileFour)
		axios.post( state.URL+'/uploadfile',
                formData,
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

	  getTotalEmployees: async function ({state}) {
		const data = await fetch(state.URL + '/listarNumeroTrabajadores');
		state.totalEmployees = await data.json();
	  	console.log(state.totalEmployees);
	  },

	  getRange: async function({state}) {
		const data = await fetch(state.URL + '/listarRango');
		//const region = await data.json();
		state.range = await data.json();
	  	console.log(state.range);
	  },


  },
  modules: {

  },

  
})
