<template>
	<view class="" style="background: #aad;" >
		<!-- <UserInfoView userName="123" avatar="../../static/pic0.jpeg"></UserInfoView>
		<UserInfoView avatar="../../static/pic1.png"></UserInfoView>
		<UserInfoView :userName="firstName" avatar="../../static/pic3.jpeg"></UserInfoView> -->
		<UserInfoView :userInfo="userInfo"></UserInfoView>
		<!-- 不传值，使用默认值用法 -->
		<UserInfoView></UserInfoView>
		<view>循环自定义组件用法：</view>
		<!-- 循环遍历用法 -->
		<UserInfoView v-for="(user,index) in userList" :userInfo="user"></UserInfoView>
	</view>
</template>

<script setup>
import { ref } from 'vue';
// const firstName = ref('张三')
// 单个对
const userInfo = ref({name:'张三',avatar:'../../static/pic1.png'})

const userList = ref([
	{name:'张三',avatar:'../../static/pic0.jpeg'},
	{name:'李四',avatar:'../../static/pic1.png'},
	{name:'王五',avatar:'../../static/pic2.jpeg'},
	{name:'赵六',avatar:'../../static/pic3.jpeg'}
])
</script>

<style lang="scss" scoped>

</style>
