<template>
	<view class="content">
		<navigator url="/pages/demo/demo">
			<image class="logo" src="/static/logo.png">
			</image>
		</navigator>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<view>你好</view>
		<view>--**--</view>
		<view>
			<navigator url="/pages/demo/demo">文本组件，事件冒泡</navigator>
			<navigator url="/pages/input_button/input_button">input,button组件</navigator>
			<navigator url="/pages/template_view/template_view">模版预发和插值运算示例</navigator>
			<navigator url="/pages/reactive/reactive">响应式用法示例</navigator>
			<navigator url="/pages/v_bind/v_bind">指令用法示例</navigator>
			<navigator url="/pages/class_style/class_style">Class 与 Style 绑定</navigator>
			</view>
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
