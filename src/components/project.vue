<template>
    <div class="project">
        <div class="image-wrapper">
            <img :src="image" />
        </div>
        <div class="text">
            <h3> {{ name }} </h3>
            <div class="description"> {{ description }} </div>
            <div class="tech">
                <span> Tech stack: </span>
                <span class="item" v-for="item in tech" :key="item">
                    {{ item }}
                </span>
            </div>
            <div class="buttons">
                <Button v-if="live" label="live" :link="live" />
                <Button v-if="github" label="code" :link="github" />
            </div>
        </div>
    </div>
</template>

<script>

import Button from "@/components/Button.vue";

export default {
	name: "Project",
    props: ['name', 'image', 'description', 'tech', 'github', 'live'],
    components: { Button },
};
</script>

<style scoped lang="scss">
    .project {
        @include breakpoint(4) {
            display: flex;
        }
        h3 {
            text-transform: lowercase;
            font-size: 28px;
            margin-bottom: 20px;
        }
        .description {
            margin-bottom: 20px;
            line-height: 1.4;
            font-size: 18px;
        }
        + .project {
            margin-top: 80px;
        }
        .button {
            + .button {
                margin-top: 10px;
                @include breakpoint(4) {
                    margin-top: 0;
                    margin-left: 10px;
                }
            }
        }
        .image-wrapper {
            @include breakpoint(4) {
                width: 35%;
            }
        }
        .text {
            padding-top: 20px;
            @include breakpoint(4) {
                padding-top: 0;
                padding-left: 30px;
                width: 65%;
            }
        }
        .tech {
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            span:first-child {
                margin-right: 4px;
            }
            .item {
                padding: 5px 10px;
                border-radius: 20px;
                color: #fff;
                background: lighten(#3f4345, 45%);
                margin: 2px;
            }
        }
    }
</style>
