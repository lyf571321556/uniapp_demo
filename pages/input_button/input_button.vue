<template>
	<view>
		按钮用法示例:
		<button size="default">提交</button>
		<button size="mini" type="primary" disabled>提交</button>
		<button size="mini" type="primary" loading="">保存</button>
	</view>
	<view>
		输入框用法示例:
		<input type="text"  value="" placeholder="请输入任意内容" placeholder-class="iptClass"/>
		<input type="number"  value="" placeholder="请输入数字" placeholder-class="iptClass"/>
		<input type="idcard"  value="" placeholder="请输入身份证号码" placeholder-class="iptClass"/>
		<input type="tel"  value="" placeholder="请输入手机号" placeholder-class="iptClass"/>
		<input type="tel"  value="" placeholder="请输入密码" password="" disabled=""/>
		<input type="tel"  value="" placeholder="这个不能输入" disabled=""/>
		<input type="tel"  value="" placeholder="这个限制输入10个字符"  maxlength="10"/>
		<input type="text"  confirm-type="done" placeholder="这个影响键盘布局"  maxlength="10"/>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
.iptClass{
	color: orange;
}
</style>
