<template>
    <div class="">
          <ul>
            <li v-for="z in Zag" :key="z.id">
                  <h3>{{ z.q }}</h3> 
                  <div><i>{{ z.true_a }}</i></div>
                  <div><b>{{ z.hint }}</b></div>
                  <hr>
            </li>
          </ul>
    </div>
</template>
<script>
import {store} from '../store'
   export default {
    data(){
        return{
            
        }
    },
    computed:{
        Zag(){
            return store.state.zag
        }
    }
   }

</script>
