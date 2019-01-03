<template>
	<v-container class="cb-container mt-5">
		<div :key="i" v-for="(section, i) in resume">
			<h2 class="mb-2" :class="i == 0 ? '' : 'mt-5'">{{ section.title }}</h2>
			<markdown :anchorAttributes="{ target: '_blank', rel: 'nofollow' }" class="markdown">{{ section.body }}</markdown>
		</div>
	</v-container>
</template>

<script>
export default {
	asyncData ({ app, error }) {
		return app.$axios.$get('/info/resume')
		.then(res => {
			return { resume: res }
		})
		.catch(err => { error({ statusCode: '404', message: 'Could not retrieve resume info' }) })
	},
	head () {
		return {
			title: 'Jonathan Fernandes | Resume',
			meta: [
				{ hid: 'description', name: 'description', content: 'Resume for Jonathan Fernandes' }
			]
		}
	},
	middleware: 'guest',
}
</script>
