<template>
	<view>
		<swiper class="swiper_box" circular vertical autoplay interval="2000" indicator-dots indicator-color="#007aff" indicator-active-color="#4cd964">
			<swiper-item>1111111</swiper-item>
			<swiper-item>1111112</swiper-item>
			<swiper-item>1111113</swiper-item>
			<swiper-item>1111114</swiper-item>
		</swiper>
	</view>
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
swiper{
	width: 100%;
	height:100px;
	border: 1px solid red;
	box-sizing: border-box;
	swiper-item{
		width: 50vw;
		height: 100%;
		background: green;
	}
	swiper-item:nth-child(2n){
		background: orange;
	}
}
</style>
