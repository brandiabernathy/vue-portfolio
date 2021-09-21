<template>
	<section id="about" class="light">
		<div class="wrapper skills">
            <div class="bars">
                <div class="bar css">CSS</div>
                <div class="bar html">HTML</div>
                <div class="bar javascript">JAVASCRIPT</div>
                <div class="bar vue">VUE</div>
                <div class="bar react">REACT</div>
                <div class="bar sql">SQL</div>
                <div class="bar photoshop">PHOTOSHOP</div>
                <div class="bar sketch">SKETCH</div>
                <div class="bar accessibility">ACCESSIBILITY</div>
                <div class="bar node">NODE.JS</div>
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
  padding-left: 10px;
  color: #fff;
   font-family: 'Nexa';
   letter-spacing: 3px;
  + .bar {
    margin-top: 10px;
  }
  &:before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: -2;
    width: 100%;
    background: #ecf0f1;
    content: '';
  }
  &:after {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    display: block;
    content: '';
    background: #6ad1aa;
    transition: 0.7s;
  }
}

.css::after {
  max-width: 90%;
}
.html::after {
  max-width: 90%;
}
.javascript::after {
  max-width: 70%;
}
.vue::after {
  max-width: 50%;
}
.react::after {
  max-width: 20%;
}
.sql::after {
  max-width: 10%;
}
.photoshop::after {
  max-width: 70%;
}
.sketch::after {
  max-width: 60%;
}
.accessibility::after {
    max-width: 30%;
}
.node::after {
    max-width: 10%;
}
</style>
