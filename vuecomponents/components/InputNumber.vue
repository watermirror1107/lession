<template>
  <div style="display:flex;">
    <div class="container">
      <button type="button" @click="reduce">
        -
      </button>
      <input :value="value" type="number" @input="changeValue">
      <button type="button" @click="plus">
        +
      </button>
    </div>
    {{unit?unit:''}}
  </div>
</template>

<script>

  export default {
    name: 'InputNumber',
    model: {
      prop: 'value',
      event: 'valChange'
    },
    props: {
      min: {
        default: 1,
        type: Number
      },
      max: {
        default: 4096,
        type: Number
      },
      step: {
        default: 1,
        type: Number
      },
      value: undefined,
      unit: {
        default: undefined,
        type: Text
      }
    },
    methods: {
      changeValue(ev) {
        let {value} = ev.target
        if (value > this.max) {
          value = this.max
          ev.target.value = this.max
        }
        if (value < this.min) {
          value = this.min
          ev.target.value = this.min
        }
        this.$emit('valChange', value)
      },
      reduce() {
        const {value, min, step} = this
        const res = value - step
        this.$emit('valChange', res < min ? min : res)
      },
      plus() {
        const {value, max, step} = this
        const res = value + step
        this.$emit('valChange', res > max ? max : res)
      }
    }
  }
</script>

<style scoped lang="less">
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 40px;
    height: 40px;
    width: 200px;
    border-radius: 3px;
    color: #323232;
    font-size: 14px;
    box-sizing: border-box;
    border: 1px solid #c8c8c8;
    margin-right: 10px;

    input {
      height: 38px;
      line-height: 38px;
      outline: none;
      min-width: unset;
      flex-grow: 1;
      background-color: transparent;
      text-align: center;
    }

    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /*** 消除input元素 type="number" 时默认的 加减按钮---moz版*/

    input[type=number] {
      -moz-appearance: textfield;
    }

    button {
      color: #C8C8C8;
      display: block;
      width: 40px;
      height: 38px;
      line-height: 38px;
      text-align: center;
      cursor: pointer;
      outline: none;
      border: none;
      background-color: transparent;
    }
  }
</style>
