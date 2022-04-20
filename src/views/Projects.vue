<template>
  <div class="projects page">
    <Header />
    <div class="heading wrapper">
      <h1>PROJECTS</h1>
    </div>
    <div class="projects wrapper">
        <Project
            name="Fampicks"
            image="/images/fampicks.jpg"
            description="Worked with another developer to create this site for viewing a family pool of SEC football picks in 2020. I was in charge of all the JavaScript aspects, while the other person handled the design and styling."
            :tech="['Vue.js', 'JSON', 'ESPN API']"
            github="https://github.com/brandiquintos/fampicks"
            live="http://brandiquintos.com/fampicks/"
        />
         <Project
            name="Weather App"
            image="/images/weather.jpg"
            description="A weather app displaying current conditions with hourly and daily information. Allows searching by US city."
            :tech="['React', 'Tailwind CSS', 'AccuWeather API', 'Chart.js']"
            github="https://github.com/brandiquintos/weather"
        />
        <Project
            name="MO COVID"
            image="/images/mo-covid.jpg"
            description="A simple dashboard displaying some statistics about COVID in the state of Missouri."
            :tech="['Vue.js', 'Chart.js', 'COVID Act Now API']"
            github="https://github.com/brandiquintos/mo-covid"
            live="http://brandiquintos.com/mo-covid/"
        />
        <Project
            name="Travel Journal"
            image="/images/travel-journal.jpg"
            description="A very small project made while working through Scrimba's 'Learn React for Free' course."
            :tech="['React', 'Grid', 'Figma']"
            github="https://github.com/brandiquintos/travel-journal"
            live="http://brandiquintos.com/travel-journal/"
        />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import Project from "@/components/Project.vue";

export default {
  name: "Projects",
  components: {
    Footer,
    Header,
    Project,
  },
};
</script>
