<template>
	<view class="">
		<view @click="setStorageValueAsync">setStorageValueAsync</view>
		<view @click="getStorageValueAsync">getStorageValueAsync</view>
		<view @click="removeStorageValueAsync">removeStorageValueAsync</view>
		<view @click="clearAllStorageValueAsync">clearAllStorageValueAsync</view>
		<view @click="setStorageValueSync">setStorageValueSync</view>
		<view @click="getStorageValueSync">getStorageValueSync</view>
		<view @click="removeStorageValueSync">removeStorageValueSync</view>
		<view @click="clearAllStorageValueSync">clearAllStorageValueSync</view>
		<button @click="clearAllStorageValueSync" type="warn">删除缓存</button>
		<view>------------------------</view>
		<view @click="getStorageInfoSync">getStorageInfoSync</view>
	</view>
</template>

<script setup>
function setStorageValueAsync(){
	uni.setStorage({
		key:'key0',
		data:"value0_async",
		success(result) {
			console.log(result)
			console.log("key0\'value "+result+" saved");
		}
	})
}

function getStorageValueAsync(){
	uni.getStorage({
		key:"key0",
		success(result) {
			console.log(result.data)
		}
	})
}


function removeStorageValueAsync(){
	uni.removeStorage({
		key:"key0",
		success(result) {
			console.log(result)
			console.log("删除成功。")
		}
	})
}

function clearAllStorageValueAsync(){
	uni.clearStorage()
}

// ---- 以下是同步方法----
function setStorageValueSync(){
	uni.setStorageSync("key0","value_sync");
}

function getStorageValueSync(){
	let value = uni.getStorageSync("key0")
	console.log("getStorageValueSync "+value);
}


function removeStorageValueSync(){
	uni.removeStorageSync('key0')
}


function clearAllStorageValueSync(){
	uni.clearStorageSync()
}

// 获取storage信息
function getStorageInfoSync(){
	let result = uni.getStorageInfoSync();
	console.info(result)
}
</script>

<style lang="scss" scoped>

</style>
