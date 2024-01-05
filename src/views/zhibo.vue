<template>
    <img src="https://sugh.szu.edu.cn/Sites/Uploaded/UserUpLoad/20180704/20180704120312.png" alt="">
    <van-space direction="vertical" fill>
        <span>会议时间:{{ zhibodata.uid }}</span>
        <span>会议时间:{{ zhibodata.tittle }}</span>
        <!-- <span>会议时间:{{ zhibodata.pullUrl }}</span>
       <span>会议时间:{{ zhibodata.pushUrl }}</span> -->
        <span>会议时间:{{ zhibodata.uid }}</span>
    </van-space>
    <div class="video">
        <div style="width: 70%;height: 100%" id="J_prismPlayer" class="prismPlayer"></div>
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
    let data = await api.getZhiBo()
    zhibodata.value = data
    url.value = data.pullUrl
    // console.log(zhibodata.value)
    // console.log(url.value)
    // console.log(url.value)
    state.player = new Aliplayer({
        id: "J_prismPlayer",
        source: url.value,
        width: "100%",
        height: "500px",
        /* To set an album art, you must set 'autoplay' and 'preload' to 'false' */
        autoplay: false,
        preload: false,
        isLive: true,
    }, function (player) {
        console.log("The player is created");
    });
})
</script>

<style lang="scss">
.content {
    display: flex;
}

.video {
    display: flex;
    height: 600px;
    // justify-content: flex-end;
    justify-content: center;
}
</style>