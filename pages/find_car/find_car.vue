<template>
	<view class="ydt_index">
		<view class="ydt_header_1">
			<view class="ydt_top-left">
				<image src="../../static/img/che_img/提示@2x.png"></image>
				{{leftText}}
			</view>
			<view class="ydt_top-right">
				{{rightText}}
				<image src="../../static/img/che_img/问题@2x.png">
				{{centerText}}
				<image src="../../static/img/che_img/电话@2x.png"></image>
				
			</view>
		</view>
		<!-- 头部导航 -->
		<view class="ydt_header-box">
			<view class="nav-left logo">
				<image :src="img"></image>
			</view>
			<view class="nav-right">
				<view class="img_2" v-for="(item,index) in img_2">
					<text>{{item.title}}</text>
					<!-- {{img}} -->
				</view>
			</view>
		</view>
		<!-- banner开始 -->
		<view class="ydt_banner">
			<image :src="img_banner"></image>
			<!-- <image src="../../static/img/car_img/carBanner.png"></image> -->
		</view>
		<!-- 中下部分 -->
		<!-- 轮播图 -->
		<view class="ydt_zx">
					
			<!-- <swiper indicator-dots circular>
				<swiper-item> -->
					<customSwiper :swiper-list="swiperList" />
				<!-- </swiper-item>
			</swiper> -->
		</view>
		
	</view>
	
</template>

<script>
    import customSwiper from '@../../components/blackmonth-swiper/index.vue'
    export default {
        components: { customSwiper },
		props: {
			leftText: {//左
				type: String,
				// #ifdef H5
				default: '亿贷通为金融信息服务平台，所有产品均来自持牌金融机构'
				// #endif
				// #ifdef MP-WEIXIN
				default: '亿贷通为金融信息服务平台'
				// #endif
			},
			centerText: {//中
				type: String,
				default: '22-66209937',
			},
			rightText: {//右
				type: String,
				default: '常见问题',
			}
		},
        data() {
            return {
				swipers:[],
				goods:[],
				// 头部导航
				img:"../../static/img/che_img/logo@2x.png",
				img_2:[
					{
						Image:require('../../static/img/che_img/额度@2x.png'),
						title:'首页',
						path:'/pages/goods/goods'
					},
					{
						title:'进口车源',
						path:'/pages/pics/pics'
					},
					{
						title:'贷款中心',
						path:'/pages/pics/pics'
					},
					{
						title:'找车贷',
						path:'/pages/pics/pics'
					},
					{
						title:'信用贷款',
						path:'/pages/pics/pics'
					},
					{
						title:'抵押贷款',
						path:'/pages/pics/pics'
					},
					{
						title:'小额贷',
						path:'/pages/pics/pics'
					},
					{
						title:'贷款计算机',
						path:'/pages/pics/pics'
					}
				],
				// banner开始 
				img_banner:"../../static/img/car_img/carBanner.png",
                swiperList: [{
                	type: 'image',
                		url: '../../static/img/car_img/car2.png',
						
                	}, {
                		type: 'image',
                		url: '../../static/img/car_img/car1 拷贝.png',
                	}, {
                		type: 'image',
                		url: '../../static/img/car_img/car3.png'
                	}]
            }
        },
        methods: {
			
        }
    }
</script>

<style lang="scss">
	// #ifdef H5
	@import url("../../static/css/find_car/find_car_H5.css");
	// #endif
</style>



<!-- <style lang="scss" scoped>
	@import url("../../static/css/find_car/find_car_H5.css");
	.ydt_zx{
		width: 100rpx;
		width: 500rpx;
	}
	swiper{
		width: 800rpx;
		
	}
	.slide-image {
	  position: absolute;
	  height: 200rpx;
	  width: 570rpx;
	  border-radius: 15rpx;
	  z-index: 5;
	  opacity: 0.7;
	  top: 18%;
	  margin: 0 20rpx;
	}
	
	swiper {
	  height: 430rpx;
	}
	
	.active {
	  opacity: 1;
	  z-index: 10;
	  height: 316rpx;
	  width: 572rpx;
	  top: 7%;
	  transition: all 0.2s ease-in 0s;
	}
	
	
</style>
 -->
