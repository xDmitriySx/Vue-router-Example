<template>

  <div id="header">
    
        <div id="ki"><router-link to="/kinetik"><p>Кинетика</p></router-link></div>
        <div id="astr"><router-link to="/astro"> <p>Астрофизика</p></router-link> </div>
        <div id="me"><router-link to="/mechanic"> <p>Механика</p></router-link></div>
        <div id="che"><router-link to="/chemistry"> <p>Химия</p></router-link></div>
        <div id="tri"><router-link to="/trigonom"> <p>Тригонометрия</p></router-link> </div>
      
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


#header{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  min-height: 68px;
}

p{
  font-weight: bold;
  font-size: 20px;
}

#ki:hover{
  border-bottom: 5px solid green;
}

#astr:hover{
  border-bottom: 5px solid blue;
}

#me:hover{
  border-bottom: 5px solid yellow;
}

#che:hover{
 border-bottom: 5px solid purple;
}

#tri:hover{
  border-bottom: 5px solid red;
}

#header{
  display: flex;
  background-color: paleturquoise;
}


</style>










<!--
  <div id="header">
    <nav>
      <ul>
        <li id="ki"><router-link to="/kinetik"> Кинетика </router-link></li>
        <li id="astr"><router-link to="/astro"> Астрофизика</router-link> </li>
        <li id="me"><router-link to="/mechanic"> Механика</router-link></li>
        <li id="che"><router-link to="/chemistry"> Химия</router-link></li>
        <li id="tri"><router-link to="/trigonom"> Тригонометрия</router-link> </li>
      </ul>
    </nav>
  </div>
-->