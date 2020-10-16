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
	completedForm: []
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
		console.log(step);
		state.completedForm = step;
		console.log(state.completedForm);
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

	emailForSendSolicitud(state, email) {
		state.emailGlobal = email
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

		  formData.append('files[' + i + ']', file);
		  console.log(file);
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
