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
			<ul class="main__issues">
				<li class="issues-item">
					<h2 class="issues-item__head">这个是文章标题</h2>
					<p class="issues-item__info"><span> Created by cx on </span> 2017年3月16日 </p>
					<p class="issues-item__description">杀戮空间啊；了速度快解放；啥大嫁风尚；</p>
				</li>
			</ul>
		</div>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data () {
		return {

		}
	},
	computed: {
		...mapState('issues', ['data']),
	},
	methods: {
		...mapActions('issues', {
			getIssues: 'GET_ISSUES'
		})
	},
	created () {
		this.getIssues().then(() => {
			console.log(this.data)
		})
	},
}
</script>

<style lang="less" scoped>
 @import url(./index.less);
</style>
