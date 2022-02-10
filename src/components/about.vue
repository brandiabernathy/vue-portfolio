<template>
	<section id="about" class="light">
		<div class="wrapper about">
			<div class="text">
				<img class="headshot" src="../assets/headshot.jpg">
				<p>Hello! I'm Brandi and I'm a front-end web developer with 10 years of experience. I enjoy creating creating things that live on the internet and bringing ideas to life in the browser.<br/> <br/>
				Currently I reside in sunny Phoenix, Arizona. Out of the office I enjoy photography, sports, traveling, and spending time with my boyfriend and our pets.</p>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: "header",
};
</script>

<style scoped lang="scss">
	.headshot {
		border-radius: 50%;
		width: 50%;
		margin: 0 auto 20px;
		@include breakpoint(4) {
			width: 200px;
			margin-right: 20px;
		}
	}
	.text {
		@include breakpoint(4) {
			display: flex;
			align-items: center;
		}
		p {
			font-size: 22px;
		}
	}
</style>
