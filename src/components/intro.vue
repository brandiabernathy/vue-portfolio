<template>
	<section class="intro">
		<div class="overlay"></div>
		<div class="text">
			<h1 class="name">brandi abernathy</h1>
			<h2 class="tagline">front end web developer</h2>
		</div>
		<a class="down" @click="scrollTo"><div class="arrow"></div></a>
	</section>
</template>

<script>
export default {
	name: "Intro",
	methods: {
		scrollTo() {
			document.querySelector('#about').scrollIntoView({
				behavior: 'smooth'
			});
		}
	}
};
</script>

<style scoped lang="scss">
	@keyframes fadeInUp {
		0% {
 			opacity: 0;
 			-webkit-transform: translateY(20px);
		}
		100% {
			opacity: 1;
			-webkit-transform: translateY(0);
		}
	}
	@keyframes fadeIn {
		0% {
 			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
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
		background: top center url('../assets/el-faro.jpg')  no-repeat;
		background-size: cover;
		display: flex;
		justify-content: center;
		align-items: center;
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
			position: relative;
			text-align: center;
			z-index: 2;
			animation: fadeInUp 3s;
		}
		.name {
			margin-bottom: 30px;
			text-shadow: 2px 2px 2px #4d4d4d;
		}
		.tagline {
			text-shadow: 0 1px 1px #4d4d4d;
		}
		.down {
			position: absolute;
			left: 50%;
			z-index: 2;
			bottom: 40px;
			display: block;
			height: 30px;
			width: 30px;
			animation: fadeInUp 3s;
			cursor: pointer;
		}
		.arrow {
			width: 20px;
			height: 20px;
			transform: translateX(-50%) rotate(45deg);
			border-left: none;
			border-top: none;
			border-right: 2px #fff solid;
			border-bottom: 2px #fff solid;
			text-shadow: 2px 2px 2px #4d4d4d;
			animation: upDown 1.5s linear infinite;
			animation-delay: 2s;
		}
	}
</style>
