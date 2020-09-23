<template>
	<div class='wrap' @click.stop="cancalBubble">
		<div class="inputBox">
			<input type="text" v-model="midVal" @input="changeDataList">
		</div>
		<div class="listBox">
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
				dafault: [],//options列表
				type: Array,
				required: true
			},
			showProperty: {//展示的property
				default: 'name',
				type: String,
				required: true
			},
			valueProperty: {//赋值的property
				default: 'dictionaryValue',
				type: String,
				required: true
			},
			val: {//值
				required: true
			}
		},
		model: {
			prop: 'val',
			event: 'valchange'
		},
		data() {
			return {
				showDataList: [],
				isEntering: false,
				timeOut: null,
				midVal: ''
			};
		},
		onDestroy() {
			clearTimeout(this.timeOut);
		},
		mounted() {
      let item = this.dataList.find(i => i[this.valueProperty] == this.val);
      this.midVal = item ? item[this.showProperty] : '';
      this.showDataList = this.dataList;
    },
		methods: {
			cancalBubble() {
				return false;
			},
			selectItem(item) {
				this.$emit('valchange', item[this.valueProperty]);
				this.$emit('selectItem');
			},
			filterList() {
				this.showDataList = this.dataList.filter(item => {
					return String(item[this.showProperty]).indexOf(this.midVal) > -1;
				});
			},
			changeDataList() {
				clearTimeout(this.timeOut);
				this.timeOut = setTimeout(() => {
					this.filterList();
				}, 300);
			}
		}
	};
</script>

<style lang="scss">
	.wrap {
		width: 100%;
		height: 100%;
		background: #FCFCFC;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}

	.inputBox {
		height: 115px;
		width: calc(100% - 40px);
		margin: 20px auto;
		display: flex;
		background-color: #ffffff;
		align-items: center;
		padding: 0 20px;
		border: 1px solid #EEEEEE;
		border-radius: 10px;

		input {
			text-align: left;
			flex: 1;
			text-indent: 1em;
		}
	}

	.listBox {
		width: 100%;
		background-color: #FFFFFF;
		flex: 1;
		overflow-y: scroll;

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
