<template>
  <div class="photography">
    <Header />
    <h1>PHOTOGRAPHY</h1>
    <Gallery />
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Gallery from "@/components/Gallery.vue";
import Header from "@/components/Header.vue";

export default {
  name: "Photography",
  components: {
    Footer,
    Gallery,
    Header,
  },
};
</script>
