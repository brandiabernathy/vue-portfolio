<template>
  <div class="projects">
    <Header />
    <h1>PROJECTS</h1>
    <div class="projects wrapper">
        <Project
            name="Fampicks"
            image="/images/fampicks.jpg"
            description="Worked with another developer to create this site for viewing a family pool of SEC football picks in 2020."
            tech="Vue.js"
        />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/footer.vue";
import Header from "@/components/header.vue";
import Project from "@/components/project.vue";

export default {
  name: "Projects",
  components: {
    Footer,
    Header,
    Project,
  },
};
</script>
