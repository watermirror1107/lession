<!--最终呈现效果如dynamicHtml.png图片-->

<script>
    import radioItem from '../../components/radioItem/radioItem.vue'

    let self;
    export default {
        components: {
            radioItem
        },
        data() {
            self = this;
            return {
                test: 1,
                checkList: [],
            }
        },
        props: ['contentArr'],
        created() {
            let x = 0;

            function computeNum(n) {
                for (let item of n) {

                    if (item.children.length > 0) {
                        computeNum(item.children)
                    } else {
                        if (item.itemTypes && item.itemTypes.length > 0) {
                            x++;
                        }
                    }
                }
            }

            //contentArr如果这个数组是动态获取的，需要在组件引用时候加上v-if，不然会出现异步渲染问题；
            computeNum(this.contentArr)
            for (let i = 0; i < x; i++) {
                this.checkList.push({
                    value: ''
                })
            }
            //在created里面就要遍历出x的长度是因为在render时候修改state会触发render，就会无限循环
        },
        render(h) {
            let x = 0;

            function createNode(children) {
                let res = [];
                for (let i = 0; i < children.length; i++) {
                    let litList = [];
                    litList.push(h('text', {
                        class: 'txt'
                    }, (i + 1) + ' ' + children[i].itemContent));
                    if (children[i].children.length > 0) {
                        litList.push(createNode(children[i].children))
                    } else {
                        if (children[i].itemTypes.length > 0) {
                            let copynum = x;//这里因为x在下面引用到了还是个变量，所以需要一个浅拷贝，拷贝值即可
                            let c = h(radioItem, {
                                props: {
                                    items: children[i].itemTypes,
                                    label: {
                                        label: ''
                                    },
                                    value: self.checkList[copynum].value
                                },
                                on: {
                                    input: (value) => {
                                        self.$set(self.checkList[copynum], 'value', value)
                                    }
                                }
                            })
                            let t = h('textarea')
                            x++;
                            litList.push(...[c, t])
                        }
                    }
                    res.push(h('view', {
                        class: 'litBox'
                    }, litList))
                }
                return res
            }

            let childrenList = [];
            for (let i = 0; i < this.contentArr.length; i++) {
                let bigType = this.contentArr[i];
                let b = h('view', {
                    class: 'bigType'
                }, [h('text', (i + 1) + ' ' + bigType.itemContent), ...createNode(bigType.children)]);
                childrenList.push(b)
            }
            return h('view', {
                class: 'wrap'
            }, childrenList)
        },
    }
</script>

<style scoped lang="less">
    /*@import '@public.less';*/

    .wrap {
        width: 100%;
        padding-top: 30px;
        display: block;

        .bigType > .litBox {
            background-color: #f7fcff;
            border-radius: 10px;
        }

        .litBox {
            display: block;
            padding-left: 30px;
            box-sizing: border-box;
            width: 100%;
            margin-top: 20px;

            /deep/ .item {
                padding: 0;
                margin-top: 0;

                .input {
                    border-bottom: 0;
                }
            }
        }

        .txt {
            margin-bottom: 10px;
            display: block;

        }
    }
</style>
