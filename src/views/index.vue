<template>
  <div class="homes">
    <div class="top">1231</div>
    <search></search>
  </div>
</template>

<script>
import api from '../api/api'
import search from '../components/search.vue'
export default {
  name: 'HomeView',
  components: {
    search
  },
  methods:{
    async getData2(){
        let formData = new FormData()
        formData.append('Ttablename','bxd_main')
        formData.append('Turl','bxd.aspx')
        formData.append('Tformnamecn','4366')
        formData.append('Tsystem_lcmc','报销单')
        formData.append('TisFirst','1')
        let data = await api.getDropData(formData)
        console.log(data)
      },
  },
  onMounted(){
    this.getData2()
  }
}
</script>
<style lang="scss" scoped>
   .homes {
      // margin-top: 8px;
      padding-top: 9px;
      margin-left: 9px;
      display: flex;
      align-items: center;
      // border: solid 1px red;
      .top {
        border: solid 1px red;
      }
    }
</style>
