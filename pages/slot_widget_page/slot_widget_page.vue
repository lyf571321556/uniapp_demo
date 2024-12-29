<template>
	<view class="">
		<menu-layout>
			<!--匿名插槽-->
			<!-- <view class="box1">99919</view>
			<view class="box2">99919</view> -->
			<!--命名插槽-->
			<template #menu_icon>
				图标
			</template>
			<template #menu_body>
				内容
			</template>
		</menu-layout>
	</view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.box1{
	background: #ccc;
	height: 100px;
	width: 100px;
}
.box2{
	background:  pink;
	height: 150px;
	width: 150px;
}
</style>
