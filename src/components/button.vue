<template>
	<a class="button" :href="link">
        {{ label }}
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
        display: inline-block;
        padding: 20px 25px;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-family: 'Nexa';
        border: 1px solid #6ad1aa !important;
        background-color: transparent;
        color: #6ad1aa;
        font-size: 22px;
        cursor: pointer;
        transition: all 500ms ease-out;
        &:hover {
            border-color: #fff;
            color: #fff;
            background-color: #6ad1aa;
        }
    }
</style>
