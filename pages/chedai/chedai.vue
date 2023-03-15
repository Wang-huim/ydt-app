<template>
	<view class="ydt_index">
		<!-- 顶部 -->
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
		</view>
		<!-- container开始 -->
		<view class="ydt_container">
			<view class="con_list" v-for="(item,index) in con_list">
				<view class="con_img"><image class="con_img1" :src="item.Image"></image></view>
				<view class="con_p">
					<view><text class="title_1">{{item.title}}</text></view>
					<view><text class="title_2">{{item.title2}}</text></view>
				</view>
			</view>
		</view>
		<!-- 中间 -->
		<view class="ydt_index_content_box">
			<!-- one—优选贷款匹配 -->
			<!-- 文字 -->
			<view class="ydt_title" v-for="(item,index) in ydt_title">
				<view>
					<text class="title1">{{item.title1}}</text>
					<text class="title2">{{item.title2}}</text>
				</view>
				<view><text class="title3">{{item.title3}}</text></view>
			</view>
			<!-- 第二部分 intelligence-->
			<view class="intelligence">
				<view class="intelligence_one">
					<!-- 图片 -->
					<view class="intelligence_img">
						<image src="../../static/img/che_img/汽车@2x.png"></image><view class="intelligence_title">
						<view class="title_h1">
							<view class="title_h1_1">
								<view></view>
								<text>我有汽车</text>
							</view>
							<view class="title_h1_2">
								<button>立即申请</button>
							</view>
						</view>
						<view class="title_h2">
							<view class="title_h2_1">
								<text><text>抵押物：</text>押车或不押车</text>
								<text><text class="h2_1">利率范围：</text>0.22-0.88%</text>
							</view>
							<view class="title_h2_1">
								<text><text space="emsp">额 度：</text>最高80万</text>
								<text><text class="h2_1">房贷时间：</text>当天放款</text>
							</view>
						</view>
					</view>
					</view>
					
				</view>
				
				<view class="intelligence_one_2">
					<!-- 图片 -->
					<view class="intelligence_img">
						<image src="../../static/img/che_img/房产@2x.png"></image>
						<view class="intelligence_title">
							<view class="title_h1">
								<view class="title_h1_1">
									<view></view>
									<text>我有房产</text>
								</view>
								<view class="title_h1_2">
									<button>立即申请</button>
								</view>
							</view>
							<view class="title_h2">
								<view class="title_h2_1">
									<text><text>抵押物：</text>房产抵押</text>
									<text><text class="h2_1">利率范围：</text>0.24-0.69%</text>
								</view>
								<view class="title_h2_1">
									<text><text space="emsp">额 度：</text>最高5000万</text>
									<text><text class="h2_1">房贷时间：</text>最快1-4天</text>
								</view>
							</view>
						</view>
					</view>
					
				</view>
				
				<view class="intelligence_one">
					<!-- 图片 -->
					<view class="intelligence_img">
						<image src="../../static/img/che_img/保单图@2x.png"></image>
						<view class="intelligence_title">
							<view class="title_h1">
								<view class="title_h1_1">
									<view></view>
									<text>我有保单</text>
								</view>
								<view class="title_h1_2">
									<button>立即申请</button>
								</view>
							</view>
							<view class="title_h2">
								<view class="title_h2_1">
									<text><text>抵押物：</text>无需抵押</text>
									<text><text class="h2_1">利率范围：</text>0.42-0.96%</text>
								</view>
								<view class="title_h2_1">
									<text><text space="emsp">额 度：</text>最高180万</text>
									<text><text class="h2_1">房贷时间：</text>最快1-2天</text>
								</view>
							</view>
						</view>
					</view>
					
				</view>
				
				
			</view>
			<view class="intelligence">
				<view class="intelligence_one">
					<!-- 图片 -->
					<view class="intelligence_img">
						<image src="../../static/img/che_img/工资@2x.png"></image>
						<view class="intelligence_title">
							<view class="title_h1">
								<view class="title_h1_1">
									<view></view>
									<text>我有工资</text>
								</view>
								<view class="title_h1_2">
									<button>立即申请</button>
								</view>
							</view>
							<view class="title_h2">
								<view class="title_h2_1">
									<text><text>抵押物：</text>无需抵押</text>
									<text><text class="h2_1">利率范围：</text>0.21-0.82%</text>
								</view>
								<view class="title_h2_1">
									<text><text space="emsp">额 度：</text>最高110万</text>
									<text><text class="h2_1">房贷时间：</text>最快1-2天</text>
								</view>
							</view>
						</view>
					</view>
					
				</view>
				
				<view class="intelligence_one_2">
					<!-- 图片 -->
					<view class="intelligence_img">
						<image src="../../static/img/che_img/公积金@2x.png"></image>
						<view class="intelligence_title">
							<view class="title_h1">
								<view class="title_h1_1">
									<view></view>
									<text>我有公积金</text>
								</view>
								<view class="title_h1_2">
									<button>立即申请</button>
								</view>
							</view>
							<view class="title_h2">
								<view class="title_h2_1">
									<text><text>抵押物：</text>无需抵押</text>
									<text><text class="h2_1">利率范围：</text>0.22-0.72%</text>
								</view>
								<view class="title_h2_1">
									<text><text space="emsp">额 度：</text>最高180万</text>
									<text><text class="h2_1">房贷时间：</text>当天放款</text>
								</view>
							</view>
						</view>
					</view>
					
				</view>
				
				<view class="intelligence_one">
					<!-- 图片 -->
					<view class="intelligence_img">
						<image src="../../static/img/che_img/公司图@2x.png"></image>
						<view class="intelligence_title">
							<view class="title_h1">
								<view class="title_h1_1">
									<view></view>
									<text>我有公司</text>
								</view>
								<view class="title_h1_2">
									<button>立即申请</button>
								</view>
							</view>
							<view class="title_h2">
								<view class="title_h2_1">
									<text><text>抵押物：</text>无需抵押</text>
									<text><text class="h2_1">利率范围：</text>0.45-0.96%</text>
								</view>
								<view class="title_h2_1">
									<text><text space="emsp">额 度：</text>最高480万</text>
									<text><text class="h2_1">房贷时间：</text>1-2天</text>
								</view>
							</view>
						</view>
					</view>
					
				</view>
				
				
			</view>
			
			<!-- two-最优贷款产品 -->
			<view class="ydt_products">
				<!-- 文字 -->
				<view class="ydt_title" v-for="(item,index) in ydt_title">
					<view>
						<text class="title1">{{item.title4}}</text>
						<text class="title2">{{item.title5}}</text>
					</view>
					<view><text class="title3">{{item.title6}}</text></view>
				</view>
				<!-- 第一部分 -->
				<view class="ydt_products_all">
					<!-- one -->
					<view class="products_one">
						<!-- 1 -->
						<view class="products_one1">
							<view class="products_one_1" v-for="(item,index) in one1"><text>{{item.name}}</text>
						
							</view>
						</view>
						<!-- 2 -->
						<view class="products_one2">
							<view class="p2">
							<view class="products_one2_1">
								<view class="products_one_2" v-for="(item,inde) in one2">{{item.name}}</view></view>
							<view class="products_one_2_1"></view></view>
						</view>
					</view>
					<!-- two -->
					<view class="products_two">
						<view class="products_two_1" >
							<view>
								<image src="../../static/img/che_img/哈尔滨@2x.png"></image>
								<text class="two_text">
									<text><text class="text_1">哈尔滨房贷抵消快贷</text>你有房，就来贷。</text>
									<text class="p1">
										<text class="text_2">贷款利率：<text>4.6%/年起</text></text>
										<text class="text_2">贷款利率：<text>1-240月</text></text>
										<text class="text_2">贷款利率：<text>1万-500万</text></text>
										<text class="text_2">贷款利率：<text>0-2日</text></text>
										</text>
								</text>
								<view class="products_button">
							<button>查看明细</button>
							<button>查看明细</button></view>
								
							</view>
							
							
							<view>
								<image src="../../static/img/che_img/哈尔滨@2x.png"></image>
								<text class="two_text">
									<text><text class="text_1">哈尔滨房贷抵消快贷</text> 你有房，就来贷。</text>
									<text class="p1">
										<text class="text_2">贷款利率：<text>4.6%/年起</text></text>
										<text class="text_2">贷款利率：<text>1-240月</text></text>
										<text class="text_2">贷款利率：<text>1万-500万</text></text>
										<text class="text_2">贷款利率：<text>0-2日</text></text>
										</text>
								</text>
								<view class="products_button">
							<button>查看明细</button>
							<button>查看明细</button></view>
								
							</view>
							
							
							<view>
								<image src="../../static/img/che_img/哈尔滨@2x.png"></image>
								<text class="two_text">
									<text><text class="text_1">哈尔滨房贷抵消快贷</text> 你有房，就来贷。</text>
									<text class="p1">
										<text class="text_2">贷款利率：<text>4.6%/年起</text></text>
										<text class="text_2">贷款利率：<text>1-240月</text></text>
										<text class="text_2">贷款利率：<text>1万-500万</text></text>
										<text class="text_2">贷款利率：<text>0-2日</text></text>
										</text>
								</text>
								<view class="products_button">
							<button>查看明细</button>
							<button>查看明细</button></view>
								
							</view>
							
							<view>
								<image src="../../static/img/che_img/哈尔滨@2x.png"></image>
								<text class="two_text">
									<text><text class="text_1">哈尔滨房贷抵消快贷</text> 你有房，就来贷。</text>
									<text class="p1">
										<text class="text_2">贷款利率：<text>4.6%/年起</text></text>
										<text class="text_2">贷款利率：<text>1-240月</text></text>
										<text class="text_2">贷款利率：<text>1万-500万</text></text>
										<text class="text_2">贷款利率：<text>0-2日</text></text>
										</text>
								</text>
								<view class="products_button">
							<button>查看明细</button>
							<button>查看明细</button></view>
								
							</view>
							
							
						</view>
					</view>
					
				</view>
			</view>
			
			
			<!-- three-合作伙伴 partner-->
			<view class="ydt_partner">
				<!-- 文字 -->
				<view class="ydt_title" v-for="(item,index) in ydt_title">
					<view>
						<text class="title2">{{item.title7}}</text>						
					</view>
					<view><text class="title3">{{item.title8}}</text></view>
				</view>
				<!-- 招商银行 -->
				<view class="ydt_bank">
					<view class="bank">
						<view><image src="../../static/img/che_img/1@2x.png"></image></view>
						<view><image src="../../static/img/che_img/5@2x.png"></image></view>
						<view><image src="../../static/img/che_img/3@2x.png"></image></view>
						<view><image src="../../static/img/che_img/7@2x.png"></image></view>
						<view><image src="../../static/img/che_img/9@2x.png"></image></view>
						<view><image src="../../static/img/che_img/2@2x.png"></image></view>
						<view><image src="../../static/img/che_img/6@2x.png"></image></view>
						<view><image src="../../static/img/che_img/4@2x.png"></image></view>
						<view><image src="../../static/img/che_img/8@2x.png"></image></view>
						<view><image src="../../static/img/che_img/10@2x.png"></image></view>
						</view>
				</view>
			</view>
			<!-- f行业资讯 information-->
			<view class="ydt_information">
				<!-- 文字 -->
				<view class="ydt_title" v-for="(item,index) in ydt_title">
					<view>
						<text class="title1">{{item.title9}}</text>
						<text class="title2">{{item.titlea}}</text>
					</view>
					<view><text class="title3">{{item.titleb}}</text></view>
				</view>
				<!-- 第一部分 -->
				<view class="ydt_information_p">
					<view class="information_p1"><text>行业动态</text></view>
					<view class="information_p2"><text>贷款问答</text></view>
				</view>
				<view class="information_one">
					<view class="ydt_information_one">
						<!-- 行业动态 -->
						<view class="ydt_tradetrade">
							<!-- one -->
							<view class="ydt_tradetrade_one">
								<view><image src="../../static/img/che_img/行业动态@2x(3).png"></image></view>
								<view class="trade_one_wenzi">
									<view><text class="tr_wz_p1">青春正当时，不服好时代</text></view>
									<view><text class="tr_wz_p2">青春正当时，不负好时代青春正当时，不负好时代青春正当时，不负好时代青春正当时，不负好时代青春正当时</text></view>
								</view>
							</view>
							<!-- two -->
							<view class="ydt_tradetrade_two">
								<view>
									<image src="../../static/img/che_img/行业动态@2x(3).png"></image>
								</view>
								<view>
									<text class="tr_wz_p1">青春正当时，不服好时代</text>
									<text class="tr_wz_p2">青春正当时，不负好时代青春正当时，不负好时代青春正当时，不负好时代青春正当时，不负好时代青春正当时</text>
								</view>
							</view>
							<!-- three -->
							<view class="ydt_tradetrade_three">
								<view>
									<image src="../../static/img/che_img/行业动态@2x(3).png"></image>
								</view>
								<view>
									<text class="tr_wz_p1">青春正当时，不服好时代</text>
									<text class="tr_wz_p2">青春正当时，不负好时代青春正当时，不负好时代青春正当时，不负好时代青春正当时，不负好时代青春正当时</text>
								</view>
							</view>
						</view>
					
						<!-- 贷款问答 -->
						<view class="ydt_answers">
							<!-- one -->
							<view class="ydt_answers_one">
								<view><image src="../../static/img/che_img/问答3@2x(2).png"></image></view>
								<view class="answers_one_weizi">
									<view><text class="tr_wz_p1">大额度的贷款，如何减轻还款压力？</text></view>
									<view><text class="tr_wz_p2">大额度的贷款，如何减轻大额度的贷款，大额度的贷款，如何减轻大额度的贷款，大额度的贷款，如何减轻大额度的贷款，如何减轻<text @click="">查看</text></text></view>
								</view>
							</view>
							<!-- tow -->
							<view class="ydt_answers_one">
								<view><image src="../../static/img/che_img/问答3@2x(2).png"></image></view>
								<view class="answers_one_weizi">
									<view><text class="tr_wz_p1">房贷抵押贷款最高15成，这是真的吗？</text></view>
									<view><text class="tr_wz_p2">大额度的贷款，如何减轻大额度的贷款，大额度的贷款，如何减轻大额度的贷款，大额度的贷款，如何减轻大额度的贷款，如何减轻<text @click="">查看</text></text></view>
								</view>
							</view>
							<!-- three -->
							<view class="ydt_answers_three">
								<view><image src="../../static/img/che_img/问答3@2x(2).png"></image></view>
								<view class="answers_one_weizi">
									<view><text class="tr_wz_p1">信用贷款需要什么条件？</text></view>
									<view><text class="tr_wz_p2">大额度的贷款，如何减轻大额度的贷款，大额度的贷款，如何减轻大额度的贷款，大额度的贷款，如何减轻大额度的贷款，如何减轻</text><view><text @click="">查看</text></view></view>
								</view>
								
							</view>
						</view>
					</view>
				</view>

				<!-- 介绍人物图片person -->
				<view class="ydt_picture">
					<view class="img_person"><image class="img_person_1" :src="img_person"></image></view>
					<view class="img_introduce"><image class="img_introduce" :src="img_introduce"></image></view>
				</view>
				</view>
			</view>
			
			<!-- 联系我们 -->
			<view class="ydt_contact">
				<!-- one -->
				<view class="contact_one">
					<view class="contact_logo"><image src="../../static/img/che_img/logo@2x(1).png"></image></view>
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
					<view class="contact_img"><image src="../../static/img/che_img/erweima.png"></image></view>
					<view class="contact_p"><text>关注微信服务号</text></view>
				</view>
				<!-- four -->
				<view class="contact_four">
					<view class="contact_img"><image src="../../static/img/che_img/erweima.png"></image></view>
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
				img_banner:"../../static/img/che_img/banner@2x.png",
				con_list:[
					{
						Image:'../../static/img/che_img/额度@2x.png',
						title:'额度高',
						title2:'最高可借款5000万元',
						path:'/pages/goods/goods'
					},
					{
						Image:'../../static/img/che_img/速度@2x.png',
						title:'速度快',
						title2:'最快15秒预审批通过',
						path:'/pages/pics/pics'
					},
					{
						Image:'../../static/img/che_img/利率低@2x.png',
						title:'利率低',
						title2:'借10000，一天利息低至1元',
						path:'/pages/pics/pics'
					},
					{
						Image:'../../static/img/che_img/灵活@2x.png',
						title:'更灵活',
						title2:'最长可分24期 灵活借款',
						path:'/pages/pics/pics'
					}
				],
				// 优选贷款匹配
				ydt_title:[
					{
						title1:'优选',
						title2:'贷款匹配',
						title3:'LOAN MATCHING',
						
						title4:'最优',
						title5:'贷款产品',
						title6:'LOAN PRODUCTS',
						
						title7:'合作伙伴',
						title8:'COOPERATIVE PARTRNER',
						
						title9:'行业',
						titlea:'咨询',
						titleb:'INDUSTRY INFORMATION'
					}
				],
				one1:[
					{name:'利率排行榜'},
					{name:'放款速度排行榜'},
					{name:'贷款额度排行榜'}
				],
				one2:[
					{name:'信用贷款'},
					{name:'小额贷款'},
					{name:'车贷'},
					{name:'抵押贷款'}
				],
				// products_two_text:[
				// 	{name:'哈尔滨房贷抵消快贷'},
				// 	{name:'你有房，就来贷。'}
				// ],
				// 介绍人物图片person
				img_person:"../../static/img/che_img/介绍人物@2x.png",
				img_introduce:"../../static/img/che_img/组件 149 – 2@2x.png",
				contact_p2:[
					{name:'进口车源'},
					{name:'贷款计算'},
					{name:'贷款问答'},
					{name:'服务协议'}
				],
				in_img:"../../static/img/che_img/组件 149 – 2@2x.png"
				
			}
		},
		// 顶部
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
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	// #ifdef H5
	@import url("../../static/css/che_css/che_dai_H5.css");
	// #endif
	// #ifdef MP-WEIXIN
	@import url("../../static/css/che_css/che_dai_XCX.css");
	// #endif
// .introduce{
// 		background-image: url('../../static/img/che_img/组件 149 – 2@2x.png');
// 	}
</style>
