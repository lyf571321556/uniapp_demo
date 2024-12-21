<template>
	<view class="out">
		<view class="item" v-for="(item,index) in shoppingCarList" :key="item.id">
			<checkbox></checkbox>
			<text class="title">{{item.name}}</text>
			<text class="del" @click="remove(index)">删除</text>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
const shoppingCarList = ref([
	{id:1,name:"手机",prince:12},
	{id:2,name:"平板",prince:34},
	{id:3,name:"零食",prince:35},
	{id:4,name:"衣服",prince:100},
	{id:5,name:"电器",prince:9},
	{id:6,name:"食物",prince:88},
	{id:7,name:"饮料",prince:19},
])

function remove(index){
	shoppingCarList.value.splice(index,1);
}
</script>

<style lang="scss" scoped>
.out{
	padding: 10px;
	.item{
		padding: 10px 0;
		.del{
			color: red;
			margin-left: 30px;
		}
		.title{
			margin-left: 10px;
			color: black;
			font-size: 16px;
			font-family: $uni-border-radius-sm;
		}
	}
}
</style>
