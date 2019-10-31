<style lang="scss">

#app{
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
}

.app-warp{
	height: 100%;
	.el-menu{
		border: none;
	}
}
	
</style>

<template>
	<div id="app">
		<el-container class="app-warp">
			<el-aside width="200px">
				<mNav></mNav>
			</el-aside>

			<el-main>
				<router-view/>
			</el-main>
		</el-container>
	</div>
</template>

<script>
import mNav from '@/components/mNav'
export default {
	components:{
		mNav
	}
}
</script>