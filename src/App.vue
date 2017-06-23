<template>
  <div id="app">
		<blog-header></blog-header>
    <router-view></router-view>
		<blog-footer></blog-footer>
  </div>
</template>

<script>
import blogHeader from '@/components/header/header.vue'
import blogFooter from '@/components/footer/footer.vue'

export default {
  name: 'app',
	components : {
		blogHeader,
		blogFooter,
	}
}
</script>

<style>
</style>
