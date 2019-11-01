<style lang="scss">
@import '~@/style/init.scss';

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
		<router-view/>
	</div>
</template>
