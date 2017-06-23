<template>
  <div id="header" :class="['header', { 'header--full': full }]">
		头部
  </div>
</template>

<script>
export default {
  data () {
		return {
			full: false,
		}
	},
	created () {
		window.addEventListener('scroll', this.listenScroll)
	},
	methods: {
		listenScroll () {
			this.full = window.scrollY >= 20 ? true : false
		}
	},
}
</script>

<style lang="less" scoped>
	@import url(./header.less);
</style>
