<template>
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

nav{
  background-color: paleturquoise;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}

li{
  list-style: none;
  display: inline;
  margin-left: 50px;
  margin-right: 90px;
  font-size: 20px;
}

</style>
