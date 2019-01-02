<template>
	<v-container class="cb-container mt-5" grid-list-lg>
		<v-layout row wrap>
			<v-flex xs12 md6>
				<h1>About</h1>
				<div class="subheading">
					<p>I am a front end JavaScript developer who specifically loves Vue.js and it's equivalent framework, Nuxt.js. I am passionate about learning and creating applications that improve efficiency and also bringing someone's vision to life through the medium of a web application.</p>
					<p>My background is actually in business management and sales, but after some urging from a close friend to "check out" a programming problem, I was a little hooked. As time went on, I kept finding myself reading about programming and kept convincing myself it was out of my league. That all changed when one birthday, my wife asked me what I would like for my birthday. I jokingly replied a couple intro classes to programming. Next thing I knew, I was taking some online courses to explore programming. I have been growing and honing my skills ever since.</p>
					<p>Once my skills got to the point that they were marketable, I started taking risks and offered to build websites. First, I started with charity projects. The recipient received a website for free and I got an opportunity to grow my skills. Then, I started charging a small fee to help compensate for my time. Now, I know exactly what I want to do for a living, build websites and web applications.</p>
				</div>
				<div class="my-3 title">
					<strong>
						<a class="text-unstyled" href="https://github.com/jhfernan" target="_blank">github</a>
					</strong>
				</div>
			</v-flex>
			<v-flex xs12 md6>
				<v-img aspect-ratio="1" class="grey lighten-2" contain height="400" src="/images/family.png">
					<v-layout align-center fill-height justify-center ma-0 slot="placeholder">
						<v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
					</v-layout>
				</v-img>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {
	head () {
		return {
			title: 'Jonathan Fernandes | About',
			meta: [
				{ hid: 'description', name: 'description', content: 'About Jonathan and his story' }
			]
		}
	},
	middleware: 'guest',
}
</script>
