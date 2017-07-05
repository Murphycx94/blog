<template>
  <section class="article">
  	<article v-loading="data === null" v-html="markedString" class="markdown-body"></article>
  </section>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
export default {
  data () {
		return {

		}
	},
	computed: {
		...mapState('issues', ['data', 'markedString']),
	},
	created () {
		this.getIssue(4)
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
