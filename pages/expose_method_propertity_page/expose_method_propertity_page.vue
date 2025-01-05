<template>
	<view class="">
		<expose_child_component ref="child"></expose_child_component>
		<view>-------</view>
		<button @click="update">点击修改子元素的值</button>
	</view>
</template>

<script setup>
import { onMounted, ref } from 'vue';
const child = ref(null)
console.log(child.value)
const update =function(){
	child.value.update();
	console.log(child.value.count)
}
onMounted(()=>{
	console.log(child.value)
})
</script>

<style lang="scss" scoped>

</style>
