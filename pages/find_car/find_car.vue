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
		<!-- 推荐品牌开始 -->
		<view class="recommendCar-box ">
		    <view class="search ">
		        <view class="rec-topic float-left">
		            <view class="title">
		                <view class="topic-cn">推荐品牌</view> 
		                <view class="topic-en">BRAND</view>
		            </view>
		        </view>
		        <view class="rec-search float-right">
		            <input class="searchbox" type="text" placeholder="宝马X5" >
		            <view  id="carSearch" onclick="searchcar()" class="carSearch"></view>
		        </view>
		    <!-- 默认车标 -->
		        <view class="car_list center">
		            <view class="center" id="carList">
						<view v-for="(item, index) in brandList" :key="index">
							<li class="brand" :data-title="item.title">
								<!-- <a href="carsearch.html?bandId=item.bandId"> -->
								<a href="####">
									<image :src="item.logoUrl"></image>
									<text>{{item.title}}</text>
								</a>
							</li>
						</view>
					</view>
		            <view class="carMenuBox">
		            	<button id="listMore">查看<br>更多</button>
		            	<!-- 下拉菜单 -->
		            	<view class="carMenu" id="carMenu">
		            	    <ul>
		            	        <p style="margin: 1px 10px 0 0;margin-top: 1px; color: #999999;width: 28px;height: 20px; font-size: 14px;">品牌</p>
		            	        <li v-for="(item,index) in carbrand" v-on:click="addClass(index,$event)" :id="item.class" class="menu"><a href="###">{{item.title}}</a></li>
		            	    </ul>
		            	    <view id="Menu">
								<view v-for="(item, index) in loan_list" :key="index">
									<li class="menuCar" :data-title="item.title">
										<!-- <a href="carsearch.html?bandId=item.bandId"> -->
										<a href="#">
											<image :src="item.logoUrl"></image>
											<text>{{item.title}}</text>
										</a>
									</li>
								</view>
		            	    </view>
		            	</view>
		            </view>
		        </view>
		    </view>
		</view>  
		<!-- 推荐品牌结束 -->
		<!-- 热门车系开始 -->
		<view class="carseries-box">
		    <view class="carseries-top">
		        <view class="cartop-left float-left">
		            <ul>
		                <li class="topic-cn">热门车系</li>
		                <li class="topic-en">POPULAR CAR SERIES</li>
		            </ul>
		        </view>
		        <view class="cartop-right float-right">
		            <ul>
						<li v-for="(item,index) in type" v-on:click="selectType(index,$event)"><a href="###" class="carType">{{item.title}}</a></li>
		                
		            </ul>
		        </view>
		    </view>
		    <!-- 车系显示 -->
			<view class="product-tmp">
				<!-- tab循环项 s -->
				<view class="tab-list home-list">
					<view id="list1">
						<view v-for="(item, index) in carList" :key="index">
							<view class="filter_car" v-if="item.series.recommend>0">
								<!-- <a href="/offer/list?psid=2747" class=""> -->
								<a href="###">
									<view class="car_img">
										<image :src="item.series.imgUrl" mode=""></image>
									</view>
									<h3>{{item.series.bandTitle}} {{item.series.typeName}}</h3>
									<p>{{item.maxPrice}}-{{item.minPrice}}万</p>
									<span>共{{item.carNumber}}款车型符合条件<image src="/static/find-car/多边形 2@2x.png"></image></span>
									<button>点击查看</button>
								</a>
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 分页 --> 
		   <view class="pagebox">
		        <view id="pageBox">
		            <p class="sum">共<span>0</span>辆</p>
		            <view class="quantity">
		                <a class="show"><p>10</p>条/页<image src="/static/find-car/下@2x.png"></image></a>
		                <view class="num">
		                    <a class="numActive"><p>10</p>条/页</a>
		                    <a><p>15</p>条/页</a>
		                    <a><p>20</p>条/页</a>
		                    <a><p>25</p>条/页</a>
		                    <a><p>30</p>条/页</a>
		                </view>
		            </view>
		            <span id="prev"><image src="/static/find-car/向左1@2x.png"></image></span>
		            <ul id="pageNavli"></ul>
		            <span id="next"><image src="/static/find-car/向右@2x.png"></image></span>
		            <p class="jump">跳至<input class="ipt"></input>页</p>
		        </view>
		    </view>
		</view>
		<!-- 热门车系结束 -->
		<!-- 底部开始 -->
		<view class="footerbox">
			<view class="container">
				<view class="ftop">
					<view class="logo">
						<view class="item">
							<image src="../../../../static/common/footer-logo.png" mode=""></image>
						</view>
						<view class="item_1">
							中鲁嘉业投资集团有限公司版权所有
						</view>
					</view>
					<view class="footer">
						<view class="cont link">
							<a href="#">进口车源</a>
							<a href="#">贷款计算</a>
							<a href="#">贷款问答</a>
							<a href="#">服务协议</a>
						</view>
						<view class="cont erweima">
							<image src="/static/common/erweima.png" alt="">
							<p>关注微信服务号</p>
						</view>
						<view class="cont erweima">
							<image src="/static/common/erweima.png" alt="" style="">
							<p>扫描下载App</p>
						</view>
					</view>
				</view>
				<view class="clear"></view>
			</view>
			<view class="container copyright">
				<p>Copyright © 2018-2023 ZhongLu Corporation.All Rights Reserved. 备案:<a style="color:#E6E6E6;text-decoration-line: none;" target="_blank" href="//beian.miit.gov.cn/">鲁ICP备2022041008号 </a>  <a style="color:#E6E6E6;text-decoration-line: none;" target="_blank" href="https://www.ydtloan.com/image/yingyezhizhao.jpg">营业执照</a> </p>
				<p> 亿贷通为金融中介服务平台，所有产品均来自银行等持牌金融机构！</p>
			</view>
		</view>
		<!-- 底部结束 -->
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
				loan_list:[],
				brandList:[],
				carList:[],
				carbrand:[
					{id:0,title:'A',class:'a'},
					{id:1,title:'B',class:'b'},
					{id:2,title:'C',class:'c'},
					{id:3,title:'D',class:'d'},
					{id:4,title:'E',class:'e'},
					{id:5,title:'F',class:'f'},
					{id:6,title:'G',class:'g'},
					{id:7,title:'H',class:'h'},
					{id:8,title:'I',class:'i'},
					{id:9,title:'J',class:'j'},
					{id:10,title:'K',class:'k'},
					{id:11,title:'L',class:'l'},
					{id:12,title:'M',class:'m'},
					{id:13,title:'N',class:'n'},
					{id:14,title:'O',class:'o'},
					{id:15,title:'P',class:'p'},
					{id:16,title:'Q',class:'q'},
					{id:17,title:'R',class:'r'},
					{id:18,title:'S',class:'s'},
					{id:19,title:'T',class:'t'},
					{id:20,title:'U',class:'u'},
					{id:21,title:'V',class:'v'},
					{id:22,title:'W',class:'w'},
					{id:23,title:'X',class:'x'},
					{id:24,title:'Y',class:'y'},
					{id:25,title:'Z',class:'z'},
				],
				type:[
					{id:0,title:'所有车型'},
					{id:0,title:'轿车'},
					{id:0,title:'SUV'},
					{id:0,title:'跑车'},
					{id:0,title:'其他'}
				],
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
		onLoad() {
			let that = this;
			//车标
			uni.request({
				url:"https://www.ydtloan.com/api/band/getAll",
				header: {
					"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" //请求头信息
				},	
				method:"POST",
				success(res) {
					// console.log(res.data.data);
					that.brandList= res.data.data;  		
					// console.log(that.brandList);
				}
			})
			// 查看更多
			uni.request({
				url:"https://www.ydtloan.com/api/band/getAllAndGroup",
				header: {
					"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" //请求头信息
				},	
				method:"POST",
				success(res) {
					// console.log(res.data.data[el]);
					that.loan_list = res.data.data.a;  		
					// console.log(that.loan_list);
				}
			})
			// 根据车型获取车信息
			uni.request({
				url:"https://www.ydtloan.com/api/car/getCarSeriesCountInfoByBand",
				header: {
					"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" //请求头信息
				},	
				method:"POST",
				success(res) {
					// console.log(res.data.data);
					that.carList = res.data.data;  		
					console.log(that.carList);
					
				}
			})
		},
        methods: {
			addClass: function(index,event) {
				this.current = index;
				//获取点击对象  
				// var el = event.currentTarget;
				var el = event.currentTarget.id;
				// console.log(event.currentTarget.id);
				let that = this;
				uni.request({
					url:"https://www.ydtloan.com/api/band/getAllAndGroup",
					header: {
						"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" //请求头信息
					},	
					method:"POST",
					success(res) {
						// console.log(res.data.data[el]);
						that.loan_list = res.data.data[el];  		
						console.log(that.loan_list);
					}
				})
			},
			selectType: function(index,event) {
			  this.current = index;
			  //获取点击对象  
			  // var el = event.currentTarget;
			  var el = event.currentTarget.id;
			  // console.log(event.currentTarget.id);
			  let that = this;
			  uni.request({
			  	url:"https://www.ydtloan.com/api/car/smallAppFilter",
			  	header: {
			  		"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" //请求头信息
			  	},	
				data:{'type':'carType'},
			  	method:"POST",
			  	success(res) {
			  		console.log(res.data.data);
					that.carList = res.data.data;  		
					console.log(that.carList);
			  	}
			  })
			}
        }
    }
</script>

<style lang="scss">
	// #ifdef H5
	@import url("../../static/css/find_car/find_car_H5.css");
	@import url("carSource/carSource/carSource.css")
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
