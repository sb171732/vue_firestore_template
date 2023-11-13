<template>
  <div class="hello">
       <table class="w3-table w3-bordered">
           <tr v-for="t in Teachers" :key="t.id">
               <td>{{ t.fio }}</td>
               <td>{{ t.role }}</td>
               <td>{{ t.initials }}</td>
           </tr>
       </table>
        
  </div>
</template>

<script>
import {store} from '../store'
export default {
  name: 'HelloWorld',
  computed:{
     Teachers(){
       return store.state.teachers
     }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
