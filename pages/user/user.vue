<template>
	<view class="wrap">
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="4000" :duration="1000" :circular="true" indicator-active-color="#fff">
						<swiper-item v-for="(item,i) in images" :key="i">
							<image v-if="item" class="swiper-image" :src="item.url"></image>
							<image v-else class="swiper-image" src="../../static/image/bg.png"></image>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
		<button type="default" style="background:#2a82e4;color:#fff;" @click="connect">联系我们</button>
		<button type="default" @click="pop">免责声明</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				images: [],
			};
		},
		onShow() {
			this.getSwiper()
		},
		methods: {
			getSwiper() {
				this.$http.post('/api/picture/all').then(res => {
					this.images = res.data;
				})
			},
			connect() {
				uni.showModal({
					title: '联系我们',
					showCancel:false,
					content: '请添加客服微信：fandeng100'
				})
			},
			pop() {
				uni.showModal({
					title: '免责声明',
					showCancel:false,
					content: '小程序数据来源：中国福彩网、中国体彩网、彩票数据网站，请以福彩、体彩官网公布的数据为准'

				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		min-height: 100vh;
		background: #f5f5f5;
	}
	
	.swiper-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	
	swiper {
		height: 300rpx;
	}
	
	
	button{
		margin: 20rpx;
		font-size: 32rpx;
	}
</style>
