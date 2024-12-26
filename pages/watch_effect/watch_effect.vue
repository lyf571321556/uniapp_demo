<template>
	<view class="">
		<input type="text" v-model="person"/>
	</view>
	{{person}}
</template>

<script setup>
import { ref, watch } from 'vue';

const person = ref("")
watch(person,(newValue,oldValue)=>{
	console.log(newValue);
	console.log(oldValue);
})
</script>

<style lang="scss" scoped>

</style>
