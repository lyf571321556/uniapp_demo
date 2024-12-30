<template>
	<view class="layout">
		<scroll-view scroll-y="true" class="scroll" ref="scroll">
			<view>测试内容</view>
		</scroll-view>
		<lifecycle-component v-if="show"></lifecycle-component>
	</view>
</template>

<script setup>
import { onMounted, ref } from 'vue';
const scroll = ref(null);
const show = ref(true);
console.log(scroll.value);
onMounted(()=>{
	console.log(scroll.value);
});

setTimeout(()=>{
	console.log("value:"+show.value)
	show.value = !show.value;
},2000)

</script>

<style lang="scss" scoped>

</style>
