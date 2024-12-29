<template>
	<view class="userinfo">
		<image :src="userInfo.avatar"></image>
		<view class="userName">{{userInfo.name}}</view>
	</view>
</template>

<script setup>
import { computed } from 'vue';
// 定义单个属性传值
// const props = defineProps(['userName','avatar'])
// const props = defineProps({
// 	userName:{
// 		type:String,
// 		default:'匿名',
// 		required:true
// 	},
// 	avatar:{
// 		type:String,
// 		default:"../../static/logo.png",
// 	}
// })
// console.log(props.userName);
// const customeName = computed(()=> props.userName+'@123.com');


// 定义对象传值
// defineProps(["userInfo"]);
// 定义对象传值+默认值
defineProps({
	userInfo:{
		type: Object,
		default(){
			return {name:'匿名',avatar:'../../static/logo.png'}
		},
	}
});
</script>

<style lang="scss" scoped>
.userinfo{
	height: 150px;
	margin: 5px 5px;
	background: #ccc;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	image{
		width: 100px;
		height: 100px;
		border-radius: 80%;
	}
	view{
		padding: 10px 10px;
		font-size: 18px;
		text-align: center;
	}
}
</style>