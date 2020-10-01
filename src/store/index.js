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
	URL: 'http://postulacion.isc.cl',
	rutIsValid: true,
	telIsValid: true,
	emailIsValid: true,
	emailConfirmIsValid: true,
	collapse: 'EXPANDIR',
	vueDropzoneFile: []
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
  	focus(state, refs) {
  		refs.className = 'input active'
  		//console.log(refs);
  		//console.log(refs);
	},
	  
  	blur(state, refs) {
  		if (refs[1] == '') {

  			refs[0].className = 'input'
  		} else {
  			refs[0].className = 'input active'
  		}
  		//console.log(refs);
  		//console.log(refs[1]);
  		//state.active = ''
  	},

  	collapseClick(state, refs) {
  		if (refs[0].className == 'c-form-drag whitebg small font') {
  			refs[0].className = 'c-form-drag whitebg font'
  			refs[1].innerText = 'MINIMIZAR'
  		}else if(refs[0].className == 'c-form-drag whitebg font') {
  			refs[0].className = 'c-form-drag whitebg small font'
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

  },

  actions: {

	  getCamaras: async function({commit}) {
		const data = await fetch('https://listarcamaras.free.beeceptor.com/listarCamaras');
		const camaras = await data.json();
		commit('loadCamaras', camaras);
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
