<template>
    <div style="background-color: rgb(239, 242, 245);min-height: 100vh;">
        <div style="background-color: rgb(248, 248, 248);">
            <img class="imgTitle" src="https://sugh.szu.edu.cn/Sites/Uploaded/UserUpLoad/20180704/20180704120312.png"
                alt="">
            <div class="title">
                <span>{{ zhibodata.tittle }}</span>
            </div>
            <div class="time">
                <span v-if="zhibodata.mediaInfo">开播时间:{{ zhibodata.mediaInfo.startTime }}</span>
            </div>
        </div>
        <!-- <span>会议名称:{{ zhibodata.uid }}</span> -->
        <div class="video">
            <div style="width: 75%;height: 100%" id="J_prismPlayer" class="prismPlayer"></div>
        </div>
        <div style="display: flex;justify-content: center;margin-top: 20px; flex-wrap: wrap;">
            <div class="bottom">
                <div class="infotitle">
                    手术简介
                </div>
                <div class="intorduceStyle">
                    {{ zhibodata.introduction }}
                </div>
            </div>
            <div class="bottom">
                <div class="infotitle">
                    病人信息
                </div>
                <!-- <ul class="patientInfo intorduceStyle" v-if="zhibodata.patientInfo">
                    <li>
                        姓名:{{ zhibodata.patientInfo.name }}
                    </li>
                    <li>

                        性别:
                        <span v-if="zhibodata.patientInfo.sex == 0">
                            男
                        </span>
                        <span v-else>
                            女
                        </span>
                    </li>
                    <li>
                        年龄:{{ zhibodata.patientInfo.age }}
                    </li>
                </ul> -->
                <div v-if="zhibodata.patientInfo" class="patientInfo intorduceStyle">
                    <div>
                        姓名:{{ zhibodata.patientInfo.name }}
                    </div>
                    <div>
                        性别:<span v-if="zhibodata.patientInfo.sex == 0">
                            男
                        </span>
                        <span v-else>
                            女
                        </span>
                    </div>
                    <div>
                        年龄:{{ zhibodata.patientInfo.age }}
                    </div>
                </div>

                <!-- <van-row class="patientInfo intorduceStyle" v-if="zhibodata.patientInfo">

                    <van-col span="8"></van-col>
                    <van-col span="8">性别:
                        <span v-if="zhibodata.patientInfo.sex == 0">
                            男
                        </span>
                        <span v-else>
                            女
                        </span></van-col>
                    <van-col span="8">年龄:{{ zhibodata.patientInfo.age }}</van-col>
                </van-row> -->
            </div>
        </div>
    </div>
</template>

<script setup>
import api from '../api/api'
import { reactive, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
const state = reactive({
    player: '',          //播放器
    videoUrl: '',        //视频地址
})
const zhibodata = ref('')
// const url = ref('https://al-vod.cdn.huya.com/leaf/1048585/50013631/64686091/19948547_3614ee77cb8fe5fe9d3c704aaa752873_264_1080_1_max.mp4?bitrate=3428&client=123&definition=yuanhua&pid=50013631&scene=vodbusiness&vid=944372694&hyvid=944372694&hyauid=0&hyroomid=0&hyratio=3428&hyscence=vodadv&appid=66&domainid=25&srckey=NjZfMjVfOTQ0MzcyNjk0&&u=1797450349&t=100&sv=2312121207')
const router = useRouter()
const url = ref('')
// const url = ref('rtmp://yqqnas.fun:11935/live/yqq')
// const getData =  async () =>{
//     let data = await api.getZhiBo()
//     zhibodata.value = data
//     url.value = data.pullUrl
//     console.log(zhibodata.value)
//     console.log(url.value)
// }

// const pushZhibo =  async () =>{
//     let data = await api.pushZhibo()
//     console.log(data)
// }
// pushZhibo()

// let data = await api.getDropData(formData)
//路由传参
state.videoUrl = router.currentRoute.value.params.url
state.videoTitle = router.currentRoute.value.params.title
// getData()
onMounted(async () => {
    let Data = { appid: 10001 }
    let data = await api.getZhiBo(Data)
    zhibodata.value = data
    url.value = data.mediaInfo.rtmpPlayUrl
    console.log(zhibodata.value)
    // console.log(url.value)
    // console.log(url.value)
    state.player = new Aliplayer({
        id: "J_prismPlayer",
        source: url.value,
        width: "100%",
        height: "500px",
        /* To set an album art, you must set 'autoplay' and 'preload' to 'false' */
        autoplay: true,
        preload: false,
        isLive: true,
    }, function (player) {
        console.log("The player is created");
    });
})
</script>

<style lang="scss">
.imgTitle {
    margin-left: 200px;
    margin-top: 20px;
}
.van-col {
    text-align: center;
    line-height: 80px;
}
.intorduceStyle {
    background-color: rgb(239, 242, 245);
    border-radius: 20px;
    min-height: 80px;
    padding: 10px;
    margin-top: 10px;
}

.title {
    display: flex;
    justify-content: center;
    font-size: 32px;
    align-items: center;
    height: 50px;
}

.time {
    text-align: right;
    margin-right: 210px;
    font-size: 20px;
}

.content {
    display: flex;
}

.video {
    display: flex;
    height: 713.25px;
    // justify-content: flex-end;
    margin-top: 20px;
    justify-content: center;
}

.bottom {
    // margin-left: 210px;
    width: 73%;
    border-radius: 20px;
    background-color: #fff;
    padding: 20px;
    min-height: 100px;
    margin-bottom: 20px;
    .infotitle {
        font-size: 25px;
        font-weight: bold;
    }

    .patientInfo {

        li {
            // border: solid 1px red;
            font-size: 18px large;
            font-family: "Helvetica Neue";
            width: 200px;
        }
    }
}
</style>