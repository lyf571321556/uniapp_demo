<template>
	<view class="1">
		<menu-layout>
			<!--匿名插槽-->
			<!-- <view>
				菜单图标
			</view>
			<view>菜单内容</view> -->
			<!--命名插槽-->
			<template v-slot:menu_icon>
				<view>菜单图标</view>
			</template>
			<template v-slot:menu_body>
				<view>菜单内容</view>
			</template>
		</menu-layout>
	</view>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>
