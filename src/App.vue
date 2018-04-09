<template>
  <div>
<header-app></header-app>
<br><br>
<router-view></router-view>
</div>
</template>

<script>
import Header from './components/Header.vue'
import Kinetik from './components/Kinetik.vue'
import Astro from './components/Astro.vue'
import Mechanic from './components/Mechanic.vue'
import Chemistry from './components/Chemistry.vue'
import Trigonom from './components/Trigonom.vue'
import Preview from './components/Preview.vue'


export default {
components: {
  'header-app': Header,
  'kinetik-app': Kinetik,
  'astro-app': Astro,
  'mechanic-app': Mechanic,
  'chemistry-app': Chemistry,
  'trigonom-app': Trigonom,
  'preview-app': Preview
},
  data () {
    return {
      
    }
  }
}

</script>

<style>

#back_to_owl{
  font-style: italic;
  font-weight: bold;
  display: flex;
  flex-direction: row-reverse;
}

</style>
