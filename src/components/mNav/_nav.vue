<style lang="scss" scoped>
.icon{
    margin-right: 10px;
}
    
</style>
<template>
    <el-menu 
        :default-active="$route.path"
        class="el-menu-vertical-demo" 
        @open="handleOpen" 
        @close="handleClose" 
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
        :collapse="isCollapse">

        <el-menu-item index="/home">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-Artboard"></use>
            </svg>
            <span slot="title">Hello {{userName}}</span>
        </el-menu-item>

        <el-menu-item index="/today">
            <svg class="icon icon" aria-hidden="true">
                <use xlink:href="#icon-lishi"></use>
            </svg>
            <span slot="title">历史上的今天</span>
        </el-menu-item>

        <el-menu-item index="/earth">
            <svg class="icon icon" aria-hidden="true">
                <use xlink:href="#icon-diqiu"></use>
            </svg>
            <span slot="title">蓝色星球</span>
        </el-menu-item>

        <el-menu-item index="/resure">
            <svg class="icon icon" aria-hidden="true">
                <use xlink:href="#icon-huaban"></use>
            </svg>
            <span slot="title">About Me</span>
        </el-menu-item>

        <el-menu-item index="3" disabled>
            <svg class="icon icon" aria-hidden="true">
                <use xlink:href="#icon-shu"></use>
            </svg>
            <span slot="title">敬请期待</span>
        </el-menu-item>
    </el-menu>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'm-nav',
    data() {
        return {
            isCollapse: false,
        }
    },
    computed: {
        ...mapGetters({
            userName: 'getUserName'
        })
    },
    methods: {
        handleOpen(){
            console.log('handleOpen')
        },
        handleClose(){
            console.log('handleClose')
        },
    },
    created(){
    }
}
</script>