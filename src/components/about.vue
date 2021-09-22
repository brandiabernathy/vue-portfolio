<template>
	<section id="about" class="light">
		<div class="wrapper about">
			<div class="text">
				<img class="headshot" src="../assets/headshot.jpg">
				<p>Hello! I'm Brandi and I enjoy creating things that live on the internet. passionate about creating interactive applications and experiences on the web.I love to create concise, well-written code.</p>
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
