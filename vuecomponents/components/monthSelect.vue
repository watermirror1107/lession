<!--时间范围选择器-->
<template>
  <div class="container">
    <button
        :disabled="start<0||end<0"
        style="margin-left: 10px;"
        @click="resetSelect">重置
    </button>
    <div
        class="wrap"
        ref="wrap">
      <div
          class="wrap-box"
          v-for="(item,index) in 36"
          :key="index"
          v-bind:data-index="index"
          :class="{'in-range':index>start&&index<end,start:start===index&&end>=0,end:end===index}"
          @click="clickItem($event)"
          @mouseenter="hoverItem(index)"
      >
        <div
            class="item"
            :class="{blue:start===index||end===index}"
        >
          {{ item }}月
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['selectedMonth'], // 已经选中的月份
  data() {
    return {
      visible: true,
      start: -1,
      end: -1,
      isClick: false,
      firstClickStart: -1// 点击开始位置
    }
  },
  mounted() {
    this.setUnavailable()
  },
  methods: {
    /**
     * @description:设置不可用区域
     */
    setUnavailable() {
      this.$nextTick(() => { // 设置不可选区域
        const nodeList = this.$refs.wrap.querySelectorAll('.wrap-box')
        for (const item of this.selectedMonth) {
          const arr = item.split('-')
          const start = arr[0] - 1
          const end = arr[1] - 1
          let x = start
          while (x <= end) {
            if (x === start) {
              nodeList[x].classList.add('start')
            } else if (x === end) {
              nodeList[x].classList.add('end')
            }
            nodeList[x].classList.add('disabled')
            x++
          }
        }
      })
    },
    /**
     * @description:悬浮
     */
    hoverItem(index) {
      if (this.firstClickStart >= 0 && this.isClick) {
        if (index > this.firstClickStart) { // 判断方向
          this.start = this.firstClickStart
          if (!this.isIncludesUnavailable(this.start, index)) {
            this.end = index
          }
        } else if (index < this.firstClickStart) {
          if (!this.isIncludesUnavailable(index, this.end)) {
            this.start = index
          }
          this.end = this.firstClickStart
        }
      }
    },
    /**
     * @description:点击选择回调
     */
    clickItem(ev) {
      const node = ev.currentTarget
      if ([...node.classList].includes('disabled')) return false
      const index = Number(node.getAttribute('data-index'))
      if (this.start >= 0 && this.end < 0) {
        this.end = index
      } else if (this.end >= 0) {
        if (this.isClick) {
          if (this.firstClickStart === this.end) {
            this.start = index
            this.firstClickStart = -1
          } else {
            this.end = index
            this.firstClickStart = -1
          }
        } else {
          this.start = index
          this.firstClickStart = index
          this.end = -1
        }
      } else {
        this.start = index
        this.firstClickStart = index
      }
      if (this.end < this.start && this.end >= 0) {
        this.start = [this.end, this.end = this.start][0]
      }
      if (this.end >= 0 && this.start >= 0 && this.isIncludesUnavailable(this.start, this.end)) {
        this.resetSelect()
      }
      this.isClick = !this.isClick
    },
    /**
     * @description:检查选择区域是否包含了不可选月份
     */
    isIncludesUnavailable(start, end) {
      let bol = false
      for (const item of this.selectedMonth) {
        const arr = item.split('-')
        const s = --arr[0]
        const e = --arr[1]
        if (start > e || end < s) {
          // 排除没有交集的
        } else {
          bol = true
          break
        }
      }
      return bol
    },
    /**
     * @description:确定
     */
    handleOk() {
      if (this.start !== this.end && this.end >= 0) {
        this.visible = false
      } else {
        this.$message.warn('选择月份范围不合理')
      }
    },
    /**
     * @description:重置
     */
    resetSelect() {
      this.start = -1
      this.end = -1
      this.firstClickStart = -1
      this.setUnavailable()
    }
  }
}
</script>
<style scoped lang="less">
.container {
  width: 700px;
  border: 1px solid #333;
  background-color: #fff;
}

.wrap {
  display: flex;
  width: 90%;
  flex-wrap: wrap;
  margin: 0 auto;
}

.wrap-box {
  flex-basis: 60px;
  width: 60px;
  height: 55px;
  margin: 10px 0;
}

.disabled {
  background-color: #eeee
}

.item {
  margin-top: 1.5px;
  width: 50px;
  height: 50px;
  margin-left: 5px;
  border-radius: 50%;
  border: 2px solid #969696;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
}

.in-range {
  background-color: blue;
  color: #fff;
}

.in-range .item {
  border: unset;
}


.blue {
  border-color: blue;
  color: #fff;
  background-color: blue
}

.wrap-box.start {
  background-color: cornflowerblue;
  border-top-left-radius: 27px;
  border-bottom-left-radius: 27px;
}

.wrap-box.end {
  background-color: cornflowerblue;
  border-top-right-radius: 27px;
  border-bottom-right-radius: 27px;
}

.disabled.start, .disabled.end {
  background-color: #eeeeee;
}

.disabled {
  color: #969696;
  background-color: #eeeeee;
}

.disabled .item {
  border: 2px solid #E6E6E6;
  cursor: not-allowed;
}


</style>
