<template>
    <div class="project">
        <img :src="image" />
        <div class="text">
            <h3> {{ name }} </h3>
            <div> Tech stack: {{ tech }} </div>
            <div> {{ description }} </div>
        </div>
    </div>
</template>

<script>
export default {
	name: "project",
    props: ['name', 'image', 'description', 'tech'],
};
</script>

<style scoped lang="scss">
    .project {
        display: flex;
        img {
            width: 500px;
            max-width: 100%;
        }
    }
</style>
