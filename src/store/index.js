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
	emailGlobal: ''

	  
  },
  mutations: {
  	focus(state, refs) {
  		refs.className = "input active"
  		//console.log(refs);
	},
	  
  	blur(state, refs) {
  		if (refs[1] == "") {

  			refs[0].className = "input"
  		} else {
  			refs[0].className = "input active"
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
