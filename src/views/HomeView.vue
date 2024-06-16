<template>
  <div class="home">
      <h1>Специальная подготовка спортсмена</h1>

      <el-divider></el-divider>

      <el-row>
        <el-col  :span="10" class="w3-border w3-green w3-margin" style="height: 300px;cursor: pointer;">
            <h1>Футбол</h1>
            <el-button @click="open('Футбол')">Открыть</el-button>  
        </el-col>
        <el-col  :span="10" class="w3-border w3-yellow w3-margin" style="height: 300px;cursor: pointer;">
             <h1>Настольный теннис</h1>
             <el-button @click="open('Настольный теннис')">Открыть</el-button>
        </el-col>
        <el-col  :span="10" class="w3-border w3-red w3-margin" style="height: 300px;cursor: pointer;">
             <h1>Хоккей</h1>
             <el-button @click="open('Хоккей')">Открыть</el-button>
        </el-col>
        <el-col  :span="10" class="w3-border w3-orange w3-margin" style="height: 300px;cursor: pointer;">
             <h1>Шахматы</h1>
             <el-button @click="open('Шахматы')">Открыть</el-button>
        </el-col>
      </el-row>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  methods: {
    open(name){
      this.$router.push({
        name:'about',
        params:{ sport:name  }
      })
    }
  }
}
</script>
