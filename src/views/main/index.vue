<template>
	<section id="index">
		<div class="banner">
			<div class="banner__avatar"><img src="./avatar.png" alt="avatar"></div>
			<div class="banner__description">
				<p title="web前端攻城狮">web前端攻城狮</p>
				<p title="思绪很凌乱，偶尔也写一点东西">思绪很凌乱，偶尔也写一点东西</p>
				<p>坐标 杭州</p>
				<a href="mailto:shmilyclxy@163.com" title="shmilyclxy@163.com">shmilyclxy@163.com</a>
			</div>
		</div>
		<div class="main">
			<loading v-if="loading"></loading>
			<ul class="main__issues" v-else>
				<li class="issues-item" v-for="item in list">
					<h2 class="issues-item__title" @click="jumpRouter(item.number)">{{ item.title }}</h2>
					<p class="issues-item__info">
						<span> Created by {{ item.user.login }} on </span>
						{{ item.created_at | timeFilter }}
					</p>
					<p class="issues-item__description">{{ item.body | txtFilter }}</p>
				</li>
			</ul>
		</div>
	</section>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { txtFilter, timeFilter } from '@/filters'

export default {
	filters: {
		txtFilter,
		timeFilter
	},
	data () {
		return {
			loading: true,
		}
	},
	computed: {
		...mapState('issues', ['list', 'labels']),
	},
	methods: {
		...mapActions('issues', {
			getIssues: 'GET_ISSUES',
			getLabels: 'GET_LABELS',
		}),
		jumpRouter (number) {
			console.log('n',number)
			this.$router.push({ name: 'article', params: { number } })
		},
	},
	async created () {
		await this.getIssues()
		this.loading = false
	},
}
</script>

<style lang="less" scoped>
	@import url(./index.less);
</style>
