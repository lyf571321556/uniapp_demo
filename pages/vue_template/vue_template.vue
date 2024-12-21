<template>
	<view class="">
		<view v-if="showBaidu">百度</view>
		<view v-else>淘宝</view>
		
		<view v-if="today === 1">星期一</view>
		<view v-else-if="today === 2">星期二</view>
		<view v-else-if="today === 3">星期三</view>
		<view v-else-if="today ===4 ">星期四</view>
		<view v-else-if="today === 5">星期五</view>
		<view v-else>星期天</view>
		
		<view class="box1" v-if="true" >
			<image src="../../static/logo.png" mode="" style="height: 50px;width: 50px;"></image>
		</view>
		<view class="box2" v-show="true"  >
			<image src="../../static/pic1.png" mode="" style="height: 50px;width: 50px;"></image>
		</view>
		<template v-if="true">
			<image src="../../static/logo.png" mode="" style="height: 50px;width: 50px;"></image>
		</template>
		<template v-if="true">
			<image src="../../static/pic1.png" mode="" style="height: 50px;width: 50px;"></image>
		</template>
	</view>
</template>

<script setup>
import { ref } from 'vue';
const showBaidu = ref(false)
const showTaobao = ref(false)
const today = ref(31)
</script>

<style lang="scss" scoped>

</style>
