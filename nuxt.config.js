const config = require('./app.config')
const pkg = require("./package");

module.exports = {
	mode: "universal",

	// Headers of the page
	head: {
		title: pkg.name,
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ hid: "description", name: "description", content: pkg.description }
		],
		link: [
			// { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{
				rel: "stylesheet",
				href:
					"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
			},
			{
				rel: 'stylesheet',
				href: 'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
				integrity: 'sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt',
				crossorigin: 'anonymous'
			},
		]
	},

	auth: config.auth,
	axios: config.axios,

	// Global CSS
	css: ["~/assets/style/app.styl"],
	// Customize the progress-bar color
	loading: { color: "#fff" },

	// Nuxt.js modules
	modules: [
		'@nuxtjs/auth',
		'@nuxtjs/axios'
	],

	// Plugins to load before mounting the App
	plugins: [
		'@/plugins/app',
		'@/plugins/vuetify'
	],

	serverMiddleware: config.middleware,

	// Build configuration
	build: {
		// You can extend webpack config here
		extend(config, ctx) {
			// Run ESLint on save
			if (ctx.isDev && ctx.isClient) {
				config.module.rules.push({
					enforce: "pre",
					test: /\.(js|vue)$/,
					loader: "eslint-loader",
					exclude: /(node_modules)/
				});
			}
		}
	}
};
