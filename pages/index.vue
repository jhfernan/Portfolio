<template>
	<v-container grid-list-xl>
		<v-layout>
			<v-flex :key="i" v-for="(portfolio, i) in portfolios" xs12 md4>
				<v-card
					:class="portfolio.hovered ? 'cb-overlay pa-3' : 'pa-3'"
					:to="`/entry/${portfolio.id}`">
					<v-img contain height="250px"
						:src="`${env == 'http://localhost:3000'
							? 'http://localhost:8000'
							: 'https://jhfernan-api.herokuapp.com/'
						}${portfolio.images[0]}`">
						<v-container fill-height fluid>
							<v-layout
								align-center
								fill-height
								@mouseover="portfolio.hovered = true"
								@mouseout="portfolio.hovered = false">
							</v-layout>
						</v-container>
					</v-img>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {
	asyncData ({ app, error }) {
		return app.$axios.$get('/info/portfolios')
		.then(res => {
			let response = []
			for (let entry of res) {
				entry.hovered = false
				response.push(entry)
			}
			return {
				portfolios: response,
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
			title: 'Jonathan Fernandes | Work',
			meta: [
				{ hid: 'description', name: 'description', content: 'Portfolio website for Jonathan Fernandes and his main works' }
			]
		}
	},
	middleware: 'guest',
	mounted () {
		this.env = window.location.origin
	}
}
</script>

<style scoped>
.cb-overlay {
	background-color: rgba(0, 0, 0, 0.5);
}
</style>
