<template>
	<view>
		<view class="swiperPanel" ref="swiperPanel" @touchstart="startMove" @touchend="endMove">
			<view class="swiperItem" v-for="(item, index) in swiperList" :key="index" :style="{transform: itemStyle[index].transform, zIndex: itemStyle[index].zIndex, opacity: itemStyle[index].opacity}">
				<view class="children">
					<image class="pic" :src="item.url"></image>
					<view class="right">
						撒发射点发射点发射点发射点发射点发射点
						<image src="../../static/s4.png"  v-on:click="startMove" @touchend="endMove"></image>
					</view>
				</view>
				
			</view>
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
				slideNote: {
					x: 0,
					y: 0
				},
				screenWidth: 0,
				itemStyle: [],
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
						transform: 'scale(' + (1 - right / 10) + ') translate(-' + (right * 9) + '%,0px)',
						zIndex: 9999 - right,
						opacity: 0.5 / right
					}
				} else {
					return {
						transform: 'scale(' + (1 - e / 10) + ') translate(' + (e * 9) + '%,0px)',
						zIndex: 9999 - e,
						opacity: 0.5 / e
					}
				}
			},
			startMove(e) {
				clearInterval(timer);
				this.swiperList.x = e.changedTouches[0] ? e.changedTouches[0].pageX : 0;
				this.swiperList.y = e.changedTouches[0] ? e.changedTouches[0].pageY : 0;
				console.log('带年纪',e)
			},
			endMove(e) {
				timer = setInterval(()=>{
					this.rightSlider();
				},3000)
				var newList = JSON.parse(JSON.stringify(this.itemStyle));
				if ((e.changedTouches[0].pageX - this.swiperList.x) < 0) {
					// 向左滑动
					var last = [newList.pop()]
					newList = last.concat(newList)
				} else {
					// 向右滑动
					newList.push(newList[0])
					newList.splice(0, 1)
				}
				this.itemStyle = newList
			}
		}
	}
</script>

<style lang="scss">
	.swiperPanel {
		margin: 20rpx 0;
		height: 344rpx;
		width: 686upx;
		overflow: hidden;
		position: relative;
		margin-left:80upx;

		.swiperItem {
			height: 100%;
			width: 100%;
			position: absolute;
			top: 0;
			left: 0upx;
			transition: all .5s;

			.children {
				height: 100%;
				width: 570upx;
				margin: 2upx 160upx 2upx 0;
				position: relative;
				
				.right{
					position: absolute;
					right:0;
					top:0;
					width:50%;
					height:100%;
					background:#C29462;
					color:#fff;
					font-size:32upx;
					padding:10upx;
					box-sizing: border-box;
					border-radius: 0 10upx 10upx 0;
				}

				.pic {
					height: 100%;
					width: 100%;
					border-radius: 10upx;
				}
			}
		}
	}
</style>


