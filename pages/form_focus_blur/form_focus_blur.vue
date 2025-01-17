<template>
	<view class="formBox">
		<input type="text" :value="iptValue" @focus="isActive=true" @blur="onBlur"
		@input="event => iptValue = event.detail.value"/>
		<image src="../../static/chicken.gif" class="chicken" :class="isActive?'active':''"></image>
		<view>预览：{{iptValue}}</view>
	</view>

	<input class="vmodel" type="text" v-model="iptValue" @confirm="onConfirm"/>
	
	<view class="out">
		<checkbox-group @change="itemChange">
			<view class="item" v-for="(item,index) in shoppingCarList" :key="item.id">
				<checkbox :value="item.id" :checked="item.checked"></checkbox>
				<text class="title">{{item.name}}</text>
				<text class="title">{{item.prince}}</text>
				<text class="del" @click="remove(index)">删除</text>
			</view>
		</checkbox-group>
		
		<view class="card">
			<view class="text">选中商品：{{totalGoodsNum}}个,总价：{{totalGoodsBill}}元</view>
			<view>{{selectedGoods}}</view>
			<view>----------------</view>
			<view>{{shoppingCarList}}</view>
		</view>
	</view>
</template>

<script setup>
import { computed, ref } from 'vue';
//设置tabbar角标
uni.setTabBarBadge({
	index:1,
	text:'20+'
})
const shoppingCarList = ref([
	{id:"1",name:"手机",prince:12,checked:false},
	{id:"2",name:"平板",prince:34,checked:false},
	{id:"3",name:"零食",prince:35,checked:false},
	{id:"4",name:"衣服",prince:100,checked:false},
	{id:"5",name:"电器",prince:9,checked:false},
	{id:"6",name:"食物",prince:88,checked:false},
	{id:"7",name:"饮料",prince:19,checked:false},
])
const selectedGoods = ref([]);
function itemChange(e){
	console.log(e);
	selectedGoods.value = e.detail.value;
	shoppingCarList.value.forEach((e)=>{
		e.checked=selectedGoods.value.includes(e.id)
	})
	//移除角标
	uni.removeTabBarBadge({
		index:1
	})
	uni.showTabBarRedDot({
		index:1
	})
	uni.hideTabBarRedDot({
		index:1
	})
}

const totalGoodsNum = computed(()=>selectedGoods.value.length);


const totalGoodsBill = computed(()=>{
	return shoppingCarList.value.filter(item=>item.checked).reduce((pre,current)=> pre+current.prince,0);
});

function remove(index){
	shoppingCarList.value.splice(index,1);
}

const iptValue = ref("");
const isActive =ref(false)
function onFocus(e){
	console.log(e);
	isActive.value=!isActive.value;
}

function onBlur(e){
	console.log(e);
	isActive.value=!isActive.value;
}
function onInput(e){
	console.log(e);
	iptValue.value = e.detail.value;
}

function onConfirm(e){
	console.log(e);
}
</script>

<style lang="scss" scoped>
.out{
	padding: 10px;
	.item{
		padding: 10px 0;
		.del{
			color: red;
			margin-left: 30px;
		}
		.title{
			margin-left: 10px;
			color: black;
			font-size: 16px;
			font-family: $uni-border-radius-sm;
		}
	}
	.card{
		margin-top: 10px;
		border-top: 1px solid red;
		padding: 10px 10px;
	}
}
.formBox{
	padding: 0 10px;
	margin-top: 40px;
	position: relative;
	input{
		border: 1px solid #ccc;
		height: 40px;
		position: relative;
		z-index: 2;
		background: white;
		padding: 0 12px;
	}
	.chicken{
		height: 24px;
		width: 24px;
		z-index: 1;
		position: relative;
		top: -25px;
		left: calc(50% - 12px);
		transition: top 0.3s;
	}
	.chicken.active{
		top: -65px;
	}
}
.vmodel{
		padding: 0 10px;
		border: 1px solid #ccc;
		height: 40px;
		position: relative;
		z-index: 2;
		background: white;
		padding: 0 12px;
	}

</style>
