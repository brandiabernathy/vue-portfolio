<template>
	<footer>
		<div class="wrapper">
			<div class="logo">
				<img src="../assets/ba-logo.svg">
			</div>
			<div class="social-links">
				<a class="social" href="https://www.linkedin.com/in/brandiabernathy//" target="_blank"><font-awesome-icon :icon="['fab', 'linkedin']"/></a>
				<a class="social" href="http://www.github.com/brandiabernathy" target="_blank"><font-awesome-icon :icon="['fab', 'github']"/></a>
				<!--<a class="social" href="http://www.codepen.io/brandiabernathy" target="_blank"><font-awesome-icon :icon="['fab', 'codepen']"/></a>-->
				<a class="social" href="http://www.instagram.com/brandiabernathy22/" target="_blank"><font-awesome-icon :icon="['fab', 'instagram']"/></a>
				<a class="social" href="mailto:brandiabernathy22@gmail.com" target="_blank"><font-awesome-icon :icon="['far', 'envelope']"/></a>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: "Footer",
};
</script>