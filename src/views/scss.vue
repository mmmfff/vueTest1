
<template>
    <div>
        <button @click="add()">添加</button>
        <p>{{msg}}</p>
    </div>
</template>
<script>
import store from '@/store'//@代表src这个目录
export default {
    data(){
        return{
            msg:'msg value'
        }
    },
    methods:{
        add(){
            store.commit('increase');
        }

    }
}
</script>
<style lang="scss">
// @import './assets/index.scss';
</style>