<template>
	<view>
		子组件
	</view>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';

onMounted(()=>{
	console.log('子组件被挂载了')
})
onUnmounted(()=>{
	console.log('子组件被卸载了')
})
</script>

<style lang="scss" scoped>

</style>