<template>
	<footer>
		<div class="wrapper">
			<div class="logo">
				<img src="../assets/bq-logo.png">
			</div>
			<div class="social-links">
				<a class="social" href="http://www.linkedin.com/in/brandi-q-54235416/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
				<a class="social" href="http://www.github.com/brandiquintos" target="_blank"><i class="fab fa-github"></i></a>
				<a class="social" href="http://www.codepen.io/brandiquintos" target="_blank"><i class="fab fa-codepen"></i></a>
				<a class="social" href="https://www.instagram.com/brandiquintos/" target="_blank"><i class="fab fa-instagram"></i></a>
				<a class="social" href="mailto:brandiquintos@gmail.com" target="_blank"><i class="far fa-envelope"></i></a>
			</div>
			<div class="attribution">
				<i class="far fa-copyright"></i> twentytwenty
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: "footer",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	footer {
		padding: 30px 0;
		background-color: #3f4345;
		color: #fff;
		// @include breakpoint(4) {
		//     padding: 80px 0;
		// }
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
			margin: 60px 0;
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
				i {
					position: relative;
					left: 50%;
					transform: translateX(-50%);
				}
			}
		}
		.attribution {
			text-align: center;
		}
	}
</style>
