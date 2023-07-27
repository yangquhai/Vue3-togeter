<template>
    <div>
      <!-- <form action="/">
          <van-search
              v-model="value"
              :placeholder="placeholders"
              @search="onSearch"
              @cancel="onCancel"
              shape="round"
          />
      </form> -->
      <van-button type="primary">主要按钮</van-button>
      123213
    </div>
  </template>
  
  <script>
  export default {
      data(){
          return {
              value: '',
          }
      },
      props:["placeholder"],
      computed:{
          placeholders(){
              return this.placeholder
          }
      },
      methods:{
          onSearch(){
              console.log(this.placeholder)
              // console.log(this.value)
              this.$emit('search',this.value)
          },
          onCancel(){
              console.log(222)
          }
      },
      created(){
          // console.log(this.placeholder)
      }
  }
  </script>
  
  <style lang="scss" scoped>
    //   /deep/ .van-field__control::-webkit-input-placeholder {
    //       // color: rgba(95, 100, 110, 1);
    //       font-size: 12px;
    //   }
    //   /deep/ .van-field__control {
    //       // border: solid 1px red;
    //       font-size: 12px;
    //   }
  </style>