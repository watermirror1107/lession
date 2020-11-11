<template>
    <input-search v-model="value" :data-list="arr"></input-search>
</template>

<script>
    import inputSearch from "./components/inputSearch";

    export default {
        components: {inputSearch},
        name: "app",
        data() {
            return {
                value: 2,
                arr: [{label: '第一个', key: 1}, {label: '第二个', key: 2}, {label: '第三个', key: 3}]
            }
        },
        mounted() {
        }
    }
</script>

<style lang="less">
    body {
        background: rgba(0, 0, 0, .6);
    }
</style>