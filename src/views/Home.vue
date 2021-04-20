<template>
	<div class="home">
		<Intro />
		<section id="about" class="light">
			<div class="wrapper about">
				<p>Hi, I'm Brandi and I'm a front-end developer. I love to create concise, well-written code.</p>
				<p>My experience includes:</p>
				<ul>
					<li>working on a team to build and maintain responsive web applications</li>
					<li>rewriting legacy code</li>
					<li>interviewing and training new team members</li>
					<li>optimizing and testing sites for viewing in multiple browsers and devices</li>
				</ul>
				<p>Skills + tools I have worked with:</p>
				<div class="columns">
					<ul class="col">
						<li>Vue + Vuex</li>
						<li>SQL</li>
						<li>Git</li>
						<li>HTML + CSS/SASS</li>
						<li>Jira</li>
					</ul>
					<ul class="col">
						<li>Mac OS</li>
						<li>Adobe Creative Suite</li>
						<li>Gulp</li>
						<li>Agile</li>
						<li>Sketch</li>
					</ul>
				</div>
			</div>
		</section>
		<Footer />
	</div>
</template>

<script>
import Footer from "@/components/footer.vue";
import Intro from "@/components/intro.vue";

export default {
	name: "Home",
	components: {
		Footer,
		Intro,
	},
};
</script>
