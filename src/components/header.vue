<template>
	<header>
		<div class="wrapper">
			<div class="logo">
				<a href="/"> <img src="../assets/bq-logo.png"> </a>
			</div>
			<div class="name">
				<a href="/">brandi quintos</a>
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
		height: 85px;
		background-color: #3f4345;
		color: #fff;
		padding: 20px 0;
		margin-bottom: 40px;
		@include breakpoint(4) {
			margin-bottom: 80px
		}
		.logo {
			img {
				width: 45px;
			}
		}
		.name {
			font-family: "Nexa";
    		font-size: 26px;
			a {
				color: #fff;
			}
		}
	}
	.wrapper {
		display: flex;
		align-items: center;
    	gap: 20px;
	}
</style>
