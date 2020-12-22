<script>
    import oneTree from './oneTree.vue'

    export default {
        render(h) {
            let createChild = (item) => {//递归生成内部树桩结构
                let res = []
                if (item.children && item.children.length > 0) {
                    for (let i = 0; i < item.children.length; i++) {
                        res.push(h(oneTree, {
                            on: {
                                switch: this.changeRetract
                            },
                            props: {
                                index: i,
                                item: item.children[i]
                            },
                            key: item.children[i].label
                        }, createChild(item.children[i])))
                    }
                }
                return res
            }
            return h('div', {
                class: 'contain',
            }, this.list.map((item, index) => {
                return h(oneTree, {
                    on: {
                        switch: this.changeRetract,
                    },
                    props: {
                        index: index,
                        item: item
                    },
                    key: item.label
                }, createChild(item))
            }))
        },
        inheritAttrs: false,
        props: {
            arr: {
                type: Array,
                default: () => [{
                    name: 'p1',
                    children: [{
                        name: 's1'
                    }]
                },
                    {
                        name: 'p2',
                        children: [{
                            name: 's2',
                            children: [{
                                name: 'gs1',
                                children: [{
                                    name: 'ggs'
                                },
                                    {
                                        name: 'ggs'
                                    }
                                ]
                            }, {
                                name: 'gs2'
                            }]
                        }]
                    }
                ]
            }
        },
        components: {
            oneTree
        },
        data() {
            return {
                list: []
            };
        },
        methods: {
            changeRetract(ev, label) {
                let arr = String(label).split(':');
                let x = 0,
                    obj = null;//对象是个指针，利用x数字和数组长度做判断，递归获取里面的对象
                while (x <= (arr.length - 1)) {
                    if (x == 0) {
                        obj = this.list[arr[x]]
                    } else {
                        obj = obj.children[arr[x]]
                    }
                    x++;
                }
                this.$set(obj, 'isRetract', !obj.isRetract)
            }
        },
        watch: {
            arr: {
                handler(nv, ov) {
                    let arr = JSON.parse(JSON.stringify(nv));

                    function addAttr(item, index, parentlabel) {
                        if (parentlabel == null) {
                            item.label = index
                        } else {
                            item.label = parentlabel + ':' + index;
                        }
                        if (item.children && item.children.length > 0) {
                            item.isRetract = false;
                            for (let i = 0; i < item.children.length; i++) {
                                addAttr(item.children[i], i, item.label)
                            }
                        }
                    }

                    arr.map((item, index) => {
                        addAttr(item, index, null)
                    });
                    this.list = arr;
                },
                immediate: true
            }
        }
    }
</script>

<style scoped lang="scss">
    .contain {
        width: 100%;
    }
</style>
