<template>
  <div class="about">
    <h1>{{ $route.params.sport }}</h1>
    <span v-for="d in docs" :key="d.id">
    <embed v-if="d.sport===$route.params.sport" :src="d.url" width="1000px" height="800px" />
  </span> 
    
  
  
  </div>
</template>
<script>

import {store} from '../store'

export default{
  computed:{
    docs(){
      return store.state.docs
    }
  }
}
</script>