<template>
	<view class="box" hover-class="boxHover" hover-stay-time="0">
		view布局标签
		<view class="innerBox" hover-class="innerHover" hover-stop-propagation hover-stay-time="1">
			内部元素
		</view>
	</view>
	<text selectable space="ensp">可以复制的文本</text>
	<navigator url="/pages/image/image">跳转到图片列表</navigator>
</template>

<script setup>

</script>

<style lang="scss">
.box{
	width: 200px;
	height: 200px;
	background: #ccc;
}

.boxHover{
	background: red;
	width: 200;
}

.innerBox{
	width: 150px;
	height: 150px;
	background: blue;
}
.innerHover{
	background: purple;
}
</style>
