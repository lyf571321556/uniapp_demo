<template>
	<view class="">
		接收传值:{{name}}-{{age}}
	</view>
	<scroll-view scroll-y="true" ref="scrollview">
		<view>内容滚动</view>
	</scroll-view>
</template>

<script setup>
import {onLoad,onReady} from "@dcloudio/uni-app"
import { ref } from "vue";
const name = ref('')
const age = ref(0)
const scrollview = ref(null);
onLoad((e)=>{
	console.log("onLoad函数调用,dom还没挂载");
	console.log("scrollview："+scrollview.value)
	console.log(e);
	name.value = e.name;
	age.value = e.age;
});

onReady(()=>{
	console.log("onReady函数调用,dom已经挂载");
	console.log("scrollview："+scrollview.value)
});
</script>

<style lang="scss" scoped>

</style>
