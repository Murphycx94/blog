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
        <li class="issues-item" v-for="item in data">
					<h2 class="issues-item__title">{{ item.title }}</h2>
					<p class="issues-item__info">
					  <span> Created by {{ item.user.login }} on </span>
            {{ item.created_at }}
					</p>
					<p class="issues-item__description">{{ item.body | txtFilter }}</p>
				</li>
			</ul>
		</div>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { txtFilter } from '@/filters'

export default {
  filters: {
    txtFilter
  },
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
		this.getIssues()
	},
}
</script>

<style lang="less" scoped>
 @import url(./index.less);
</style>
