<template>
	<view class="content">
			<navigator url="/pages/demo/demo">文本组件，事件冒泡</navigator>
			<navigator url="/pages/input_button/input_button">input,button组件</navigator>
			<navigator url="/pages/template_view/template_view">模版预发和插值运算示例</navigator>
			<navigator url="/pages/reactive/reactive">响应式用法示例</navigator>
			<navigator url="/pages/v_bind/v_bind">指令用法示例</navigator>
			<navigator url="/pages/class_style/class_style">Class 与 Style 绑定</navigator>
			<navigator url="/pages/events/events">事件用法示例</navigator>
			<navigator url="/pages/vue_template/vue_template">vue3模版创建以及条件渲染用法示例</navigator>
			<navigator url="/pages/v_for/v_for">列表渲染用法示例</navigator>
			<navigator url="/pages/shopping_car/shopping_car">购物车示例</navigator>
			<navigator url="/pages/form_focus_blur/form_focus_blur">表单焦点事件案例</navigator>
			<navigator url="/pages/stage0/stage0">第一阶段知识点综合练习</navigator>
			<navigator url="/pages/computed_propertity/computed_propertity">计算属性用法示例</navigator>
			<navigator url="/pages/watch_effect/watch_effect">监听使用示例</navigator>
			<navigator url="/pages/use_components/use_components">自定义组件用法示例</navigator>
			<navigator url="/pages/props_page/props_page">props给组件传值用法</navigator>
			<navigator url="/pages/slot_page/slot_page">插槽的用法示例</navigator>
			<navigator url="/pages/slot_widget_page/slot_widget_page">插槽组件显示用法示例</navigator>
			<navigator url="/pages/emit_page/emit_page">emit事件用法示例</navigator>
			<navigator url="/pages/component_lifecycle/component_lifecycle">组件生命周期用法示例</navigator>
			<navigator url="/pages/expose_method_propertity_page/expose_method_propertity_page">子组件导出方法和属性用法示例</navigator>
			<navigator url="/pages/lifecycle_page/lifecycle_page">页面生命周期用法示例</navigator>
			<navigator url="/pages/rpx_page/rpx_page">响应式单位rpx用法示例</navigator>
			<navigator url="/pages/page_pull_down_up_lifecycle/page_pull_down_up_lifecycle">下拉熟悉以及生命周期用法示例</navigator>
			<navigator url="/pages/api_demo/api_demo">uniapp api用法示例</navigator>
	</view>
	<navigator url="/pages/demo/demo">
		<image class="logo" src="/static/logo.png">
		</image>
	</navigator>
	<view class="text-area">
		<text class="title">{{title}}</text>
	</view>
	<view>你好</view>
	<view>--**--</view>
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
