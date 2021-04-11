<template>
  <div class="home">
    <Intro />
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/footer.vue";
import Intro from "@/components/intro.vue";

export default {
  name: "Home",
  components: {
    Footer,
    Intro,
  },
};
</script>
