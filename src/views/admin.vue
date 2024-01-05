<script setup>
import { ref } from 'vue';
import api from '../api/api'
const username = ref('');
const password = ref('');
const username1 = ref('');
const password2 = ref('');
const tips = ref('')
const onSubmit = (values) => {
  console.log('submit', values);
};
const getData = async() =>{
  let data = await api.getZhiBo()
  username1.value = data.pullUrl
  tips.value = data.pushUrl
  console.log(data)
}
getData()
const pushZhiBo = async () => {
  let userData = {}
  userData.uid = username.value
  userData.tittle = password.value
  userData.myTittle = username1.value
  userData.pushUrl = password2.value
  userData.pullUrl = tips.value
  let data = await api.pushZhibo(userData)
  console.log(data, userData)
}
</script>

<template>
  <div>
    <van-form @submit="pushZhiBo">
      <van-cell-group inset>
        <van-field v-model="username" name="会议时间" label="会议时间" placeholder="会议时间"
          :rules="[{ required: true, message: '请填写会议时间' }]" />
        <van-field v-model="password" name="会议标题" label="会议标题" placeholder="会议标题"
          :rules="[{ required: true, message: '请填写会议标题' }]" />
        <van-field v-model="password2" name="患者名称" label="患者名称" placeholder="患者名称"
          :rules="[{ required: true, message: '请填写患者名称' }]" />
        <van-field v-model="username1" name="推流地址" label="推流地址" placeholder="推流地址"
          :rules="[{ required: true, message: '请填写手术信息' }]" />
        <van-field v-model="tips" name="拉流地址" label="拉流地址" placeholder="拉流地址"
          :rules="[{ required: true, message: '请填写备注' }]" />
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<style lang="scss"></style>