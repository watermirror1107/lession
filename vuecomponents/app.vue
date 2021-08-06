<template>
    <div class="box">
        <!--        <input-search v-model="value" :data-list="arr"></input-search>-->
        <!--        <tab-list :index="index" @changeIndex="changeIndex">-->
        <!--            <div tab-item class="one" title="one">1</div>-->
        <!--            <div tab-item class="two" title="two">2</div>-->
        <!--        </tab-list>-->
        <tableComponent :data="tabList" :column="column">
            <template v-slot:name="scope">
                <el-tag>{{scope.row.name}}</el-tag>
            </template>
            <template v-slot:operation="scope">
                <el-button @click="output(scope.row,scope.$index)">点击</el-button>
            </template>
        </tableComponent>
      <monthSelect :selected-month="['2-4', '7-10']"></monthSelect>
    </div>
</template>

<script>
    import tableComponent from "./components/tableComponent";
    import inputSearch from "./components/inputSearch";
    import tabList from "./components/tabList";
    import monthSelect from "./components/monthSelect";
    export default {
      components: {inputSearch, tabList, tableComponent, monthSelect},
      name: "app",
      data() {
        return {
          tabList: [{time: '时间1', name: '名字1'}, {time: '时间2', name: '名字2'}],
          column: [
            {prop: 'time', label: '日期', width: 100},
            {prop: 'name', label: '名字', width: 200},
            {prop: 'operation', label: '操作'}
          ],
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
            },
            output(data, index) {
                console.log(data)
                console.log(index)
            }
        }
    }
</script>

<style lang="less">
    body {
        background: rgba(0, 0, 0, .6);
    }
</style>
