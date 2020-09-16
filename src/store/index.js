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
	rutIsValid: true

	  
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

      if (rut !== '') {
        console.log(rut);
        console.log(state.rutIsValid);
        validaRut(rut) ? state.rutIsValid = true : state.rutIsValid = false; 
      }

      if (this.tel !== '') {
        telValidate(this.tel) ? this.telIsValid = true : this.telIsValid = false;
      }

      if (this.email !== '') {
        emailValidate(this.email) ? this.emailIsValid = true : this.emailIsValid = false;
      }

      if (this.emailConfirm !== '') {
         emailValidate(this.emailConfirm) ? this.emailConfirmIsValid = true : this.emailConfirmIsValid = false;
      }
    },
	
	loadCamaras(state, camarasAction) {
		state.camaras = camarasAction
	}

  },

  actions: {

	  getCamaras: async function({commit}) {
		const data = await fetch('https://listarcamaras.free.beeceptor.com/listarCamaras');
		const camaras = await data.json();
		commit('loadCamaras', camaras);
	  }

  },
  modules: {

  },

  
})
