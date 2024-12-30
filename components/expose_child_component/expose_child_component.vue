<template>
	<view class="out">
		我是子组件{{count}}
	</view>
</template>

<script setup>
import { ref } from 'vue';
const count=ref(10)
const updateCount = function(){
	count.value++;
}
defineExpose(
{
	count:count,
	updateCount:updateCount
});
</script>

<style lang="scss" scoped>

</style>