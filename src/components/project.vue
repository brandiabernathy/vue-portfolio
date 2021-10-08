<template>
    <div class="project">
        <div class="image-wrapper">
            <img :src="image" />
        </div>
        <div class="text">
            <h3> {{ name }} </h3>
            <div class="description"> {{ description }} </div>
            <div class="tech"> Tech stack:
                <span v-for="item in tech" :key="item">
                    {{ item }}
                </span>
            </div>
            <Button label="live" />
            <Button label="code" />
        </div>
    </div>
</template>

<script>

import Button from "@/components/button.vue";

export default {
	name: "project",
    props: ['name', 'image', 'description', 'tech'],
    components: { Button },
};
</script>

<style scoped lang="scss">
    .project {
        display: flex;
        // border: 1px solid #edf2f5;
        // box-shadow: 0 0 20px #f1f5f7;
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
            // transform: scale(.8);
            + .button {
                margin-left: 10px;
            }
        }
        .image-wrapper {
            // position: relative;
            width: 35%;
            // &:before {
            //     position: absolute;
            //     width: 100%;
            //     height: 100%;
            //     content: '';
            //     border: 1px solid black;
            // }
        }
        .text {
            padding-left: 30px;
            width: 65%;
        }
        .tech {
            margin-bottom: 20px;
            span {
                padding: 5px 10px;
                border-radius: 20px;
                color: #fff;
                background: lighten(#3f4345, 45%);
                margin: 2px;
            }
        }
        // &:nth-child(even) {
        //     flex-direction: row-reverse;
        //     .text {
        //         text-align: right;
        //     }
        // }
    }
</style>
