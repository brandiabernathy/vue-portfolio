<template>
    <silent-box :gallery="gallery"></silent-box>
</template>

<script>

import Vue from 'vue';
import VueSilentbox from 'vue-silentbox';

Vue.use(VueSilentbox);

export default {
	name: "gallery",
    gallery: [
        {
            src: '../assets/ASW_1811.jpg',
            description: 'Star Night Sky Ravine by Mark Basarab, from Unsplash.',
            alt: 'Blue starry night photo.',
            thumbnailWidth: '220px'
        },
        {
            src: '../assets/ASW_1824.jpg',
            description: 'Corno Nero, Italy by Luca Zanon, from Unsplash.',
            alt: 'Landscape photo of mountain with fog.',
            thumbnailWidth: '220px'
        },
    ]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
