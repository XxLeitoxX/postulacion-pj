import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	active: '',
  	activeRequest: '',
  	activeRecovery: ''
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


  },
  actions: {
  },
  modules: {
  }
})
