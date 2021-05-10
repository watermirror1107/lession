<script>
    import {Table, TableColumn} from 'element-ui'

    export default {
        render(h) {
            let children = [];
            this.column.forEach(item => {
                let config = {
                    props: {...item}
                };
                if (this.$scopedSlots[item.prop]) {
                    config.scopedSlots = {
                        default: props => this.$scopedSlots[item.prop](props)
                    };
                }
                let node = h(TableColumn, config)
                children.push(node)
            })
            return h(Table, {
                props: {...this.$props}
            }, children)
        },
        props: {
            column: {type: Array, required: true},
            data: {type: Array, required: true},
        },
        name: "tableComponent"//利用elementui的table二次封装
    }
</script>

<style scoped lang="less">

</style>
