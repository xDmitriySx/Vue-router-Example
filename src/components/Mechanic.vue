<template>
  <div class="container">
  <div id="back_to_owl"><router-link to="/"><span>Вернуться к мудрой сове (главная страница)</span></router-link></div>
  <div id="mechanic">
   <p>Этот раздел описывает механику</p>
   <h3>Меха́ника (греч. μηχανική — искусство построения машин) — раздел физики, наука, изучающая движение материальных тел и взаимодействие между ними; при этом, движением в механике называют изменение во времени взаимного положения тел или их частей в пространстве.</h3>
  </div>

   <div id="image">
     
   </div>
</div>
</template>

<script>


export default {
  
  data () {
    return {
      
    }
  }
}

</script>

<style scoped>

#image{
  background-repeat: no-repeat;
  background-position: center;
  min-width: 800px;
  min-height: 800px;
  background-image: url("https://ae01.alicdn.com/kf/HTB1N.t2SVXXXXcuaXXXq6xXFXXX5/2017-Funny-font-b-Kinetic-b-font-Orbital-Newton-Pendulum-Model-Office-House-Desk-Decoration-Christmas.jpg");
}

</style>
