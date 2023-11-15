<template>
  <div id="app">
     <GL></GL>
    
  </div>
</template>

<script>


// import UV from './components/UslovView.vue'
// import HW from './components/HelloWorld.vue'
import GL from './components/GL.vue'

export default {
  name: 'App',
  components:{
    // UV,HW,
    GL
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
