<template>
	<view>
		scroll-view演示
	</view>
	<scroll-view scroll-x class="scrollView">
		<view class="box">scrollview子元素</view>
		<view class="box">scrollview子元素</view>
		<view class="box">scrollview子元素</view>
		<view class="box">scrollview子元素</view>
		<view class="box">scrollview子元素</view>
		<view class="box">scrollview子元素</view>
		<view class="box">scrollview子元素</view>
		<view class="box">scrollview子元素</view>
		<view class="box">scrollview子元素</view>
		<view class="box">scrollview子元素</view>
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
.scrollView{
	width: 80%;
	height: 220px;
	border:1px solid green;
	white-space: nowrap; // 不换行显示
}
.box{
	width: 180px;
	height: 100px;
	background: green;
	display: inline-block;	// 行级块元素
	margin-left: 5px;
}
</style>
