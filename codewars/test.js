function scrabbleScore(str) {
    let res = 0;
    let arr1 = ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"];//1
    let arr2 = ["D", "G"];//2
    let arr3 = ["B", "C", "M", "P"];//3
    let arr4 = ["F", "H", "V", "W", "Y"];//4
    let arr6 = ["J", "X"];//8
    let arr5 = ["Q", "Z"];//10
    //K=5
    str = str.split('');
    str.forEach((item, index) => {
        if (item == '') {
            res += 0;
        }
        if (arr1.includes(item.toUpperCase())) {
            res += 1;
        }
        if (arr2.includes(item.toUpperCase())) {
            res += 2;
        }
        if (arr3.includes(item.toUpperCase())) {
            res += 3;
        }
        if (arr4.includes(item.toUpperCase())) {
            res += 4;
        }
        if (arr5.includes(item.toUpperCase())) {
            res += 10;
        }
        if (arr6.includes(item.toUpperCase())) {
            res += 8;
        }
        if (item.toUpperCase() == 'K') {
            res += 5;
        }
    });
    return res;
}

// scrabbleScore('cabbage');
let txt1 =
    'H Z R R Q\n' +
    'D I F C A E A !\n' +
    'G H T E L A E\n' +
    'L M N H P R F\n' +
    'X Z R P E';
let txt2 = "q z J H M z D v H B H A E D G x s C C t H K w y s G K I q L t K D E J w L \n" +
    "K p v r v z C y K M o p D y o y r n \n" +
    "M E w B C p F n M s M J E s u A r J G F L v t r F B H E E D y E x A z F L q s r";
let txt3 = "B p E D y o q F q n C H v x K K D \n" +
    "C r I y o w A n y F t B B q J C u B t z I A F I \n" +
    "F H u s s y H I D n B \n" +
    "L o J u F D F J A I s G s u o x E v \n" +
    "L r x G J K y x o I E n w G H J M M z w F M r G \n" +
    "K";
let txt4 = 'x';

function getDiagonalCode(grid) {
    let arr = grid.split('\n');
    let txt = '', start = 0, i = 0, dis = 1;
    while (arr[start] && arr[start][i]) {
        txt += arr[start][i];
        if (!arr[start + dis]) dis *= -1;
        start += dis;
        i += 2;
    }
    return txt;
}

console.log(getDiagonalCode(txt1));
// console.log(getDiagonalCode(txt2));
// console.log(getDiagonalCode(txt3));
// console.log(getDiagonalCode(txt4));

function encode(string) {
    return string.replace(/[aeiou]/g, function (x) {
        return '_aeiou'.indexOf(x);
    });
}

function decode(string) {
    return string.replace(/[1-5]/g, function (x) {
        return '_aeiou'[x];
    });
}

encode('hello');
decode('h2ll4');

const GetFormat = function (elList) {
    return new Proxy((...a) => {
        return elList.reduce((html, el) => `<${el}>${html}</${el}>`, a.join(''));
    }, {
        get: (_, el) => {
            return GetFormat([el, ...elList]);
        }
    });
};

const Format = GetFormat([]);
//field chained HTML formatting

console.log(
    Format.div.h4('aksld', '123')
);

//手写一个计算器Calculator    (), +, -, *, /
const Calculator = function () {
    this.evaluate = string => {
        //判断是否有括号
        while (string.indexOf('(') > -1) {
            //判断是否有括号
            let s = string.indexOf('(');
            let e = string.indexOf(')', s);
            //判断两个括号之内有没有前括号
            while (string.substring(s, e + 1).split('(').length > 2) {
                s = string.indexOf('(', s + 1);
            }
            //计算括号内的运算
            string = string.substring(0, s) + new Calculator().evaluate(string.substring(s, e + 1).replace(/\(|\)/g, '')) + string.substring(e + 1, string.length);
        }
        string = string.replace(/\s/g, '');  //去除空格
        let arr = string.split(/\+|-|\*|\//);//获得数字
        let computedTagArr = string.split(/\d/).filter(i => i != '').filter(i => i != '.');//获得计算符号去掉小数点
        // 判断是否有乘除
        while (computedTagArr.includes('*') || computedTagArr.includes('/')) {
            let idx, res;
            if (computedTagArr.findIndex(i => i.match(/\*|\//)) > -1) {
                idx = computedTagArr.findIndex(i => i.match(/\*|\//));
            }
            if (computedTagArr[idx] == '*') {
                res = Number(arr[idx]) * Number(arr[idx + 1]);
            } else {
                res = Number(arr[idx]) / Number(arr[idx + 1]);
            }
            computedTagArr.splice(idx, 1);
            arr.splice(idx, 2, res);
        }
        let res = arr.reduce(function (t, n, currentIndex) {
            let computedTag = computedTagArr[currentIndex - 1];
            if (computedTag == '+') {
                return Number(t) + Number(n);
            }
            if (computedTag == '-') {
                return Number(t) - Number(n);
            }
        });
        console.log(res);
        return res;
    };
};
// var calculate = new Calculator();
// calculate.evaluate('1.2+3.8');
// calculate.evaluate('2 + 3 * 4 / 3 - 6 / 3 * 3 + 8');
// Test.assertApproxEquals(calculate.evaluate('127'), 127);
// Test.assertApproxEquals(calculate.evaluate('2 + 3'), 5);
// Test.assertApproxEquals(calculate.evaluate('2 - 3 - 4'), -5);
// Test.assertApproxEquals(calculate.evaluate('10 * 5 / 2'), 25);

function towerBuilder(nFloors) {
    let arr = [], maxLength = 2 * (nFloors - 1) + 1;
    for (let i = 0; i < nFloors; i++) {
        let out = '*'.padEnd(2 * i + 1, '*');
        let dis = maxLength - out.length;
        if (dis > 0) {
            let num = dis / 2 + out.length;
            out = out.padStart(num, ' ');
            num += dis / 2;
            out = out.padEnd(num, ' ');
        }
        arr.push(out);
    }
    return arr;
}

towerBuilder(5);
