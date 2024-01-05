<script setup>
import api from '../api/api'
import { ref, onMounted } from 'vue'
import search from '../components/search.vue'
import calender from '../components/calender.vue'
const tabListData = ref([])
let value = ref('1')
let placeholders = ref('')
const getData = async () => {
  let formData = new FormData()
  formData.append('Ttablename', 'bxd_main')
  formData.append('Turl', 'bxd.aspx')
  formData.append('Tformnamecn', '4366')
  formData.append('Tsystem_lcmc', '报销单')
  formData.append('TisFirst', '1')
  let data = await api.getDropData(formData)
  tabListData.value = data.colums
  placeholders.value = tabListData.value.search.text
  console.log(tabListData.value)
}
const changeMoney = (value) => {
  console.log(value)
}
const add1 = ref({
  name:'张三',
  age:14
})
const add2 = ref({})
const add = ()=>{
  add2.value = add1.value
  
  console.log(add1.value,add2.value)
}
add()
const add3 = () =>{
  add2.value.name = '李四'
  console.log(add1.value,add2.value)
} 
console.log(value.value)
// getData()
onMounted(() => {
  console.log('onMounted')
})
</script>

<template>
  <div class="home">
    <search :placeholders="placeholders" @changeMoney="changeMoney"></search>
    <calender></calender>
  </div>
  <div class="border" @click="add3">
    <div>1111</div>
  </div>
  <div class="border2">
    <div class="content">1111</div>
  </div>
</template>


<style lang="scss" scoped>
//  .home {
//     margin-top: 8px;
//     padding-top: 9px;
//     margin-left: 9px;
//     display: flex;
//     align-items: center;
//     border: solid 1px red;
//   }

.border {
  border: solid 1px red;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.border2 {
  border: solid 1px red;
  height: 200px;
  position: relative;

  .content {
    position: absolute;
    background: salmon;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}</style>
