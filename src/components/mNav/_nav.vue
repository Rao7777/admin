<template>
    <el-menu 
        :default-active='defaultActive' 
        class="el-menu-vertical-demo" 
        @open="handleOpen" 
        @close="handleClose" 
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :collapse="isCollapse">
        
        <el-menu-item index="1">
            <em class="el-icon-document"></em>
            <span slot="title">Hello</span>
        </el-menu-item>

        <el-menu-item index="2">
            <em class="el-icon-document"></em>
            <span slot="title">resure</span>
        </el-menu-item>

        

        <el-menu-item index="4">
            <em class="el-icon-setting"></em>
            <span slot="title">导航四</span>
        </el-menu-item>

        <el-menu-item index="3" disabled>
            <em class="el-icon-menu"></em>
            <span slot="title">敬请期待</span>
        </el-menu-item>
    </el-menu>
</template>

<script>
export default {
    data() {
        return {
            defaultActive: "1",
            isCollapse: false,
        }
    },
    methods: {
        handleOpen(){
            console.log('handleOpen')
        },
        handleClose(){
            console.log('handleClose')
        },
    }
}
</script>