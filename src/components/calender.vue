<template>
    <div>
      <div class="calendar">
          <div class="calelist" style="display:flex">
              <van-cell title="从" :value="date" @click="value1 = true" />
              <van-calendar v-model:show="value1" :show-confirm="false" @confirm="onConfirm" :min-date="minDate" :max-date="maxDate" />
              <van-cell title="至" class="van-cell2" :value="date2" @click="value2 = true" />
              <van-calendar v-model:show="value2" :show-confirm="false" @confirm="onConfirm2" :min-date="minDate" :max-date="maxDate" />
          </div>
      </div>
    </div>
  </template>
  
<script setup>
import {ref} from 'vue'
const date = ref('请选择日期')
const date2 = ref('请选择日期')
const value1 = ref(false)
const value2 = ref(false)
let minDate = ref(new Date(2020, 0, 1)) 
let maxDate = ref(new Date(2025, 0, 1)) 
const getSimpleDate = (date) => {
          var y = date.getFullYear();
          var m = date.getMonth() + 1;
          m = m < 10 ? ('0' + m) : m;
          var d = date.getDate();
          d = d < 10 ? ('0' + d) : d;
          var h = date.getHours();
          var minute = date.getMinutes();
          minute = minute < 10 ? ('0' + minute) : minute;
          var s = date.getSeconds();
          s = s < 10 ? '0' + s : s;
          return y + '-' + m + '-' + d ;
}
const onConfirm = (date) => {
         value1.value = false;
         date.value = getSimpleDate(date);
         console.log(date)
}
const onConfirm2=(date)=> {
         value2.value = false;
         date2.value = getSimpleDate(date);
         console.log(date2.value)
}
  </script>
  
  <style lang="scss" scoped>
//   .calendar {
//         margin-left: 15px;
//         margin-top: 18px;
//         // display: flex;
//         // border: solid 1px red;
//         //  /deep/ .van-cell__value {
//         //     // text-align: left;
//         //     // border: solid 1px red;
//         //     text-align: left;
//         //     // width: 10px;
//         //     margin-left: -30px;
//         //    }
//           .van-cell {
//             padding: 0px;
//             font-size: 12px;
//             width: 34%;
//           }
//         .van-cell::after {
//           border-bottom: none;
//         }
//         .van-cell2 {
//           margin-left: 50px;
//           // border: solid 1px red;
//         }
//         .van-button {
//           // position: absolute;
//           // border: solid 1px red;
//           margin-top: 12px;
//           margin-left: 261px;
//           margin-bottom: 5px;
//           width: 83px;
//             height: 31px;
//           // color: rgb(102, 102, 102);
//           line-height: 150%;
//           font-size: 13px;
//           border-radius: 16px;
//           // background-color: white;
//         }
//         //  /deep/ .el-input__inner {
//         //   border: none;
//         //   font-size: 12px;
//         //   // border: solid 1px red;
//         //   // width: 80px;
//         //   // height: 28px;
  
//         //   padding: 0px;
//         //   margin-left: 35px;
//         // }
//         // /deep/ .el-input {
//         //   width: 80px;
//         //   // border: solid 1px red;
//         // }
//         // /deep/ .el-input__icon {
//         //   display: none;
//         // }
//         // /deep/ .el-input__inner {
//         //   border: none;
//         // }
//       }
  
  </style>