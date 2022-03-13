<template>
    <div class="wrapper">
        <silent-box :gallery="gallery"></silent-box>
    </div>
</template>

<script>

import Vue from 'vue';
import VueSilentbox from 'vue-silentbox';

Vue.use(VueSilentbox);

export default {
	name: "Gallery",
    data: () => ({
        gallery: [
            {
                src: 'https://cf.ltkcdn.net/dogs/images/orig/235430-2000x1332-australian-shepherd-puppy.jpg',
                description: 'Star Night Sky Ravine by Mark Basarab, from Unsplash.',
                alt: 'Blue starry night photo.',
                // thumbnailWidth: '220px'
            },
            {
                src: 'https://cf.ltkcdn.net/dogs/images/orig/235430-2000x1332-australian-shepherd-puppy.jpg',
                description: 'Star Night Sky Ravine by Mark Basarab, from Unsplash.',
                alt: 'Blue starry night photo.',
                // thumbnailWidth: '220px'
            },
            {
                src: 'https://cf.ltkcdn.net/dogs/images/orig/235430-2000x1332-australian-shepherd-puppy.jpg',
                description: 'Star Night Sky Ravine by Mark Basarab, from Unsplash.',
                alt: 'Blue starry night photo.',
                // thumbnailWidth: '220px'
            },
            {
                src: 'https://cf.ltkcdn.net/dogs/images/orig/235430-2000x1332-australian-shepherd-puppy.jpg',
                description: 'Star Night Sky Ravine by Mark Basarab, from Unsplash.',
                alt: 'Blue starry night photo.',
                // thumbnailWidth: '220px'
            },
            {
                src: 'https://cf.ltkcdn.net/dogs/images/orig/235430-2000x1332-australian-shepherd-puppy.jpg',
                description: 'Star Night Sky Ravine by Mark Basarab, from Unsplash.',
                alt: 'Blue starry night photo.',
                // thumbnailWidth: '220px'
            },
            {
                src: '/images/ASW_1824.jpg',
                description: 'Corno Nero, Italy by Luca Zanon, from Unsplash.',
                alt: 'Landscape photo of mountain with fog.',
                // thumbnailWidth: '220px'
            },
        ]
    })
};
</script>

<style scoped lang="scss">
    #silentbox-gallery {
        display: flex;
        flex-wrap: wrap;
        a {
            width: 25%;
        }
    }
    .silentbox-item {
        width: 25%;
    }
</style>
