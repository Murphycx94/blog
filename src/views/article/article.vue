<template>
  <section class="article">
  	<article class="markdown-body">
  				{{ markedString }}
  	</article>
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
		...mapGetters('issues', ['markedStr']),
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
