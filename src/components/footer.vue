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