<template>
 <main role="main">
      <div class="c-login">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6 c-login__st">
              <div class="c-login__st-box">
                <h2>Postulación <br><strong>Nuevos Socios</strong></h2>
                <p>Quiero iniciar un nuevo<br>proceso de postulación.</p><router-link to="/datos-basicos" class="btn-red btn-login">INICIAR Proceso<i class="fa fa-angle-right"></i></router-link>
                <p>¿DUDAS SOBRE EL PROCESO?</p>
                <ul>
                  <li><a href="https://bitbanglab.cl/clientes/cchc/cchc_109_postulantes/html/php/" target="_blank">Cómo postular<span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.6653 2.33206L7.66532 10.3321L6.04907 8.71582L14.0491 0.71582L15.6653 2.33206Z" fill="#00B29A"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9.14286 2.28571L13.7143 2.28571V6.85714H16V0H9.14286V2.28571ZM4.57143 2.28571V0H0V16H16V11.4286H13.7143V13.7143H2.28571V2.28571L4.57143 2.28571Z" fill="#00B29A"/></svg></span></a></li>
                  <li><a href="https://bitbanglab.cl/clientes/cchc/cchc_109_postulantes/html/php/contacto.php" target="_blank">Contacta el ejecutivo <br>según tu región<span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.6653 2.33206L7.66532 10.3321L6.04907 8.71582L14.0491 0.71582L15.6653 2.33206Z" fill="#00B29A"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9.14286 2.28571L13.7143 2.28571V6.85714H16V0H9.14286V2.28571ZM4.57143 2.28571V0H0V16H16V11.4286H13.7143V13.7143H2.28571V2.28571L4.57143 2.28571Z" fill="#00B29A"/></svg></span></a></li>
                </ul><a class="btn-inline" href="http://cchc.cl/" target="_blank">VOLVER A CCHC.CL</a>
              </div>
            </div>
            <div class="col-sm-12 col-md-6 c-login__con">
              <div class="c-login__con-box">
                <h2> <strong>Continuar </strong>Proceso <br>de solicitud</h2>
                <p>Tengo un proceso iniciado y me gustaría retomarlo o quiero ver el estado de mi postulación</p>
                <form action="#" id="loginform">
                  <div class="input" ref="rut">
                    <label>RUT DE LA EMPRESA</label>
                    <input type="text" name="loginrut" @focus="$store.commit('focus', $refs.rut)" @blur="$store.commit('blur', $refs.rut)" v-model="rut">
                    <div class="small-text" style="font-size:11px;">Sin puntos y con guión (11111111-1)</div>
                  </div>
                  <div class="input" ref="solicitud">
                    <label>NÚMERO DE SOLICITUD</label>
                    <input type="text" name="loginsolicitud" @focus="$store.commit('focus', $refs.solicitud)" @blur="$store.commit('blur', $refs.solicitud)" v-model="numeroSolicitud"><span aria-label="Este número fue enviado al correo electrónico de la persona que inició el proceso" data-microtip-position="right" role="tooltip">?</span>
                  </div>
                  <button class="btn-blue" id="loginSubmit">Continuar proceso<i class="fa fa-angle-right"></i></button>
                </form><router-link to="/recovery-form" class="recovery">Recuperar código de seguimiento</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
</template>

<script>
export default {
  name: 'HomeContent',
  data () {
    return {
      rut: '',
      numeroSolicitud: ''
    }
  },
  methods: {

    inputFocus() {
      
      //this.isActive = 'active';
      //console.log(this.ref);
      //this.$store.commit('focus',this.$refs);

    },

    inputBlur() {

    },

  },


   created: function () {
    
  }
}
</script>
