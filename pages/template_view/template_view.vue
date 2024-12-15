<template>
	<view>
		计算结果：{{2+2}}
		变量引用:{{ a+6 }}
	</view>
	<view>当天时间毫秒数：{{ Date.now() }}</view>
	<view> 随机数：{{ Math.random()}}</view>
	<view> 条件输出：{{ 1>2 ?'张三':'李四'}}</view>
	<view>函数调用:{{fn()}}</view>
</template>

<script setup>
const a = 5;
function fn(){
	return 'vue3学习';
}
</script>

<style>

</style>
