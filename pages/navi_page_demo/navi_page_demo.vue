<template>
	<view class="">
		<view @click="gotoDemo0">navigateTo进行页面跳转</view>
		<view @click="gotoHome">reLaunch跳转到首页(含有tabbar页面)</view>
		<view @click="goBack">返回上一页</view>
	</view>
</template>

<script setup>

function gotoDemo0(){
	uni.navigateTo({
		url:'/pages/image/image'
	})
}
function gotoHome(){
	uni.reLaunch({
		url:'/pages/index/index'
	})
}

function goBack(){
	uni.navigateBack()
}
</script>

<style lang="scss" scoped>

</style>
