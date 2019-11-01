<style lang="scss">
@import '~@/style/config.scss';
.login-page{
    height: 100%;
    width: 100%;
    background: url('~@/assets/imgs/paris.jpg') no-repeat 50%;
    .login-warp{
        position: absolute;
        width: 400px;
        height: 150px;
        margin: auto;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        padding: 30px 50px 20px;
        box-sizing: border-box;
        background: rgba($color: $bgGary, $alpha: 0.6);
        border-radius: 5px;
        text-align: center;
        .el-input{
            width: 200px;
        }
        .el-button{
            margin: 30px auto 0;
            display: block;
            width: 150px;
        }
    }
}
</style>

<template>
    <div class="login-page">
        <div class="login-warp">
           
            Hello,  
            <el-input 
                v-model="name" 
                ref="input" 
                @keyup.enter.native="login"
                placeholder="your name" 
                maxlength='10'/>

            <el-button plain @click="login" :disabled="!name">登录</el-button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data(){
        return{
            name: ''
        }
    },
    methods: {
        ...mapActions([
            'setUserName'
        ]),
        login(){
            if(this.name){
                this.setUserName(this.name)
                this.$router.push({
                    name: 'home'
                })
            }
        }
    },
    mounted(){
        this.$refs.input.focus()
    }
}
</script>