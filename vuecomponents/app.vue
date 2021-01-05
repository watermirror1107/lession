<template>
    <div class="box">
        <input-search v-model="value" :data-list="arr"></input-search>
        <tab-list :index="index" @changeIndex="changeIndex">
            <div tab-item class="one" title="one">1</div>
            <div tab-item class="two" title="two">2</div>
        </tab-list>
    </div>
</template>

<script>
    import inputSearch from "./components/inputSearch";
    import tabList from "./components/tabList";

    export default {
        components: {inputSearch, tabList},
        name: "app",
        data() {
            return {
                index: 0,
                value: 2,
                arr: [{label: '第一个', key: 1}, {label: '第二个', key: 2}, {label: '第三个', key: 3}]
            }
        },
        mounted() {
        },
        methods: {
            changeIndex(index) {
                this.index = index;
            }
        }
    }
</script>

<style lang="less">
    body {
        background: rgba(0, 0, 0, .6);
    }
</style>
