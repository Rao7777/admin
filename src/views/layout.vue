<template>
    <el-container class="app-warp">
        <el-aside width="200px">
            <mNav></mNav>
        </el-aside>

        <el-main>
            <router-view/>
        </el-main>
    </el-container>
</template>

<script>
import mNav from '@/components/mNav'
export default {
	components:{
		mNav
	}
}
</script>