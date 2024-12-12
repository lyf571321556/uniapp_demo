<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<view>你好</view>
		<view>--**--</view>
	</view>
	<view class="layout">
		<view class="box1">aaa</view>
		<view class="box2">bbb</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.layout{
		display: flex;
		flex-direction: column-reverse;
		border: 1px solid red;
		.box1{
			border: 1px solid blue;
		}
		.box2{
			border: 1px solid green;
		}
	}
	
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	
	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}
	
	.text-area {
		display: flex;
		justify-content: center;
	}
	
	.title {
		font-size: 36rpx;
		color: #8f8f94;
		background-color: aqua;
	}
</style>
