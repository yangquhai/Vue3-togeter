<template>
 <form action="/">
    <van-search
        v-model="value"
        show-action
        :placeholder="placeholders"
        @search="onSearch"
        @cancel="onCancel"
    />
 </form>
 <div @click="father">123132131</div>
</template>
  
<script setup>
import {ref} from 'vue'

const props = defineProps({
  placeholders: String
})
console.log(props)
let value = ref('')
let value2 = ref('1231321')
// let placeholders = ref('123123')
const onSearch = () => {
    console.log(value.value)
    console.log(props.placeholders)
}
const onCancel = ()=> {
   console.log(value.value)
}
const emits = defineEmits(['changeMoney'])
const father = () => {
  emits('changeMoney',value2.value)
}
</script>


<style lang="scss" scoped>
      :deep(){
        van-field__control::-webkit-input-placeholder {
          // color: rgba(95, 100, 110, 1);
          font-size: 12px;
      }
      .van-field__control {
          // border: solid 1px red;
          font-size: 12px;
      }
      }

</style>