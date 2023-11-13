<template>
  <div class="hello">
      <select name="" id="" v-model="sel">
          <option value="">Все</option>
          <option value="Мастер ПО">Мастера</option>
          <option value="Преподаватель">Преподаватели</option>
      </select>
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
  data(){
    return{
      sel:''
    }
  },
  computed:{
     
     Teachers(){
       return store.state.teachers.filter((n)=> { return n.role.match(this.sel)  })
     },
     
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
