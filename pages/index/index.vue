<template>
	<view class="ydt-app">
		
		<view class="ydt-index-header">
			<view class="ydt-hearer-head" height="150rpx">
				<view class="ydt-logo">
					<image src="../../static/index/header-logo1.png" mode="aspectFit"></image>
				</view>
				<view class="ydt-bar">
					<view class="ydt-bar-item" v-for="(item,index) in bars" :key="index">
						<text>{{item.name}}</text>
					</view>
				</view>
			</view>
			<view class="head-foot">
				<view class="foot-left">
					<view class="">
						<view>
							<text style="font-size: 60rpx;">点击进入</text>
						</view>
						<view class="left-img">
							<text style="font-size: 100rpx; font-weight: bold;color: #F6C686;line-height: 150rpx;">选车服务</text>
							<view class="img_jiantou" style="width: ;">
								<!-- <img src="../../static/index/向右.png" alt=""> -->
								<image src="../../static/index/向右.png" mode=""></image>
							</view>
						</view>
						<view class="line2" style="width: 500rpx;height: 10rpx;color: #F6C686;background-color: #F6C686;border-radius: 25rpx;"></view>
					</view>
					
				</view>
				<view class="foot-right">
					<button type="warn">
						<text style="font-size: 80rpx;text-align: center;">进入贷款中心</text></button>
				</view>
			</view>
		</view>
		<view class="ydt-index-content">
			<!-- 公司热门产品展示 -->
			<view class="ydt-index-content-header" >
					<view class="chinese">
						<text>公司热门产品展示 您不容错过</text>			
					</view>
					<view class="english">
						<text>HOT PRODUCTS</text>			
					</view>
			</view>
			<view class="ydt-first-content">
			<view class="ydt-four-bgimg" >
				<view class="ydt-bg-img">
					<view class="ydt-front-img" style="background-image: url('../../static/index/进口车源背景图透明度10@2x.png');background-size: 100% 100%;">
						<img src='../../static/index/进口车源icon@2x.png'></img>
						<text>进口车源</text>
						<view class="line"></view>
					</view>
				</view>
				<view class="ydt-bg-img">
					<view class="ydt-front-img" style="background-image: url('../../static/index/便捷车贷背景图透明度10@2x.png');background-size: 100% 100%;">
						<img src='../../static/index/便捷车贷icon@2x.png'></img>
						<text>便捷车贷</text>
						<view class="line"></view>
					</view>
				</view>
				<view class="ydt-bg-img">
					<view class="ydt-front-img" style="background-image: url('../../static/index/正规金融背景图透明度14@2x.png');background-size: 100% 100%;">
						<img src='../../static/index/正规金融icon@2x.png'></img>
						<text>正规金融</text>
						<view class="line"></view>
					</view>
				</view>
				<view class="ydt-bg-img">
					<view class="ydt-front-img" style="background-image: url('../../static/index/共享收益背景图透明度10@2x.png');background-size: 100% 100%;">
						<img src='../../static/index/共享收益icon@2x.png'></img>
						<text>共享收益</text>
						<view class="line"></view>
					</view>
				</view>
			</view>
				
			</view>
		</view>
		<!-- 核心业务 -->
		<view class="ydt-second-header" style="background-image: url('../../static/index/核心业务背景@2x.png');">
			<view class="ydt-head-bg">
				<view class="ydt-second-head" v-for="(item,index) in tit2" :key="index">
					<text>{{item.tit}}</text>			
				</view>
			</view>
			<view class="ydt-second-content">
				<view class="ydt-twobg-img">
					<view class="ydt-img1" style="background-image: url('../../static/index/核心业务车背景@2x.png');">
						<img src="../../static/index/核心业务车icon@2x.png" alt="">
						<text class="tit">进口车服务</text>
						<text class="tet">汇集上万种车辆供您选择，您想要的这里都有！</text>
						<button>点击查看</button>
					</view>
					<view class="ydt-img1" style="background-image: url('../../static/index/核心业务金融背景@2x.png');">
						<img src="../../static/index/核心业务贷款icon@2x.png" alt="">
						<text class="tit">金融科技服务</text>
						<text class="tet">最高可贷款80万，年利率低至0.001%</text>
						<button>点击查看</button>
					</view>
				</view>
				
			</view>
		</view>
		<!-- 最新资讯 -->
		<view class="ydt-third">
			<view class="ydt-third-head">
				<text class="chinese">最新资讯</text>
			</view>
			<view class="ydt-third-head">
				<text class="english">LATEST INFOMATION</text>
			</view>
			<view class="ydt-content-box">
				<view class="ydt-third-content" v-for="(item,index) in content" :key="index">
				<!-- <image src="../../static/index/newpic@2x.png" mode=""></image> -->
				<img :src="item.img" alt="">
				<view style="margin-top: 25rpx;margin-bottom: 25rpx;font-weight: bold;">
					<text>{{item.tit}}</text>
				</view>
				<text>{{item.tet}}</text>
				</view>
			</view>
			<button type="warn"><text>查看更多</text></button>
				
		</view>
		<!-- 联系我们 -->
		<view class="ydt-forth">
			<view class="ydt-forth-head">
				<!-- <view class="ydt-fbg" style="background-image: url('../../static/index/contpic.png');height: 772rpx;width: 3840rpx;">
					
				</view> -->
				<view class="ydt-bg-img1">
					<img src="../../static/index/contpic.png" alt="">
				</view>
				<view class="ydt-bg2">
					<view class="ydt-bg-text">
						<text>联系我们</text>
						<text>CONTACT US</text>
					</view>
					<view class="ydt-img2-bg">
						<view class="ydt-img2">
							<img src="../../static/index/map.png" alt="">
						</view>
						<view class="ydt-text">
							<view class="ydt-cont-content">
							<text class="method" space="nbsp"> 联系方式</text>
							<view class="ydt-message1">
								<img src="../../static/index/contphone.png" alt="">
								<text>022-66209937</text>
							</view>
							<view class="ydt-message2">
								<img src="../../static/index/contemail.png" alt="">
								<text>sunshijun@ydtloan.com(联系邮箱)</text>
							</view>
							<view class="ydt-message3">
								<img src="../../static/index/contsuggest.png" alt="">
								<text>shichuancheng@ydtloan.com(投诉建议)</text>
							</view>
							</view>
							<view class="ydt-cont-content2">
								<text class="method" space="nbsp"> 联系地址</text>
								<view class="ydt-message2">
									<img src="../../static/index/address.png" alt="">
									<text>天津市滨海新区国信大厦A1座501室中鲁嘉业投资集团有限公司</text>
								</view>
							</view>
						</view>
						
					</view>
				</view>
				
				
			</view>
		</view>
		<!-- 联系我们 -->
					<view class="ydt_contact">
							<!-- one -->
							<view class="contact_one">
									<view class="contact_logo"><image src="../../static/index/footer-logo.png"></image></view>
									<view class="contact_p1"><text>中鲁嘉业投资集团有限公司版权所有</text></view>
							</view>
							<!-- two -->
							<view class="contact_two">
									<view class="contact_p2" v-for="(item,index) in contact_p2">
											<text>{{item.name}}</text>
									</view>
							</view>
							<!-- three -->
							<view class="contact_three">
									<view class="contact_img"><image src="../../static/index/erweima.png"></image></view>
									<view class="contact_p"><text>关注微信服务号</text></view>
							</view>
							<!-- four -->
							<view class="contact_four">
									<view class="contact_img"><image src="../../static/index/erweima.png"></image></view>
									<view class="contact_p"><text>扫描下载App</text></view>
							</view>
					</view>
					<!-- 最底部 -->
					<view class="ydt_bottom">
							<view class="contact_p"><text>Copyright © 2018-2023 ZhongLu Corporation.All Rights Reserved. 备案:鲁ICP备2022041008号 营业执照</text></view>
							<view class="contact_p"><text>亿贷通为金融中介服务平台，所有产品均来自银行等持牌金融机构！</text></view>
					</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				screenHeight:0,
				bars:[
					{name:"首页"},
					{name:"关于我们"},
					{name:"联系我们"},
					{name:"车源中心"},
					{name:"贷款中心"}
				],
				tit2:[
					{tit:"核心业务"},
					{tit:"CORE BUSINESS"}
				],
				content:[
					{
						img:'../../static/index/newpic@2x.png',
						tit:"青春正当时，不负好时代",
						tet:"青春正当时，不负好时代青春正当时，不负好时代青春正当时，不负好时代青春正当时，不负好时代青春正当时，不负好时代青春正当时，不负好时代青春正当时，不负好时代青春正当时，不负好时代"
					},
					{
						img:'../../static/index/newpic@2x.png',
						tit:"青春正当时，不负好时代",
						tet:"青春正当时，不负好时代青春正当时，不负好时代青春正当时，不负好时代青春正当时，不负好时代青春正当时，不负好时代青春正当时，不负好时代青春正当时，不负好时代青春正当时，不负好时代"
					},
					{
						img:'../../static/index/newpic@2x.png',
						tit:"青春正当时，不负好时代",
						tet:"青春正当时，不负好时代青春正当时，不负好时代青春正当时，不负好时代青春正当时，不负好时代青春正当时，不负好时代青春正当时，不负好时代青春正当时，不负好时代青春正当时，不负好时代"
					}
				],
				contact_p2:[
					{name:"进口车贷"},
					{name:"贷款计算"},
					{name:"贷款问答"},
					{name:"服务协议"}
				]
			}
		},
		onLoad() {
			this.screenHeight=uni.getSystemInfoSync().windowHeight
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.ydt-app{
		display: flex;
		flex-direction: column;
		width: 750rpx;
		height: 100%;
		// height: 422rpx;
		// 100%
	}
	.ydt-index-header{
		display: flex;
		flex-direction:column;
		justify-content: space-between;
		background-image: url('../../static/index/header-img.png');
		background-size: 100% 100%;
		width: 750rpx;
		min-height: 100%;
		height: 54rem;
		background-repeat: no-repeat;
		image{
			width: 100%;
			height: 100%;
		}
		.ydt-hearer-head{
			width: 750rpx;
			height: 100rpx;
			display: flex;
			margin-top: 50rpx;
			// margin-left: 200rpx;
			.ydt-logo{
				width: 50%;
				padding-left: 6%;
				image{
					width: 396rpx;
					height: 136rpx;
				}
			}
			.ydt-bar{
				width:50%;
				display: flex;
				align-items: center;
				justify-content: space-around;
				flex-wrap: nowrap;
				.ydt-bar-item{
					display: flex;
					justify-content: space-between;
					text{
						color: white;
						font-size: 40rpx;
					}
				}
			}
		}
		.head-foot{
			// position: absolute;
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-left: 200rpx;
			// margin-right: 300rpx;
			margin-bottom: 200rpx;
			width: 90%;
			color: #DEDEDE;
			.foot-left{
				// width: 50%;
				.left-img{
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: center;
					text-align: center;
					image{
						margin-top: 25rpx;
						width: 142rpx;
						height: 142rpx;
					}
				}
				
			}
			button{
					width: 560rpx;height: 165rpx;display: flex;align-items: center;
				}
		}
	}
	.ydt-index-content{
		display: flex;
		height: 1200rpx;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		margin-top: 35rpx;
		.ydt-index-content-header{		
			view{
				width: 100%;
			}
		}
	}
	.chinese{
		font-size: 64rpx ;
		font-weight: bold;
	}
	.english{
		font-size: 40rpx ;
		color: #C84241;
		text-align: center;
		line-height: 120rpx;
	}
	.ydt-four-bgimg{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 750rpx;
		.ydt-bg-img{
			margin-top: 80rpx;
			margin-left: 40rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			.ydt-front-img{
				width: 576rpx;height: 558rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				img{
					margin-bottom: 20rpx;
				}
				text{
					color: #C84241;
					font-size: 40rpx;
					font-weight: bold;
				}
			}
			.line{
				background: #C84241;
				width: 50rpx;
				height: 10rpx;
				margin-top: 25rpx;
				border-radius: 30rpx;
			}
		}
	}
	.ydt-second-header{
		display: flex;
		height: 1354rpx;
		width: 100%;
		// justify-content: center;
		// padding-top: 10rpx;
		flex-direction: column;
		align-items: center;
		margin-top: 70rpx;
		.ydt-head-bg{
			margin-top: 120rpx;
			display: flex;
			align-items: center;
			// justify-content: center;
			flex-direction: column;
			.ydt-second-head{
				text{
					color: whitesmoke;
					font-size: 45rpx;
					line-height: 60rpx;
				}
			}
		}
		.ydt-second-content{
			// display: flex;
			// align-items: center;
			// justify-content: center;
			// flex-direction: row;
			.ydt-twobg-img{
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: row;
				margin-top: 120rpx;
				.ydt-img1{
					display: flex;
					align-items: center;
					justify-content: center;
					flex-direction: column;
					width:1170rpx;
					height: 680rpx;
					margin-right: 60rpx;
					.tit{
						font-size: 43rpx;
						color: #F9F9F9;
						margin-bottom: 35rpx;
						margin-top: 30rpx;
					}
					.tet{
						font-size: 28rpx;
						color: #F9F9F9;
						margin-bottom: 40rpx;
						margin-top: 30rpx;
					}
					button{
						width: 392rpx;
					}
					// img{
					// 	width:142rpx;height: 142rpx;
						
					// }
				}
			}
		}
		
	}
	.ydt-third{
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		margin-top: 240rpx;
		button{
			display: flex;
			justify-content: center;
			align-items: center;
			margin-top: 70rpx;
			margin-bottom: 120rpx;
			width: 684rpx;
			height: 128rpx;
			text-align: center;
		}
		.ydt-content-box{
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction:row;
			width: 766rpx;
			margin-top: 80rpx;
			.ydt-third-content{
				margin-left: 60rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;
				text{
					display: flex;
					align-items: center;
					justify-content: center;
					width: 766rpx;
				}
			}
		}
		
	}
	.ydt-forth{
		width: 100%;
		height: 100%;
		
		.ydt-forth-head{
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			.ydt-bg-img1{
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;
				text{
					color: red;
				}
				img{
					width: 3840rpx;
					height: 772rpx;
				}
				
			}
			.ydt-bg2{
				
				margin-top: -600rpx;
				.ydt-bg-text{
					display: flex;
					flex-direction: column;
					color: #F9F9F9;
					margin-bottom: 80rpx;
					text-align: center;
					line-height: 60rpx;
					font-size: 40rpx;
				}
				.ydt-img2-bg{
					width: 2400rpx;
					height: 1390rpx;
					border-radius: 25rpx;
					background-color:#F9F9F9 ;
					display: flex;
					flex-direction: row;
					box-shadow:0 9px 10px 1px rgb(128,128 ,128 );
					.ydt-text{
						display: flex;
						flex-direction: column;
						justify-content: space-around;
						align-items: center;
						margin-top: 280rpx;
						margin-bottom: 280rpx;
						margin-left: 40rpx;
						margin-right: 100rpx;
						line-height: 40rpx;
					}
				
				}
			}
		}
	}
	.method{
		font-weight: bold;
		line-height: 150rpx;
		padding-left: 70rpx;
	}
		/* 联系我们 */
		        .ydt_contact{
					margin-top: 160rpx;
		                width: 100%;
		                height: 400rpx;
		                background-color: #393939;
		                display: flex;
		                justify-content: center;
		                align-items: center;
		                text-align: center;
		                /* display: grid; */
		                /* grid-template-columns: repeat(4, 1fr); */
		        }
		        .ydt_contact{
		                /* display: flex;         */
		        }
		        .ydt_contact text{
		                color: #DEDEDE;
		                font-size: 28rpx
		        }
		        .contact_p1 text{
		                color: #fff;
		                font-size: 30rpx;
		        }
		        /* one */
		        /* 图片 */
		        .contact_one{
		                width: 25%;
		        }
		        .contact_one,.contact_two,.contact_three{
		                border-right: 2px solid #DEDEDE;
		                border-right-style: dashed;
		        }
		        .contact_two,.contact_three,.contact_four{
		                width: 15%;
		        }
		        
		        .contact_logo image{
		                width: 396rpx;
		                height: 138rpx;
		        }
		        /* three */
		        .contact_img image{
		                width: 192rpx;
		                height: 192rpx;
		        }
		        
		/* 最底部 */
		        .ydt_bottom{
		                height: 150rpx;
		                background-color: #393939;
		                text-align: center;
		        }
		        /* 文字 */
		        .contact_p text{
		                font-size: 24rpx;
		                color: #DEDEDE;
		                line-height: 40rpx;
		        }
	// }
		
</style>
