<template>
	<header>
		<div class="wrapper">
			<div class="logo">
				<img src="../assets/bq-logo.png">
			</div>
		</div>
	</header>
</template>

<script>
export default {
	name: "footer",
};
</script>

<style scoped lang="scss">
	header {
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
	}
</style>
