<template>
	<view class="box">
		<view v-for="(item,index) in dataSource" :key="item.id">
			<view>{{item.title}}</view>
			<text class="title">{{item.body}}</text>
			<view>-----------------------------</view>
		</view>
	</view>
</template>

<script setup>
import { onMounted, ref } from 'vue';
let dataSource = ref([])
// 异步请求方式
uni.request({
	url:'https://jsonplaceholder.typicode.com/posts',
	method:'GET',
	data:{id:5},
	header:{
		token:'',
		"content-type":"application/json"
	},
	success(result) {
		console.log(result.data)
		dataSource.value = result.data;
	},
	fail(err) {
		console.log('-----');
		console.log(err)
	}
	,complete() {
		console.log("request completed!")
	}
})
// promise请求方式
// uni.request({
// 	url:'https://jsonplaceholder.typicode.com/posts',
// }).then((res)=>{
// 	console.log(res)
// 	dataSource.value = res.data
// }).catch((e)=>{
// 	console.log(e);
// })

// 异步同步化
async function request(){
	let result = await uni.request({
		url:'https://jsonplaceholder.typicode.com/posts',
		data:{id:5},
		method:'GET'
	});
	console.log(result)
	dataSource.value = result.data
}
request()
</script>
<style lang="scss" scoped>
.box{
	font-size: 12rpx;
	box-sizing: border-box;
	background: '#ccc';
}
</style>
