<template>
<div>
   <Cabecera />
   <HomeContent />
</div>
</template>

<script>
// @ is an alias to /src
import Cabecera from './../components/Cabecera.vue'
import HomeContent from '../components/HomeContent.vue'


export default {
  name: 'Home',
  components: {
    Cabecera,
    HomeContent
  }
}
</script>
