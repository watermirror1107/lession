let arr = [3, 34, 45, 2, 6, 65, 856, 32, 76, 9];

function selectionSort(list) {
    let length = list.length;
    let minIndex, temp;
    for (let i = 0; i < length - 1; i++) {
        minIndex = i;
        for (let j = i + 1; j < length; j++) {
            if (list[j] < list[minIndex]) {
                minIndex = j
            }
        }
        temp = list[i];
        list[i] = list[minIndex];
        list[minIndex] = temp;
    }
    return list
}

console.log(selectionSort(arr));
