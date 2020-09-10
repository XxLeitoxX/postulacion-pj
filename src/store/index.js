import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	active: '',
  	activeRequest: '',
	activeRecovery: '',
	camaras: []
	  
  },
  mutations: {
  	focus(state, refs) {
  		refs.className = "input active"
  		console.log(refs);
  	},

  	blur(state, refs) {
  		refs.className = "input"
  		console.log(refs);
  		//state.active = ''
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

  }

  
})
