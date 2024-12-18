<template>
	<view class="box" v-on:click="printNum"  :style="{background:color}">
		{{number}}
	</view>
	<view class="box" @click="printNum">
		{{number}}
	</view>
	<view>
		<switch :checked="false" @change="printChangeValue">打开</switch>
		<button type="primary" :loading="loading">点击按钮</button>
	</view>
</template>

<script setup>
import { ref } from 'vue';
const number = ref(3)
const color = ref("#fec3ed")
const loading = ref(false)
function printNum(){
	number.value++;
	console.log('clicked!')
	const colorNum = Math.random().toString().substring(2,5)
	color.value = '#'+colorNum;
}
function printChangeValue(event){
	console.log(event.detail.value);
	loading.value =event.detail.value;
}
</script>

<style lang="scss">
.box{
	width: 100px;
	height: 100px;
	background: blue;
}
</style>
