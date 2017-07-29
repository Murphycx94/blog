<template>
	<div id="app">
		<blog-header></blog-header>
			<router-view class="router-view"></router-view>
		<blog-footer></blog-footer>
	</div>
</template>

<script>
import blogHeader from '@/components/header/header.vue'
import blogFooter from '@/components/footer/footer.vue'

export default {
	name: 'app',
	components: {
		blogHeader,
		blogFooter,
	},
	methods: {
	},
}
</script>

<style lang="less">
	#app {
		display: flex;
		flex-direction: column;
		min-height: 100%;
		.router-view {
			flex: 1;
		}
	}
</style>
