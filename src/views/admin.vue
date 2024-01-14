<script setup>
import { ref } from 'vue';
import api from '../api/api'
import { showSuccessToast } from 'vant';
// const uid = ref('')
const title = ref('');
const pushUrl = ref('');
const pullUrl = ref('');
const age = ref('');
const name = ref('');
const sex = ref('');
const introduction = ref('')
const customString = ref('')
const onSubmit = (values) => {
  console.log('submit', values);
};
const getData = async () => {
  let Data = { appid: '10001' }
  let data = await api.getZhiBo(Data)
  // uid.value = data.uid
  title.value = data.tittle
  pushUrl.value = data.mediaInfo.hlsPlayUrl
  pullUrl.value = data.mediaInfo.rtmpPlayUrl
  sex.value = data.patientInfo.sex.toString()
  age.value = data.patientInfo.age
  name.value = data.patientInfo.name
  introduction.value = data.introduction
  customString.value = data.customString
  console.log(data, sex.value)
}
getData()
const timestampToTime = (times) => {
  let time = times[1]
  let mdy = times[0]
  mdy = mdy.split('/')
  let month = parseInt(mdy[0]);
  let day = parseInt(mdy[1]);
  let year = parseInt(mdy[2])
  return year + '-' + month + '-' + day + ' ' + time
}
//打印结果为：2022-8-31 11:08:34

const pushZhiBo = async () => {
  let userData = { patientInfo: {}, mediaInfo: {} }
  let time = new Date()
  let nowTime = timestampToTime(time.toLocaleString('en-US', { hour12: false }).split(" "))
  // console.log(nowTime)
  userData.patientInfo.name = name.value
  userData.patientInfo.age = age.value
  userData.patientInfo.sex = sex.value
  userData.appid = '10001'
  // userData.uid = uid.value
  userData.tittle = title.value
  userData.mediaInfo.startTime = null
  userData.mediaInfo.isStop = false
  userData.mediaInfo.rtmpPlayUrl = pushUrl.value
  userData.mediaInfo.hlsPlayUrl = pullUrl.value
  userData.mediaInfo.startTime = nowTime
  userData.introduction = introduction.value
  userData.customString = customString.value
  let data = await api.pushZhibo(userData)
  if (data.errorCode == 200) {
    showSuccessToast('上传成功')
  }
  console.log(data, userData)
}
</script>

<template>
  <div>
    <div style="background-color: rgb(248, 248, 248);">
            <img class="imgTitle" src="https://sugh.szu.edu.cn/Sites/Uploaded/UserUpLoad/20180704/20180704120312.png"
                alt="">
            <div class="title">
                <span>直播后台管理界面</span>
            </div>
        </div>
    <van-form @submit="pushZhiBo">
      <van-cell-group inset required="auto">
        <van-field v-model="title" name="会议标题" label="会议标题" placeholder="会议标题"
          :rules="[{ required: true, message: '请填写会议标题' }]" />
        <van-field v-model="pushUrl" name="推流地址" label="hlsPlayUrl" placeholder="hlsPlayUrl" autosize type="textarea"
          :rules="[{ required: true, message: '请填写hlsPlayUrl' }]" />
        <van-field v-model="pullUrl" name="拉流地址" label="rtmpPlayUrl" placeholder="rtmpPlayUrl" autosize type="textarea"
          :rules="[{ required: true, message: '请填写rtmpPlayUrl' }]" />
        <van-field v-model="introduction" name="手术简介" label="手术简介" placeholder="手术简介" autosize type="textarea"
          :rules="[{ required: true, message: '请填写手术简介' }]" />
        <van-field v-model.number="age" name="病人年龄" label="病人年龄" placeholder="病人年龄"
          :rules="[{ required: true, message: '请填写病人年龄' }]" />
        <van-field v-model="name" name="病人姓名" label="病人姓名" placeholder="病人姓名"
          :rules="[{ required: true, message: '请填写病人姓名' }]" />
        <van-field name="radio" label="性别">
          <template #input>
            <van-radio-group v-model="sex" direction="horizontal">
              <van-radio name=0>男</van-radio>
              <van-radio name=1>女</van-radio>
            </van-radio-group>
          </template>
        </van-field>
        <van-field v-model="customString" name="customString" label="自定义字段" placeholder="自定义内容"
          :rules="[{ required: false, message: '请填写自定义字段内容' }]" />
        <div style="margin: 16px;">
          <van-button round block type="primary" native-type="submit">
            提交
          </van-button>
        </div>
      </van-cell-group>
    </van-form>
  </div>
</template>

<style lang="scss">
.van-form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 25px;
}

.title {
  padding-bottom: 20px;
}

.van-cell-group {
  width: 60%;
}
</style>