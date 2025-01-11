<template>
	<view class="box">
		<view >
			全局样式测试
		</view>
		<view class="box1">
			局部样式测试
		</view>
	</view>
	<view class="text">
		测试问题
	</view>
</template>

<script setup>
ref
</script>

<style lang="scss" scoped>
.box{
	// width: 40vw;
	// width: 120px;
	width: 180rpx;
	height: 180rpx;
	background: red;
}
.box1{
	font-size: 20rpx;
	background: $uni-custom-text-color-2;
}
.text{
	font-size: 52rpx;
	color: $uni-custom-text-color-1;
}
</style>
