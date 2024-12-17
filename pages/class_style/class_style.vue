<template>
	<view class="box" :class="{active:isActive}">
		v-bind指令用法
	</view>
	<view class="box" :class="isActive?'active':''"></view>
	<view class="box" :style="{width: '200px',height:200+'px',fontSize:fontSize+'px'}">
		内联样式
	</view>
</template>

<script setup>
import { ref } from 'vue';
const isActive=ref(true)
const fontSize =ref(30)
setInterval(()=>{
	isActive.value=!isActive.value
	fontSize.value+=1;
},1000)
</script>

<style lang="scss">
.box{
	width: 100px;
	height: 100px;
	background: red;
	font-size: 20px;
}
.active{
	background: blue;
	color: white;
	border: 5px solid orange;
}
</style>
