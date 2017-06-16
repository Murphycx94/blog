<template>
  <div id="app">
		<blog-header></blog-header>
    <router-view></router-view>
  </div>
</template>

<script>
import blogHeader from '@/components/header/header.vue'

export default {
  name: 'app',
	components : {
		blogHeader,
	}
}
</script>

<style>
</style>
