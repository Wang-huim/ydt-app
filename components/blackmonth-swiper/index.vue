<template>
	<view>
		
				
		<view class="swiperPanel" ref="swiperPanel" @touchstart="startMove" @touchend="endMove">
			<view class="swiperItem" v-for="(item, index) in swiperList" :key="index" :style="{left:`-${leftVal}px`,transition:`${ition}s`,transform: itemStyle[index].transform, zIndex: itemStyle[index].zIndex, opacity: itemStyle[index].opacity}">
				<view class="children">
					
					<image class="pic" :src="item.url"></image>
					
					<view class="right">
						
					</view>
				</view>
				
			</view>
			<div class="leftBtn" @click="throttle(PrevFun)">
					<image src='../../static/img/car_img/左@2x.png'></image>
				</div>
				<!-- 右箭头按钮 -->
				<div class="rightBtn" @click="throttle(rightSlider)">
					<image src='../../static/img/car_img/右@2x.png'></image>
				</div>
		</view>
		
	</view>
</template>

<script>
	var timer;
	export default {
		props: {
			swiperList: {
				type: Array,
				default: []
			}
		},
		data() {
			return {
				leftVal:0,
				ition:0.8,
				flag:true,
				slideNote: {
					x: 0,
					y: 0
				},
				screenWidth: 0,
				itemStyle: []
			};
		},
		created() {
			var macInfo = uni.getSystemInfoSync();
			this.screenWidth = macInfo.screenWidth;
			// 计算swiper样式
			this.swiperList.forEach((item, index) => {
				this.itemStyle.push(this.getStyle(index))
			})
			timer = setInterval(()=>{
				this.rightSlider();
			},3000)
		},
		throttle(fun) {
			if (this.flag) {
				this.flag = false;
				fun(); // 此为模板中传递进来的PrevFun()或NextFun()函数
			  setTimeout(() => {
					this.flag = true;
				}, 1200); // 节流间隔时间
			}
		},
		methods: {
			rightSlider(){
				var newList = JSON.parse(JSON.stringify(this.itemStyle));
				var last = [newList.pop()]
				newList = last.concat(newList)
				this.itemStyle = newList;
			},
			getStyle(e) {
				if (e > this.swiperList.length / 2) {
					var right = this.swiperList.length - e
					return {
						transform: 'scale(' + (1 - right / 4) + ') translate(-' + (right * 34) + '%,0px)',
						zIndex: 9999 - right,
						opacity: 1 / right
					}
				} else {
					return {
						transform: 'scale(' + (1 - e / 4) + ') translate(' + (e * 34) + '%,0px)',
						zIndex: 9999 - e,
						opacity:1 / e
					}
				}
				// this.swiperList=res.data.message
			},
			startMove(e) {
				clearInterval(timer);
				this.slideNote.x = e.changedTouches[0] ? e.changedTouches[0].pageX : 0;
				this.slideNote.y = e.changedTouches[0] ? e.changedTouches[0].pageY : 0;
			},
			endMove(e) {
				timer = setInterval(()=>{
					this.rightSlider();
				},3000)
				var newList = JSON.parse(JSON.stringify(this.itemStyle));
				if ((e.changedTouches[0].pageX - this.slideNote.x) < 0) {
					// 向左滑动
					var last = [newList.pop()]
					newList = last.concat(newList)
				} else {
					// 向右滑动
					newList.push(newList[0])
					newList.splice(0, 1)
				}
				this.itemStyle = newList
			},
			
			
			PrevFun(){
			  if(this.leftVal==0){ // 判断显示的图片 是 第一张时执行
			    // this.imgList.length是指循环图片数组的图片个数
			    this.ition=0 // 将过渡时间变成0，瞬间位移到最后一张图
			    this.imgShow=this.imgList.length-1 // 将高亮小点改为最后一张图
			    this.leftVal=(this.imgList.length)*this.e // 瞬间移动
			     setTimeout(()=>{  // 通过延时障眼法,归原过渡时间,执行真正的“上一张”函数
			       this.ition=0.8
			       this.leftVal -= this.e
			     },this.ition*1000)
			  }else{ // 判断显示的图片 不是 第一张时执行
			     this.ition=0.8
			     this.leftVal -= this.e
			     this.imgShow--
			  }
			},
			// 下一张
			NextFun(){
			  if(this.leftVal==(this.imgList.length-1)*this.e){ // 判断显示的图片 是 最后一张时执行
			       this.ition=0.8
			       this.leftVal+=this.imgWidth
			       this.imgShow=0
			     setTimeout(()=>{
			       this.ition=0
			       this.leftVal=0
			     },this.ition*1000)
			  }else{ // 判断显示的图片 不是 最后一张时执行
			     this.ition=0.8
			     this.leftVal+=this.imgWidth
			     this.imgShow++
			  }
			},
			
		}
	}
</script>

<style lang="scss">
	// swiper{
	// 	margin: 100rpx;
	// }
		.swiperPanel ,swiper{
		margin: 150rpx 0;
		height: 684rpx;
		width: 100%;
		// width: 686upx;
		overflow: hidden;
		position: relative;
		// margin-left:80upx;

		.swiperItem,swiper-item {
			height: 100%;
			width: 100%;
			position: absolute;
			top: 0;
			left: 0rpx;
			transition: all .5s;
			// margin-left: 600rpx;

			.children {
				height: 100%;
				width: 1084rpx;
				margin: 2rpx auto;
				position: relative;

				.pic {
					height: 100%;
					width: 100%;
					border-radius: 10rpx;
				}
			}
		}
	}
	
	.leftBtn,
	.rightBtn {
	z-index: 99999;
	  position: absolute;
	  top: 45%;
	  width: 100rpx;
	  height: 100rpx;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  
	}
	.leftBtn image,
	.rightBtn image{
	  width: 100rpx;
	  height: 100rpx;
	}
	.leftBtn {
	  left: 400rpx;
	}
	.rightBtn {
	  right: 400rpx;
	}
</style>


