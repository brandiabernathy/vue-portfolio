<template>
  <div class="photography">
    <Header />
    <h1>PHOTOGRAPHY</h1>
    <Gallery />
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/footer.vue";
import Gallery from "@/components/gallery.vue";
import Header from "@/components/header.vue";

export default {
  name: "Photography",
  components: {
    Footer,
    Gallery,
    Header,
  },
};
</script>
