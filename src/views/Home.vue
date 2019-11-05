<template>
    <div>
         <div class="box">box</div>
        <div class="title-wrapper">
            <div class="left">
              <div class="icon">back</div>
            </div>
            <div class="right">
                <div class="icon-wrapper">
                    <span class="icon">car</span>
                </div>
                <div class="icon-wrapper">
                    <span class="icon">person</span>
                </div>
                <div class="icon-wrapper">
                    <span class="icon">more</span>
                </div>
            </div>
        </div>
        <div class="read-wrapper">
            按钮点击次数：{{btnCount}}
        </div>
    </div>
</template>
<script>
import store from '@/store'
export default{
    name:'home',
    data(){
        return {
            btnCount:store.state.count
        }
    }
}
//    import axios from 'axios'

    /*
    * axios 请求方法：get post put,patch
    * get:获取数据
    * post:提交数据（表单提交加文件上传）
    * put(更新数据 所以数据推送到后端)
    * patch(更新数据 只将修改的数据推送到后端)
    * */
//    export default {
//        name: 'app',
//        created(){
//           axios({
//               method:'get',
//               url:'/data.json'
//           })
//        }
//    }
</script>
<style lang="scss">

</style>