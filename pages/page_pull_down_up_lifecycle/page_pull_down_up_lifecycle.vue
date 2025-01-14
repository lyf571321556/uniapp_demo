<template>
	<view class="box">
		<view v-for="(item,index) in 100">
			{{item}}
		</view>
	</view>
</template>

<script setup>
import {onReachBottom} from "@dcloudio/uni-app"


onReachBottom(()=>{
	console.log("到底了");
})
</script>

<style lang="scss" scoped>

</style>
