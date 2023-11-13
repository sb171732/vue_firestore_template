<template>
  <div id="app">
    <HW></HW>
    <hr>
     <UV></UV>
    
  </div>
</template>

<script>


import UV from './components/UslovView.vue'
import HW from './components/HelloWorld.vue'

export default {
  name: 'App',
  components:{
    UV,HW
  },
  data(){
    return {
     
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
