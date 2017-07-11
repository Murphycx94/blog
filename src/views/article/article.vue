<template>
	<section class="article">
		<loading v-if="loading"></loading>
		<article v-else class="markdown-body">
			<div class="markdown__title">
				<div class="title">{{ data.title }}</div>
				<div class="tips">
					<span> Updated by {{ data.user.login }} on </span>
					{{ data.updated_at | timeFilter }}
				</div>
			</div>
			<div v-html="markedString"></div>
		</article>
	</section>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
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
		...mapState('issues', ['data', 'markedString']),
	},
	async created () {
		await this.getIssue(this.$route.params.number)
		this.loading = false
	},
	methods: {
		...mapActions('issues', {
			getIssue: 'GET_ISSUE'
		})
	},
}
</script>

<style lang="less" scoped>
	@import "./article.less";
</style>
