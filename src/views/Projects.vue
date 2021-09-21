<template>
  <div class="projects">
    <Header />
    <h1>PROJECTS</h1>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/footer.vue";
import Header from "@/components/header.vue";

export default {
  name: "Projects",
  components: {
    Footer,
    Header,
  },
};
</script>
