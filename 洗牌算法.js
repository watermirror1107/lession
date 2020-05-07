//洗牌算法
//原地洗牌
let testArr1 = [1, 2, 3, 4, 5, 6, 7];
let testArr2 = [1, 2, 3, 4, 5, 6, 7];

function shuffle(arr) {
    for (let i = 0; i < arr.length; i++) {
        let randomNum = i + Math.round(Math.random() * (arr.length - 1 - i));
        arr[i] = [arr[randomNum], arr[randomNum] = arr[i]][0];
    }
    return arr;
}

//非原地洗牌
function shuffle2(arr) {
    let _arr = [];
    while (arr.length) {
        let randomNum = Math.floor(arr.length * Math.random());
        _arr.push(arr.splice(randomNum, 1)[0]);
    }
    return _arr;
}

console.log(shuffle(testArr1));
console.log(shuffle2(testArr2));

