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
import StepNumbers from '@/components/StepNumbers.vue'


export default {
  name: 'Home',
  components: {
    Cabecera,
    HomeContent,
    StepNumbers
  }
}
</script>
