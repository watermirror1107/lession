<template>
    <div class="selectItem">
        <div class='item' @click="selectItem">
            <p>{{item.name}}</p>
            <!-- 添加self解决点击不是箭头也会触发的BUG -->
            <div @click.stop.self='$emit("switch",$event,item.label)' v-if='item.children&&item.children.length>0'
                 class='arrow'
                 :class="item.isRetract?'isClick':''"></div>
        </div>
        <div class="children" :style="{height:item.isRetract?'auto':'0'}">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            item: null,
        },
        inject: ['chooseArea'],//利用父自己提供的依赖改变值
        methods: {
            selectItem() {
                this.chooseArea(this.item)
            }
        }
    }
</script>

<style scoped lang="scss">
    .item {
        width: 100%;
        box-sizing: border-box;
        height: 80px;
        background-color: #fff;
        padding: 0 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        overflow: hidden;
        transition: all 300ms;
    }

    .children {
        padding-left: 20px;
        overflow: hidden;
    }

    .arrow {
        width: 80px;
        height: 80px;
        background-image: url(../../static/arrow.png);
        transform: rotate(-90deg);
        background-repeat: no-repeat;
        background-size: 20px 32px;
        background-position: center center;

    }

    .isClick {
        transform: rotate(90deg);
    }
</style>
