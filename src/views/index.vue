<template>
  <div class="home">
    <search :placeholders="placeholders" @changeMoney="changeMoney"></search>
    <calender></calender>
  </div>
</template>

<script setup>
import api from '../api/api'
import {ref,onMounted} from 'vue'
import search from '../components/search.vue'
import calender from '../components/calender.vue'
let tabListData = ref([])
let value = ref('1')
let placeholders = ref('')
const getData = async()=> {
        let formData = new FormData()
        formData.append('Ttablename','bxd_main')
        formData.append('Turl','bxd.aspx')
        formData.append('Tformnamecn','4366')
        formData.append('Tsystem_lcmc','报销单')
        formData.append('TisFirst','1')
        let data = await api.getDropData(formData)
        tabListData = data.colums
        placeholders.value = tabListData.search.text
        console.log(tabListData)
}
const changeMoney = (value)=> {
  console.log(value)
}
console.log(value.value)
getData()
onMounted(()=>{
  console.log('onMounted')
})
</script>
<style lang="scss" scoped>
  //  .home {
  //     margin-top: 8px;
  //     padding-top: 9px;
  //     margin-left: 9px;
  //     display: flex;
  //     align-items: center;
  //     border: solid 1px red;
  //   }
</style>
