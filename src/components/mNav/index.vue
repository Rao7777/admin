<style lang="scss">
    @import '~@/style/config.scss';
    .side-warp{
        height: 100%;
        background-color: $bgGary;
        .profilePhoto{
            width: 100px;
            border-radius: 50%;
            transform: translateX(-50%);
            margin: 60px auto 20px 50%; 
        }
    }
    
</style>
<template>
    <div class="side-warp">
        <img class="profilePhoto" src="~@/assets/imgs/profile_photo.jpg" alt="profile photo">

        <sideNav></sideNav>
    </div>
</template>

<script>
import sideNav from './_nav'
export default {
    components:{
        sideNav,
    },
    data(){
        return{

        }
    }
}
</script>