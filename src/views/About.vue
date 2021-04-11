<template>
  <div class="about">
    <Gallery />
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/footer.vue";
import Gallery from "@/components/gallery.vue";

export default {
  name: "About",
  components: {
    Footer,
    Gallery,
  },
};
</script>
