<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			uni.setTabBarItem({
				index:1,
				text:'自定义1'
			})
			
			//隐藏、显示tabbar
			setTimeout(()=>{
				uni.hideTabBar()
				uni.showTabBar()
			},1000)
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/* 从根目录开始引入样式 */
	@import "@/common/css/style.css";
/*每个页面公共css */
view{
	font-size: 40rpx;
	box-sizing: border-box;
}
</style>
