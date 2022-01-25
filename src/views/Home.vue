<template>
	<div class="home">
		<Intro />
		<About />
		<Skills />
		<section id="buttons" class="wrapper">
			<Button label="projects" route="/projects" />
			<!-- <Button label="photography" link="/photography" /> -->
			<Button label="resume" link="BrandiQuintosResume.pdf"/>
		</section>
		<Footer />
	</div>
</template>

<script>
import About from "@/components/about.vue";
import Button from "@/components/button.vue";
import Footer from "@/components/footer.vue";
import Intro from "@/components/intro.vue";
import Skills from "@/components/skills.vue";

export default {
	name: "Home",
	components: {
		About,
		Button,
		Footer,
		Intro,
		Skills,
	},
};
</script>

<style scoped lang="scss">
	#buttons {
		margin-top: 80px;
		margin-bottom: 80px;
		@include breakpoint(4) {
			display: flex;
			justify-content: space-evenly;
		}
	}
</style>
