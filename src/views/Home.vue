<template>
	<div class="home">
		<Intro />
		<About />
		<!-- <Skills /> -->
		<section id="buttons" class="wrapper">
			<Button label="projects" route="/projects" />
			<!-- <Button label="photography" link="/photography" /> -->
			<Button label="resume" link="BrandiAbernathyResume.pdf"/>
		</section>
		<Footer />
	</div>
</template>

<script>
import About from "@/components/About.vue";
import Button from "@/components/Button.vue";
import Footer from "@/components/Footer.vue";
import Intro from "@/components/Intro.vue";
// import Skills from "@/components/Skills.vue";

export default {
	name: "Home",
	components: {
		About,
		Button,
		Footer,
		Intro,
		// Skills,
	},
};
</script>
