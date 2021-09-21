<template>
	<section id="about" class="light">
		<div class="wrapper about">
			<div class="text">
				<img class="headshot" src="../assets/headshot.jpg">
				<p>Hello! I'm Brandi and I enjoy creating things that live on the internet. I love to create concise, well-written code.</p>
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
		width: 200px;
		border-radius: 50%;
		margin-right: 20px;
	}
	.text {
		display: flex;
		align-items: center;
		P {
			font-size: 22px;
		}
	}
</style>
