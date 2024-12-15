<template>
	<view>
		num数字变化：{{ num }}
	</view>
	<view>num1数字变化：{{ num2 }}</view>
	<view>文本显示测试:{{test}}</view>
	<view>数组显示：{{arr[2]}}</view>
	<view>对象显示：{{ obj.name}} {{obj.age}}</view>
</template>

<script setup>
import { ref } from 'vue';
let num = 6;
// setInterval(()=>{
// 	num++;
// 	console.log(num);
// },1000)
let num2 = ref(3)
console.log(num2.value)
setInterval(()=>{
	num2.value+=1
	console.log(num2.value)
},1000)
let test = ref('测试文本')

let arr = ref([1,2,3,4])
let obj = ref({name:'张三',age:12})
obj.value.age =21;
obj.value.name='李四'
</script>

<style>

</style>
