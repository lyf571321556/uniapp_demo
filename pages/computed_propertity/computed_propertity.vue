<template>
	<view class="">
		<input type="text" v-model="firstName" placeholder="请输入名"/>
		<input type="text" v-model="lastName" placeholder="请输入姓"/>
		<view>全称：{{firstName}}-{{lastName}}</view>
		<view>计算全称：{{fullName}}</view>
	</view>
</template>
<script setup>
import { ref ,computed} from 'vue';
const firstName = ref("");
const lastName = ref("");
const fullName = computed(()=> firstName.value+"-"+lastName.value);
</script>

<style lang="scss" scoped>
input{
	margin: 10px 10px;
	border: 1px solid gray;
	padding: 0 10px;
}
</style>
