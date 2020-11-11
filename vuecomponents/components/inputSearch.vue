<template>
    <div class='wrap' v-click-out-side="closeListBox">
        <div class="inputBox">
            <input type="text" v-model="midVal" @input="changeDataList">
        </div>
        <div class="listBox" v-show="isChange&&!isFirst">
            <p class="dataList" v-for='(item,index) in showDataList' :key="index" @click='selectItem(item)'>
                {{item[showProperty]}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'inputSearch',
        props: {
            dataList: {
                default: [],//options列表
                type: Array,
                required: true
            },
            showProperty: {//展示的property
                default: 'label',
                type: String
            },
            valueProperty: {//赋值的property
                default: 'key',
                type: String
            },
            value: {//值
                default: null,
                required: true
            }
        },
        directives: {
            clickOutSide: {
                bind(el, binding, vnode, oldVnode) {
                    //这里唯一一个待优化的地方就是给document添加了click,如果组件用了多次，就会给document添加多个click事件
                    //但是由于click的回调是一个匿名函数所以没办法通过removeEventListener来移除；
                    //elementUI的做法是声明一个全局数组变量来保存这些添加了clickoutside指令的dom和每个dom的点击回调方法,click的时候通过循环数组来触发里面的回调，在unbind的时候移除数组里面的dom，减少了没必要的dom事件
                    document.addEventListener('click', (target) => {
                        if (!el.contains(target.target)) {
                            // console.log(this)//这里的this不是vue实例对象
                            //通过vnode.context来获得组件的方法
                            //binding.expression绑定的方法名
                            vnode.context[binding.expression]()
                        }
                    }, false)
                }
            }
        },
        model: {
            prop: 'value',
            event: 'valChange'
        },
        data() {
            return {
                midVal: '',
                showDataList: [],
                isEntering: false,
                isChange: false,
                timeOut: null,
                isFirst: true
            };
        },
        watch: {
            midVal: {
                handler(d1) {
                    this.isChange = true;
                },
                immediate: false//将立即以表达式的当前值触发回调
            }
        },
        onDestroy() {
            clearTimeout(this.timeOut);
        },
        mounted() {
            let item = this.dataList.find(i => i[this.valueProperty] == this.value);
            this.midVal = item[this.showProperty]
            this.showDataList = this.dataList;
        },
        methods: {
            selectItem(item) {
                this.$emit('valChange', item[this.valueProperty]);
                this.$emit('selectItem');//父级选中触发事件
            },
            filterList() {
                this.showDataList = this.dataList.filter(item => {
                    return String(item[this.showProperty]).includes(String(this.midVal));
                });
            },
            changeDataList() {
                this.isFirst = false;
                if (this.timeOut) clearTimeout(this.timeOut);
                this.timeOut = setTimeout(() => {
                    this.filterList();
                }, 300);
            },
            closeListBox() {
                this.isChange = false;
            }
        }
    };
</script>

<style lang="less">
    .wrap {
        width: 100%;
        height: 100%;
        background: transparent;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

    .inputBox {
        height: 115px;
        width: 100%;
        display: flex;
        background-color: #ffffff;
        align-items: center;
        padding: 0 20px;
        box-sizing: border-box;
        border: 1px solid #EEEEEE;
        border-radius: 10px 10px 0 0;

        input {
            text-align: left;
            flex: 1;
            line-height: 30px;
            text-indent: 1em;
        }
    }

    .listBox {
        width: 100%;
        background-color: #FFFFFF;
        flex: 1;
        overflow-y: scroll;
        border-radius: 0 0 10px 10px;

        p {
            display: block;
            width: calc(100% - 50px);
            margin: 0 auto;
            line-height: 72px;
            font-size: 24px;
            font-weight: 400;
            color: #333333;
            border-bottom: #E6E6E6 1px solid;
        }
    }
</style>
