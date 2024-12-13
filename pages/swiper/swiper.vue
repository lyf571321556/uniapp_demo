<template>
	<view>
		<swiper class="swiper_box" circular vertical autoplay interval="2000" indicator-dots indicator-color="#007aff" indicator-active-color="#4cd964">
			<swiper-item><image src="../../static/pic0.jpeg" class="pic0" mode="aspectFill"></image></swiper-item>
			<swiper-item><image src="../../static/pic1.png" class="pic1" mode="aspectFill"></image></swiper-item>
			<swiper-item><image src="../../static/pic2.jpeg" class="pic2" mode="aspectFill"></image></swiper-item>
			<swiper-item><image src="../../static/pic3.jpeg" class="pic3" mode="aspectFill"></image></swiper-item>
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
		image{
			width: 100%;
			height: 100%;
		}
	}
	swiper-item:nth-child(2n){
		background: orange;
	}
}
</style>
