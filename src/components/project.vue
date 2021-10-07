<template>
    <div class="project">
        <img :src="image" />
        <div class="text">
            <h3> {{ name }} </h3>
            <div> {{ description }} </div>
            <div> Tech stack: {{ tech }} </div>
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
        + .project {
            margin-top: 80px;
        }
        .text {
            padding-left: 30px;
        }
        &:nth-child(even) {
            flex-direction: row-reverse;
            .text {
                text-align: right;
            }
        }
    }
</style>
