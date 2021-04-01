<template>
    <el-select v-model="value" multiple placeholder="请选择">
        <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
        </el-option>
    </el-select>
</template>

<script>
    export default {
        name: "allSelect",
        data: () => ({
            value: [],
            options: [{label: '全部', value: 'all'}, {label: '今天', value: '1'}, {label: '明天', value: '2'}, {
                label: '昨天',
                value: '3'
            }]
        }),
        watch: {//当采用el-select多选时候里面有个全选按钮可以利用下面逻辑实现
            value(nv, ov) {//value是数组
                let length = this.options.length;
                if (nv.length > ov.length) {//添加
                    if (nv.indexOf('all') > -1 && ov.indexOf('all') < 0) {//点击的是全选选项时候，
                        this.value = [];
                        for (let i of this.options) {
                            this.value.push(i.value)
                        }
                    } else {
                        if (nv.length === length - 1) {//除了全选其他都选中时候，选上全选框
                            this.value.unshift('all')
                        }
                    }
                } else if (nv.length < ov.length) {//移除
                    if (ov.indexOf('all') > -1 && nv.indexOf('all') < 0) {//移除全选的时候
                        this.value = []
                    } else {
                        if (ov.indexOf('all') > -1) {
                            this.value.shift();
                        }
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>
