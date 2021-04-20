<template>
    <silent-box :gallery="gallery">testing</silent-box>
</template>

<script>

import Vue from 'vue';
import VueSilentbox from 'vue-silentbox';

Vue.use(VueSilentbox);

export default {
	name: "gallery",
    gallery: [
        {
            src: 'https://cf.ltkcdn.net/dogs/images/orig/235430-2000x1332-australian-shepherd-puppy.jpg',
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

<style scoped lang="scss">
    #silentbox-gallery {
        background-color: blue;
    }
</style>
