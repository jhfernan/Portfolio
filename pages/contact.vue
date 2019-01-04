<template>
	<div>
		<v-container class="cb-container mt-5" grid-list-lg>
			<h1>Contact</h1>
			<v-layout row wrap>
				<v-flex xs12 md6>
					<div class="subheading">
						<p>Reach out to say hello or let me know if you want a closer look at one of my private repos.</p>
					</div>
					<div class="my-3 title">
						<strong>
							<a class="text-unstyled" href="https://github.com/jhfernan" target="_blank">github</a>
						</strong>
					</div>
				</v-flex>
				<v-flex xs12 md6>
					<v-alert class="mb-3" :value="err" type="error"> {{ err }}</v-alert>
					<v-form lazy-validation ref="form" @submit.prevent="submit" v-model="valid">
						<v-text-field :counter="20" label="Name" :rules="nameRules" solo v-model="form.name" />
						<v-text-field label="E-mail" :rules="emailRules" solo v-model="form.email" />
						<v-select :items="items" label="Subject" :rules="required" solo v-model="form.subject" />
						<v-textarea label="Message" solo v-model="form.body" />
						<div class="mt-2 text-xs-right">
							<v-btn @click="submit" color="accent" :disabled="!valid || loading" :loading="loading">submit</v-btn>
						</div>
					</v-form>
				</v-flex>
			</v-layout>
		</v-container>

		<v-dialog persistent v-model="loading" width="300">
			<v-card color="primary" dark>
				<v-card-text>
					Processing your request...
					<v-progress-linear class="mb-0" color="white" indeterminate />
				</v-card-text>
			</v-card>
		</v-dialog>

		<v-dialog v-model="dialog" max-width="300">
			<v-card>
				<v-card-title class="headline">Thank you for contacting us!</v-card-title>
				<v-card-text>
					We have recieved your message and will be in touch with you shortly.
				</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="primary" flat @click="dialog = false">
						Close
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
export default {
	data: () => ({
		dialog: false,
		emailRules: [
			v => !!v || 'E-mail is required',
			v => /.+@.+/.test(v) || 'E-mail must be valid'
		],
		err: null,
		form: {},
		items: [
			'Request for access to private repo',
			'I just want to chat about Vue.js',
			'Interested in collab work',
			'Other'
		],
		loading: false,
		nameRules: [
			v => !!v || 'Name is required',
			v => v && v.length <= 20 || 'Name must be less than 10 characters'
		],
		required: [
			v => !!v || 'This is required'
		],
		valid: false,
	}),
	head () {
		return {
			title: 'Jonathan Fernandes | About',
			meta: [
				{ hid: 'description', name: 'description', content: 'About Jonathan and his story' }
			]
		}
	},
	methods: {
		async submit () {
			if (this.$refs.form.validate()) {
				this.loading = true
				await this.$axios.$post('/api/mailer/contact', this.form)
				.then(res => {
					this.dialog = true
					this.err = null
					this.$refs.form.reset()
				})
				.catch(err => {
					console.error(err)
					err.response
						? this.err = `Error ${error.status}: ${error.message}`
						: this.err = 'There was an error during the contact process'
				})
				.finally(() => {
					this.loading = false
				})
			}
		},
	},
	middleware: 'guest',
}
</script>
