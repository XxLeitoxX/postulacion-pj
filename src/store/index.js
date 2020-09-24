import Vue from 'vue'
import Vuex from 'vuex'
import { mapState } from 'vuex'
import { validaRut, telValidate, emailValidate } from "./../validation/validation";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	active: '',
  	activeRequest: '',
	activeRecovery: '',
	camaras: [],
	URL: 'http://localhost:8080',
	ISC: 'https://listarcamaras.free.beeceptor.com',
	rutIsValid: true,
	telIsValid: true,
	emailIsValid: true,
	emailConfirmIsValid: true,
	collapse: 'EXPANDIR',
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
  		if (refs[0].className == 'c-form-drag whitebg small') {
  			refs[0].className = 'c-form-drag whitebg'
  			refs[1].innerText = 'MINIMIZAR'
  		}else if(refs[0].className == 'c-form-drag whitebg') {
  			refs[0].className = 'c-form-drag whitebg small'
  			refs[1].innerText = 'EXPANDIR'
  		}
  		if (refs[0].className == 'c-form-steps small'){
  			refs[0].className = 'c-form-steps'
  			refs[1].innerText = 'MINIMIZAR'
  		}else if(refs[0].className == 'c-form-steps') {
  			refs[0].className = 'c-form-steps small'
  			refs[1].innerText = 'EXPANDIR'
  		}
  		//console.log(refs);
  	},

  	rutValidation(state, rut, phone, email, emailConfirm) {

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

	loadCamarasTest(state, camarasAction) {
		state.camaras = camarasAction
	},

  },

  actions: {

	  getCamaras: async function({commit}) {
		const data = await fetch('https://listarcamaras.free.beeceptor.com/listarCamaras');
		const camaras = await data.json();
		commit('loadCamaras', camaras);
	  },

	  /*getCamarasTest: async function({state, commit}) {
		const data = await fetch(state.ISC + '/listarCamaras');
		console.log(data);
		const camaras = await data.json();
		commit('loadCamaras', camaras);
	  },*/

  },
  modules: {

  },

  
})
