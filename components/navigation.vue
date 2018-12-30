<template>
	<div>
		<v-toolbar app clipped-right color="primary" dark dense fixed height="100px">
			<v-btn class="hidden-md-and-down" exact flat :key="i" nuxt router :to="link.to" v-for="(link, i) in links">
				{{ link.name }}
			</v-btn>
			<v-spacer></v-spacer>
			<v-toolbar-title>
				<div>
					<h3>Jonathan Fernandes</h3>
					<p class="body-2 mb-0">Front End Vue.js Developer</p>
				</div>
			</v-toolbar-title>
			<v-spacer class="hidden-lg-and-up" />
			<v-toolbar-side-icon class="hidden-lg-and-up" @click.native.stop="drawer = !drawer" />
		</v-toolbar>
		<v-navigation-drawer app class="hidden-lg-and-up" clipped fixed right v-model="drawer">
			<v-list>
				<v-list-tile exact :key="link.name" nuxt router :to="link.to" v-for="link in links">
					<v-list-tile-title>{{ link.name }}</v-list-tile-title>
				</v-list-tile>
			</v-list>
		</v-navigation-drawer>
	</div>
</template>

<script>
export default {
	data () {
		return {
			drawer: false,
			links: [
				{ name: 'Work', to: '/' },
				{ name: 'About', to: '/about' },
				{ name: 'Resume', to: '/resume' },
				{ name: 'Contact', to: '/contact' },
				{ name: 'Login', to: '/login' }
			],
		}
	}
}
</script>
