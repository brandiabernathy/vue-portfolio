<template>
	<section id="skills" class="wrapper">
		<h3>Skills</h3>
		<div class="bars">
			<div class="bar css">
				<div class="fill"></div>
				<span class="label">CSS</span>
			</div>
			<div class="bar html">
				<div class="fill"></div>
				<span class="label">HTML</span>
			</div>
			<div class="bar javascript">
				<div class="fill"></div>
				<span class="label">JAVASCRIPT</span>
			</div>
			<div class="bar vue">
				<div class="fill"></div>
				<span class="label">VUE</span>
			</div>
			<div class="bar react">
				<div class="fill"></div>
				<span class="label">REACT</span>
			</div>
			<div class="bar sql">
				<div class="fill"></div>
				<span class="label">SQL</span>
			</div>
			<div class="bar photoshop">
				<div class="fill"></div>
				<span class="label">PHOTOSHOP</span>
			</div>
			<div class="bar sketch">
				<div class="fill"></div>
				<span class="label">SKETCH</span>
			</div>
			<div class="bar accessibility">
				<div class="fill"></div>
				<span class="label">ACCESSIBILITY</span>
			</div>
			<div class="bar node">
				<div class="fill"></div>
				<span class="label">NODE.JS</span>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: "skills",
};
</script>

<style scoped lang="scss">
	.bar {
		position: relative;
		height: 30px;
		font-size: 16px;
		line-height: 30px;
		font-family: 'Nexa';
		letter-spacing: 3px;
		background-color: #ecf0f1;
		margin-top: 40px;
		@include breakpoint(4) {
			margin-top: 0;
		}
		+ .bar {
			@include breakpoint(4) {
				margin-top: 10px;
			}
		}
		.fill {
			position: absolute;
			bottom: 0;
			top: 0;
			left: 0;
			background-color: #6ad1aa;
			width: 100%;
		}
		.label {
			position: absolute;
			top: -26px;
			@include breakpoint(4) {
				position: relative;
				z-index: 1;
				padding: 0 10px;
				color: #fff;
				top: 0;
			}
		}
	}

	.css .fill {
		max-width: 90%;
	}
	.html .fill {
		max-width: 90%;
	}
	.javascript .fill {
		max-width: 65%;
	}
	.vue .fill {
		max-width: 45%;
	}
	.react .fill{
		max-width: 20%;
	}
	.sql .fill {
		max-width: 25%;
	}
	.photoshop .fill {
		max-width: 70%;
	}
	.sketch .fill {
		max-width: 60%;
	}
	.accessibility .fill {
		max-width: 30%;
	}
	.node .fill {
		max-width: 20%;
	}
</style>
