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
  	focus(state) {
  		state.active = 'active'
  		//console.log("test");
  	},

  	blur(state) {
  		state.active = ''
  	},

  	focusRequest(state) {
  		state.activeRequest = 'active'
  		//console.log("test");
  	},

  	blurRequest(state) {
  		state.activeRequest = ''
  	},

  	focusRecovery(state) {
  		state.activeRecovery = 'active'
  		//console.log("test");
  	},

  	blurRecovery(state) {
  		state.activeRecovery = ''
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
