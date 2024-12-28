<template>
	<view class="">
		<input type="text" v-model="content"/>
		<input type="text" v-model="person.name"/>
	</view>
	{{person}}
	<view class="secondBox">
		<input type="text" v-model="firstName" placeholder="姓"/>
		<input type="text" v-model="fullName" placeholder="名"/>
		<view>变更后名称为：{{}}</view>
	</view>
</template>

<script setup>
import { ref, watch, watchEffect } from 'vue';
const content =ref("")
const person = ref({
	name:"张三",
	age:24
})
const firstName = ref("jack")
const fullName = ref("lily")
// 默认浅监听
watch(content,(newValue,oldValue)=>{
	console.log("simple listen by content");
	console.log(newValue);
	console.log(oldValue);
})

// 默认浅监听,如果需要深深监听对象属性，需要实现get方法实现就监听属性
watch(()=>person.value.name,(newValue,oldValue)=>{
	console.log("deep listen by person.name");
	console.log(newValue);
	console.log(oldValue);
})

// 开启深度监听第二种方式
watch(person,(newValue,oldValue)=>{
	console.log("deep listen by person");
	console.log(newValue);
	console.log(oldValue);
},{deep:true,immediate:true})


// 监听多个对象
watch([firstName,fullName],([newFirstName,newFullName],[oldFirstName,oldFullName])=>{
	console.log("监听多个对象");
	console.log(newFirstName+'-'+newFullName);
	console.log(oldFirstName+'-'+oldFullName);
	console.log("监听多个对象");
})

//监听所有
watchEffect(()=>{
	console.log("watchEffect:"+firstName.value+'===='+fullName.value);
	
},{flush: 'post'})


</script>

<style lang="scss" scoped>
input{
	border: 1px solid gray;
	margin: 10px 10px;
}
</style>
