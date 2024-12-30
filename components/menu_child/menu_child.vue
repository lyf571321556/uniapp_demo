<template>
	<view>
		子组件
		<button @click="$emit('add',Math.random())">$emit按钮1</button>
		<button @click="onClick">onClick按钮2</button>
		<input type="text" @input="onInput"/>
	</view>
</template>

<script setup>
// 代码块使用emit传值
const emit = defineEmits(["add","inputChange"]);
function onClick(){
	emit('add',Math.random());
}

function onInput(e){
	emit('inputChange',e.detail.value);
}
</script>

<style lang="scss">
input{
	margin: 5px 5px;
	border: 1px solid #ccc;
}
</style>