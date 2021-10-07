<template>
	<header>
		<div class="wrapper">
			<div class="logo">
				<a href="/"> <img src="../assets/bq-logo.png"> </a>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	name: "Header",
};
</script>

<style scoped lang="scss">
	header {
		// padding: 30px 0;
		height: 85px;
		background-color: #3f4345;
		color: #fff;
		padding: 20px 0;
		@include breakpoint(4) {
		    // padding: 80px 0;
		}
		.logo {
			img {
				width: 45px;
				// margin: 0 auto;
			}
		}
	}
</style>
