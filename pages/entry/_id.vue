<template>
	<v-container>
		<v-layout>
			<v-flex xs12 md6 lg3>
				<h1>{{ portfolio.title }}</h1>
				<markdown :anchorAttributes="{ target: '_blank', rel: 'nofollow' }" class="subheading">{{ portfolio.body }}</markdown>
				<div>
					<v-layout align-center justify-space-around>
						<v-btn color="accent" flat :href="portfolio.website" icon target="_blank">
							<v-icon>fas fa-globe</v-icon>
						</v-btn>
						<v-tooltip bottom :key="link.title" v-for="link in portfolio.github">
							<v-btn color="accent" flat :href="link.url" icon slot="activator" target="_blank">
								<v-icon>fab fa-github</v-icon>
							</v-btn>
							<span>Private repos can be viewed by simple request</span>
						</v-tooltip>
					</v-layout>
				</div>
			</v-flex>
			<v-flex xs12 md6 lg9>
				<v-container grid-list-sm>
					<v-layout align-center row wrap>
						<v-flex :key="i" v-for="(img, i) in portfolio.images" xs12 md6>
							<v-img :src="`${env == 'http://localhost:3000'
								? 'http://localhost:8000'
								: 'https://jhfernan-api.herokuapp.com/'
							}${img}`" />
						</v-flex>
					</v-layout>
				</v-container>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {
	asyncData ({ app, error, params }) {
		return app.$axios.$get('/info/portfolios')
		.then(res => {
			return {
				portfolio: res.find(v => v.id == params.id)
			}
		})
		.catch(err => { error({ statusCode: '404', message: 'Could not retrieve portfolios' }) })
	},
	data () {
		return {
			env: ''
		}
	},
	head () {
		return {
			title: 'Manage Users',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: `Details page for the entry titled ${this.portfolio.title}` }
			]
		}
	},
	middleware: 'guest',
	mounted () {
		this.env = window.location.origin
	}
}
</script>
