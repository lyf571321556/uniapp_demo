<template>
	<view class="">
		页面生命周期用法示例:{{userName}}
	</view>
	<navigator url="/pages/params_page/params_page?name=王五&age=10">点击跳转到取值页面</navigator>
	<view v-for="(item,index) in 50" :key="index">
		{{item}}
	</view>
	<view class="fixed" v-if="showArrow">
		🔼向上
	</view>
</template>

<script setup>
import {onLoad,onShow,onReady,onUnload,onPageScroll} from "@dcloudio/uni-app"
import { onBeforeMount, onMounted, ref } from "vue";
const userName = ref('')
const showArrow = ref(false)
const person = {
  name:'adas11',
  age:20,
}
onLoad(()=>{
	console.log("onLoad")
	userName.value ='onLoad userName';
});

onShow((e)=>{
	console.log("onShow");
	console.log(e);
	console.log("onShow");
});

onReady(()=>{
	console.log("onReady");
})

onBeforeMount(()=>{
	console.log("onBeforeMount");
})

onMounted(()=>{
	console.log("onMounted");
})

onUnload(()=>{
	console.log("onUnload:页面被卸载");
});


onPageScroll((e)=>{
	console.log(e.scrollTop)
	showArrow.value = e.scrollTop >= 200;
})
</script>

<style lang="scss" scoped>
.fixed{
	width: 100px;
	height: 100px;
	background: orange;
	position: fixed;
	right: 30px;
	bottom: 30px;
}
</style>
