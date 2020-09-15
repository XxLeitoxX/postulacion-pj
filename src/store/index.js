import Vue from 'vue'
import Vuex from 'vuex'
import { mapState } from 'vuex'
import { validaRut, telValidate, emailValidate } from "./../validation/validation";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	active: '',
  	rutIsValid: true
	  
  },
  mutations: {
  	focus(state, refs) {
  		refs.className = "input active"
  		//console.log(refs);
  		console.log("test");
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
	

  },
  actions: {
  },
  modules: {

  },

  
})
