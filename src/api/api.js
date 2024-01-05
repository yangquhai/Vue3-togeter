import axios from 'axios';

export default {
    // async getDropData(){
    //     let { data } = await axios.post(`/notice/page?page=${form.page}&limit=${form.limit}`);
    //     return data
    // },
    // async getDropData(formData){
    //     let { data } = await axios({
    //      url: '/listbill.gz.initial?Tmethod=listbill.gz.initial',
    //      method:'post',
    //      data:formData
    //         });
    //     return data
    // },


    async getZhiBo() {
        let { data } = await axios({
            // url: '/personal/personalIndex',
            url: '/api',
            method: 'GET',
        });
        return data
    },

    async pushZhibo(Data) {
        let { data } = await axios({
            url: '/api',
            method: 'POST',
            data: Data
        });
        return data
    },
    // methos:'POST',
    //  params:{
    //     // Tmethod:'listbill.gz.initial',
    //     Ttablename:'bxd_main',
    //     Turl:'bxd.aspx',
    //     Tformnamecn:'4366',
    //     Tsystem_lcmc:'报销单'
    //  }
}