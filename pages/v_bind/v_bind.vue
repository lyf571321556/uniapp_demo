<template>
	<view>
		<image v-bind:src="picurl"></image>
		<button type="primary" :loading="false" :disabled="false">提交</button>
	</view>
</template>

<script setup>
import { ref } from 'vue';
const picList = ref(["../../static/logo.png","../../static/pic0.jpeg","../../static/pic1.png"])
const picurl = ref("../../static/logo.png")
let i =0;
setInterval(()=>{
		i++
	picurl.value = picList.value[i%3]
},1000)
</script>

<style lang="scss">

</style>
