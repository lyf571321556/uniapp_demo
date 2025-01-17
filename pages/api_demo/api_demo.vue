<template>
	<view class="">
		<button @click="showToast">显示Toast</button>
		<button @click="hideToast">关闭Toast</button>
		<button @click="showLoading">显示Loading</button>
		<button @click="hideLoading">关闭Loading</button>
		<button @click="showDialog">显示Dialog模态框</button>
		<button @click="showActionsheet">显示底部弹框</button>
	</view>
</template>

<script setup>
uni.showNavigationBarLoading()
setTimeout(()=>{
	uni.setNavigationBarTitle({
		title:"动态标题",
	})
	uni.setNavigationBarColor({
		backgroundColor:'#4cd964',
		frontColor:'#3F536E'
	})
	uni.hideNavigationBarLoading()
	// 关闭home页面按钮
	uni.hideHomeButton()
},2000)
function showToast(){
  uni.showToast({
    title:'错误提示错误提示错误提示错误提示错误提示',
    position:'top',
    duration:1000,
	icon:'error',
	duration: 4000,
	mask:false, // 是否能穿透触摸，相当于移动端的点击空白区域关闭dialog
	image:'../../static/logo.png',
    complete() {
      console.log("弹窗显示完毕");
    },
	success() {
		console.log("弹窗成功");
	},
	fail() {
		console.log("弹窗失败");
	}
  })
}

function hideToast(){
	uni.hideToast();
}

function showLoading(){
	uni.showLoading({
		title:'加载数据中。。。',
		fail: () => {
			console.log("显示loading失败");
			uni.hideLoading()
		}
	})
}

function hideLoading(){
	setTimeout(()=>{
		uni.hideLoading()
	},2000)
}

function showDialog(){
	uni.showModal({
		cancelText:'取消',
		confirmText:'确定',
		editable:false,
		title:'删除提示',
		content:'我是模态框内容',
		cancelColor:'#999',
		confirmColor:'#4cd964',
		success: (res) => {
			console.log(res)
			if(res.confirm){
				console.log("dialog confirm ok");
			}else{
				console.log("dialog confirm cancel");
			}
			
		},
		fail: (res) => {
			console.log("dialog fail");
		},
		complete: (res) => {
			console.log(res)
			console.log("dialog complete");
		}
	})
}

let arrs = [1,2,3,4,5,6,7,8,9,10]
function showActionsheet(){
	uni.showActionSheet({
		title:'列表',
		alertText:'请选择一个选项',
		itemList:arrs,
		itemColor:'#4cd964',
		success: (res) => {
			console.log("用户选择了:"+arrs[res.tapIndex])
			console.log(res)
		},
		fail: (res) => {
			console.log(res)
		},
		
	})
}

</script>

<style lang="scss" scoped>

</style>
