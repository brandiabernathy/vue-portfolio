<template>
  <div class="photography">
    <Gallery />
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/footer.vue";
import Gallery from "@/components/gallery.vue";

export default {
  name: "Photography",
  components: {
    Footer,
    Gallery,
  },
};
</script>
