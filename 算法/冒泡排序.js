let arr1 = [3, 7, 5, 2];

function bubbleSort(arr) {
    let length = arr.length;
    for (let i = 0; i < length; i++) {//每次缩小数组的长度；
        console.log(length - i - 1)
        for (let j = 0; j < length - i - 1; j++) {//每次都把数组里面最大一项移动到最后面
            let temp = '';
            if (arr[j] > arr[j + 1]) {
                // 交换元素位置
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
            console.log(arr)
        }
    }
    return arr;
}

bubbleSort(arr1)
bubbleSort(['3a', 2, '3b', 1])
