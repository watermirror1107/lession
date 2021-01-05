<!-- <div class="container">
		<div class='typeList'>
			<template>
				<div :class='selectedIndex==0?"selected":""' @click="changeSelect(0)">
					<p>
						检查结论
					</p>
				</div>
				<div class='br'></div>
			</template>
		</div>
		<div class="box">

		</div>
	</div> -->

<script>
    export default {
        props: {
            index: {
                default: 0
            }
        },
        data() {
            return {};
        },
        render(h) {
            //过滤错误的插入内容
            let titleList = [],
                typeChildren = [];
            let slotNodes = this.$slots.default.filter(i => {
                if (i.tag === 'tab-item') {
                    titleList.push(i.data.attrs.title)
                    return i.tag === 'tab-item'
                }
            });
            titleList.forEach((item, index) => {
                let node = h('div', {
                        class: [this.index === index ? 'selected' : '', 'item'],
                        on: {
                            click: () => {
                                this.$emit('changeIndex', index)
                            }
                        }
                    },
                    [h('p', {
                        class: 'describe'
                    }, item)],
                );
                typeChildren.push(node)
                if (index !== titleList.length - 1) {
                    typeChildren.push(h('div', {
                        class: 'br'
                    }))
                }
            })
            return h('div', {
                class: 'container',
            }, [
                h('div', {
                    class: 'typeList'
                }, typeChildren),
                h('div', {
                    class: 'box'
                })
            ])
        }
    }
</script>

<style scoped lang="less">
    .typeList {
        display: flex;
        width: 100%;
        height: 90px;
        border-bottom: 2px solid #E6E6E6;
        align-items: center;
        justify-content: center;

        .item {
            flex: 1;
            line-height: 88px;
            color: #999999;
            height: 100%;
            display: flex;
            justify-content: center;

            .describe {
                font-size: 30px;
                text-align: center;
                border-bottom: transparent 4px solid;
            }
        }

        .br {
            width: 2px;
            flex-basis: 2px;
            height: 60px;
            background-color: #E6E6E6;
        }

        .selected {
            .describe {
                border-bottom: #333333 4px solid !important;
                color: #333 !important;
            }
        }
    }

    .box {
        width: 100%;
        overflow: hidden;
    }
</style>
