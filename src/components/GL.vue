<template>
    <div class="">
        <input v-model="new_stud.name" placeholder="ФИО" class="w3-margin w3-padding">
        <input v-model="new_stud.kurs" placeholder="курс" type="number" class="w3-margin w3-padding">
        <input v-model="new_stud.age" placeholder="возраст" type="number" class="w3-margin w3-padding">
        <input v-model="new_stud.pol" placeholder="пол" type="text" class="w3-margin w3-padding">
        <button @click="add()">add</button> | 
        <button @click="update()">update</button>
        <hr/>
        <table class="w3-table w3-bordered w3-striped">
            <thead>
                <tr>
                    <th>Имя</th>
                    <th>Курс</th>
                    <th>Возраст</th>
                    <th>Пол</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="g in group_list" :key="g.id">
                    <td>{{ g.name }}</td>
                    <td>{{ g.kurs }}</td>
                    <td v-if="g.age>19" class="w3-green">{{ g.age }}</td>
                    <td v-else class="w3-red">{{ g.age }}</td>
                    <td>{{ g.pol }}</td>
                    <td> <button @click="del(g.id)">Удалить</button>  </td>
                    <td> <button @click="new_stud = g">Edit</button>  </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import {store} from '../store'
  export default {
    data(){
        return{
            new_stud:{
                name:'',
                kurs:'',
                age:'',
                pol:''
            }
        }
      
    },
     computed:{
         group_list(){
            return store.state.g40b
         }
    },
    methods:{
        add(){
            console.log(this.new_stud)
            store.dispatch('addUser',this.new_stud)
            this.new_stud.name=''
            this.new_stud.age=''
            this.new_stud.pol=''
            this.new_stud.kurs=''
        },
        del(id){
            store.dispatch('delUser', id)
        },
        update(){
            store.dispatch('updateG', {id:this.new_stud.id, doc: this.new_stud })
        }
    } 
  }
   
</script>