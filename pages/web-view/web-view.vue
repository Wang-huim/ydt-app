<template>
	<view>
		<web-view :src="url"></web-view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url:'./pages/index/index.vue'
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
