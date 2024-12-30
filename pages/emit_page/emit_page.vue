<template>
	<view class="">
		<menu_child @add="onAdd" @inputChange="onChange"></menu_child>
		<view class="num_box" :style="{background:color}">boxnum:{{num}}</view>
		<view class="input_box" :style="{background:color}">boxcontent:{{input}}</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';

	const num =ref(0)
	const color = ref('#fff')
	const onAdd = function(e){
		console.log(e);
		num.value = e;
		color.value = '#'+String(e).substring(3,6)
	}
	const input =ref('')
	const onChange = function(e){
		console.log(e);
		input.value = e;
	}
</script>

<style lang="scss" scoped>
.num_box{
	padding: 10px 10px;
	width: 100px;
	height: 100px;
	background: #fff;
}
</style>
