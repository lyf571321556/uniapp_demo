<template>
	<view class="out">
		<view class="box" v-for="(item,index) in 10" :key="index">
			box模块-{{index+1}}
		</view>
		<view v-for="(item,index) in datasource" :key="item.id">{{item.name+'-'+item.num}}</view>
	</view>
	<ul>
		<template v-for="(item,index) in datasource">
			<li>{{item.name+'-'+item.num}}</li>
			<li>~~~~~~~~</li>
		</template>
	</ul>
</template>

<script setup>
import { ref } from 'vue';
const datasource = ref([{id:1,name:"乔丹",num:23},{id:2,name:"詹姆斯",num:6},{id:3,name:"科比",num:24}])
</script>

<style lang="scss" scoped>

</style>
