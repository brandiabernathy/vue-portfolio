<template>
	<a class="button" :href="link">
        <div class="label">
            {{ label }}
            <svg class="arrow" viewBox="0 0 72 22" xmlns="http://www.w3.org/2000/svg" ><path fill="none" stroke-width="2" stroke-miterlimit="0" d="M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8 9.8"></path></svg>
        </div>
    </a>
</template>

<script>
export default {
	name: "button",
    props: ['label', 'link'],
};
</script>

<style scoped lang="scss">
    .button {
        overflow: hidden;
        position: relative;
        display: inline-block;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-family: 'Nexa';
        border: 1px solid #6ad1aa !important;
        background-color: transparent;
        color: #6ad1aa;
        font-size: 14px;
        cursor: pointer;
        // transition: all 500ms ease-out;
        &:hover {
            .label:before {
                // transform: translateX(0);
                left: 0;
            }
            .arrow {
                stroke: #fff;
            }
            // border-color: #fff;
            color: #fff;
            // background-color: #6ad1aa;
        }
        .label {
            padding: 20px 50px;
            &:before {
                content: '';
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0;
                left: -100%;
                background-color: #6ad1aa;
                z-index: -1;
                transition: left 0.5s cubic-bezier(0.23, 1, 0.32, 1);
                // transform: translateX(-100%);
            }
        }
        .arrow {
            stroke: #6ad1aa;
            height: 12px;
            margin-left: 10px;
        }
    }
</style>
