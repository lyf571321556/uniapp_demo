<template>
	<view class="menu_layout">
		<view class="menu_icon">
			<!--匿名插槽-->
			<!-- <slot></slot> -->
			<!--具名插槽-->
			<slot name="menu_icon"></slot>
		</view>
		<view class="menu_body">
			<!--具名插槽-->
			<slot name="menu_body"></slot>
		</view>
		<view class="menu_name">名称</view>
	</view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.menu_layout{
	padding: 5px 5px;
	width: 100px;
	height:100px;
	.menu_icon{
		width: 100px;
		height: 40px;
		background: #cfcfcf;
	}
	.menu_body{
		width: 100px;
		height: 40px;
		background: #cdbdba;
	}
	.menu_name{
		width: 100px;
		height: 20px;
		background: #bdfdbd;
	}
}
</style>