<template>
	<section class="intro">
		<div class="overlay"></div>
		<img class="image" src="../assets/el-faro.jpg" />
		<div class="text">
			<h1 class="name">brandi quintos</h1>
			<h2 class="tagline">front end web developer</h2>
		</div>
		<a href="#about"><div class="arrow"></div></a>
	</section>
</template>

<script>
export default {
		name: "intro",
};
</script>

<style scoped lang="scss">
	.intro {
		position: relative;
		height: 100vh;
		min-height: 100vh;
		min-height: -webkit-fill-available;
		color: #fff;
		text-align: center;
		letter-spacing: 1px;
		padding: 0;
		overflow: hidden;
		@include breakpoint(4) {
			min-height: 0;
			height: 100vh;
		}
		.overlay {
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			background-color: #3f4345;
			opacity: .8;
			z-index: 1;
		}
		.text {
			position: absolute;
			top: 50%;
			transform: translate(0, -50%);
			text-align: center;
			right: 40px;
			left: 40px;
			z-index: 2;
		}
		.image {
			position: absolute;
			top: 0;
			height: 100%;
			max-width: none;
			left: -50%;
			@include breakpoint(4) {
				position: static;
				max-width: 100%;
				height: auto;
			}
		}
		.name {
			margin-bottom: 30px;
			text-shadow: 2px 2px 2px #4d4d4d;
		}
		.tagline {
			text-shadow: 0 1px 1px #4d4d4d;
		}
		.arrow {
			position: absolute;
			left: 50%;
			z-index: 2;
			bottom: 40px;
			width: 20px;
			height: 20px;
			transform: translateX(-50%) rotate(45deg);
			border-left: none;
			border-top: none;
			border-right: 2px #fff solid;
			border-bottom: 2px #fff solid;
			text-shadow: 2px 2px 2px #4d4d4d;
			animation: upDown 1.5s linear infinite;
		}
	}
</style>
