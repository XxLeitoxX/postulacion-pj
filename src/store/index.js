import Vue from 'vue'
import Vuex from 'vuex'
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
	rutIsValid: true,
	telIsValid: true,
	emailGlobal: '',
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

	loadTipoSocs(state, tipoSocsAction) {
		state.tipoSocs = tipoSocsAction
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
	  }


  },
  modules: {

  },

  
})
