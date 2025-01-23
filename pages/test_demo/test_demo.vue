<template>
	<view class="container">
		<view class="layout">
			<view class="img_box" v-for="(item,index) in 10">
				<view class="pic">
					<image src="../../static/logo.png" mode="widthFix"></image>
				</view>
				<view class="text">@@@@@</view>
			</view>
		</view>
	</view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.container{
	.layout{
		padding: 50rpx;
		.img_box{
			margin-bottom: 50rpx;
			box-shadow:0 10rpx 35rpx rgba(50, 155, 200, 100);
			// 圆角
			border-radius: 30rpx;
			overflow: hidden;
			.pic{
				image{
					width: 100%;
				}
			}
			.text{
				padding: 10rpx;
				font-size: 35rpx;
			}
		}
	}
}
</style>
