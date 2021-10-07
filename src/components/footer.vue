<template>
	<footer>
		<div class="wrapper">
			<div class="logo">
				<img src="../assets/bq-logo.png">
			</div>
			<div class="social-links">
				<a class="social" href="http://www.linkedin.com/in/brandi-q-54235416/" target="_blank"><font-awesome-icon :icon="['fab', 'linkedin']"/></a>
				<a class="social" href="http://www.github.com/brandiquintos" target="_blank"><font-awesome-icon :icon="['fab', 'github']"/></a>
				<a class="social" href="http://www.codepen.io/brandiquintos" target="_blank"><font-awesome-icon :icon="['fab', 'codepen']"/></a>
				<a class="social" href="https://www.instagram.com/brandiquintos/" target="_blank"><font-awesome-icon :icon="['fab', 'instagram']"/></a>
				<a class="social" href="mailto:brandiquintos@gmail.com" target="_blank"><font-awesome-icon :icon="['far', 'envelope']"/></a>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: "Footer",
};
</script>

<style scoped lang="scss">
	footer {
		padding: 30px 0;
		background-color: #3f4345;
		color: #fff;
		@include breakpoint(4) {
		    padding: 80px 0;
		}
		.logo {
			img {
				width: 75px;
				margin: 0 auto;
			}
		}
		.social-links {
			position: relative;
			left: 50%;
			transform: translate(-50%, 0);
			display: inline-block;
			margin-top: 60px;
			.social {
				display: inline-flex;
				color: #fff;
				align-items: center;
				font-size: 18px;
				width: 38px;
				height: 38px;
				border: 1px solid rgba(255,255,255,.4);
				border-radius: 50%;
				& +.social {
					margin-left: 20px;
				}
				svg {
					position: relative;
					left: 50%;
					transform: translateX(-50%);
				}
			}
		}
	}
</style>
