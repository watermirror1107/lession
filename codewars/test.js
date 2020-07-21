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
            let e = string.indexOf(')');
            let s = string.lastIndexOf('(', e);//后括号的前面距离他最近的前括号必定是同属一个括号的，反之则不一定，例如(();
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
        return res;
    };
};
// var calculate = new Calculator();
// calculate.evaluate('1.2+3.8*4/2+(2*(2+2))');
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


function findOutlier(integers) {
    let x, n = 0;
    for (let i = 0; i < 3; i++) {
        if (integers[i] % 2 === 0) {
            n++;
        }
    }
    switch (n) {
        case 3:
            x = integers.find(i => i % 2 !== 0);
            break;
        case 2:
            x = integers.find(i => i % 2 !== 0);
            break;
        case 1:
            x = integers.find(i => i % 2 === 0);
            break;
        case 0:
            x = integers.find(i => i % 2 === 0);
            break;
    }
    return x;
}

// findOutlier([1, 2, 3])


function stockList(listOfArt, listOfCat) {
    let arr = [], x = 0;
    listOfCat.map(i => {
        let num = 0;
        listOfArt.map(li => {
            if (li.indexOf(i) === 0) {
                num += Number(li.split(' ')[1]);
                x += num;
            }
        });
        arr.push(`(${i} : ${num})`);
    });
    return x === 0 ? '' : arr.join(' - ');
}

// b = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"];
// c = ["A", "B"];
// res = "(A : 200) - (B : 1140)"
// stockList(b, c);
//
// b = ["CBART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"]
// c = ["A", "B", "C", "W"]
// res = "(A : 0) - (B : 114) - (C : 70) - (W : 0)"
// Test.assertEquals(stockList(b, c), res)


function roundToNext5(n) {
    return Math.ceil(n / 5) * 5;
}


function capitalize(s) {
    let t1 = '', t2 = '';
    for (let i = 0; i < s.length; i++) {
        t1 += i % 2 === 0 ? s[i].toUpperCase() : s[i];
        t2 += i % 2 !== 0 ? s[i].toUpperCase() : s[i];
    }
    return [t1, t2];
}

// capitalize("abcdef"),['AbCdEf', 'aBcDeF']
// Test.assertDeepEquals(capitalize("codewars"),['CoDeWaRs', 'cOdEwArS']);
// Test.assertDeepEquals(capitalize("abracadabra"),['AbRaCaDaBrA', 'aBrAcAdAbRa']);
// Test.assertDeepEquals(capitalize("codewarriors"),['CoDeWaRrIoRs', 'cOdEwArRiOrS']);


function codewarResult(codewarrior, opponent) {
    let x = codewarrior.concat().sort((a, b) => a - b), y = opponent.concat().sort((a, b) => b - a);
    // console.log(x);
    // console.log(y);
    let win = 0, mid = 0, total = x.length;
    while (x.some(i => i > y[y.length - 1])) {
        for (let idx = 0; idx < x.length; idx++) {
            for (let i = 0; i < y.length; i++) {
                if (x[idx] > y[i]) {
                    win++;
                    y.splice(i, 1);
                    x.splice(idx, 1);
                    i = 0;
                    idx = 0;
                }
            }
        }
    }
    while (x.some(i => i == y[y.length - 1])) {

        for (let idx = 0; idx < x.length; idx++) {
            for (let i = 0; i < y.length; i++) {
                if (x[idx] == y[i]) {
                    mid++;
                    y.splice(i, 1);
                    x.splice(idx, 1);
                    i = 0;
                    idx = 0;
                }
            }
        }

    }
    // console.log(x);
    // console.log(y);
    // console.log(win);
    // console.log(mid);
    if (total - mid === (win * 2)) {
        return 'Stalemate';
    }
    if (total - mid - win < win) {
        return 'Victory';
    }
    return "Defeat"; //
}

// codewarResult([1, 4, 1], [1, 5, 3]);
// codewarResult([5], [6]);
// codewarResult([1, 2, 2, 1], [3, 1, 2, 3]);
// codewarResult([2, 4, 3, 1], [4, 5, 1, 2]);
// codewarResult([6,7,6,4,3] , [7,1,5,11,10]);
// codewarResult([3, 3, 1, 1, 2], [5, 5, 1, 3, 3]);
// codewarResult([2, 1, 3, 1, 1, 3, 3, 2, 3, 1, 1, 1, 3, 1, 3, 1, 3, 3, 1, 2, 3, 3, 1, 3], [4, 4, 1, 4, 3, 1, 4, 4, 3, 2, 1, 2, 1, 3, 3, 1, 4, 4, 3, 2, 3, 2, 4, 1]);


let res = [], num = 10;
while (res.length < 65) {
    let nNum = Number(String(num).split('').reverse().join(''));
    if (res.includes(num) || res.includes(nNum)) {
        num++;
        continue;
    } else if (String(num).split('').reverse()[0] == '0') {
        num++;
        continue;
    } else {
        let sum = nNum + num;
        let dis = Math.abs(nNum - num);
        if (sum % dis === 0) {
            res.push(num);
            res.push(nNum);
        }
        num++;
    }
}
res = res.sort((a, b) => a - b);

function sumDifRev(n) {
    return res[n - 1];
}

// console.log(sumDifRev(25));
// console.log(sumDifRev(57));

function reverseBits(n) {
    return parseInt(n.toString(2).split('').reverse().join(''), 2);
}

// console.log(reverseBits(417));

var isPP = function (n) {
    let xx = Math.sqrt(n);
    if (Number.isInteger(xx)) {
        return [xx, 2];
    }
    let x = 2;
    while (x <= parseInt(xx)) {
        console.log(x);
        y = 2;
        while (Math.pow(x, y) <= n) {
            if (Math.pow(x, y) === n) {
                return [x, y];
            }
            y++;
        }
        x++;
    }
    return null;
};
// console.log(isPP(27));


//"fruit_banana,vegetable_carrot,fruit_apple,canned_sardines,drink_juice,fruit_orange"
let txt = 'fruit_banana,vegetable_carrot,fruit_apple,canned_sardines,drink_juice,fruit_orange';

function solution(input) {
    let arr1 = input.split(',');
    let obj = {'fruit': [], 'meat': [], other: [], vegetable: []}, tt = '';
    arr1.map((i) => {
        let type = i.split('_')[0];
        let item = i.split('_')[1];
        if (!obj[type]) {
            obj.other.push(item);
        } else {
            obj[type].push(item);
        }

    });
    for (let key in obj) {
        tt += key + ':';
        tt += obj[key].sort().join(',');
        tt += key === 'vegetable' ? '' : '\n';
    }
    return tt;
}

// solution(txt);


function digital_root(n) {
    if (n < 10) {
        return n;
    }
    let arr = String(n).split(''), sum = 0;
    arr.map(i => {
        sum += Number(i);
    });
    while (sum >= 10) {
        sum = digital_root(sum);
    }
    return sum;
}

// console.log(digital_root(2));
// console.log(digital_root(16));
// console.log(digital_root(456));


let t1 = 'sssssssssssssassssss', t2 = 'ssssssssssssssassssssss';

function findDifferent(str1, str2) {
    let a1 = str1.split('');
    let a2 = str2.split('');
    let obj = {index: -1, addedText: '', deletedText: ''};
    let length = a1.length > a2.length ? a1.length : a2.length;
    let dis = '';
    let startIndex = -1, endIndex = -1;
    for (let i = 0; i < length; i++) {
        if (a1[i] != a2[i]) {
            startIndex = i;
            break;
        }
    }
    for (let i = a2.length - 1; i > 0; i--) {
        if (a1[i] != a2[i]) {
            endIndex = i;
            break;
        }
    }
    if (startIndex != endIndex) {
        if (a1.length > a2.length) {
            dis = str1.substring(startIndex, str1.indexOf(str2.substring(endIndex, str2.length)));
            obj.deletedText = dis;
        } else {
            dis = str2.substring(startIndex, endIndex + 1);
            obj.addedText = dis;
            obj.deletedText = str1.substring(startIndex, endIndex + 1);
        }
        obj.index = startIndex;
    }
    console.log(startIndex);
    console.log(endIndex);
    console.log(obj);
    return obj;
}

// findDifferent(t1, t2);


//c5 2 5*4*/2*1
function threeSplit(a) {
    function sumArr(arr) {
        return arr.reduce((t, i) => t + Number(i), 0);
    }

    let resNum = 0, s1 = 1, s2;
    while (s1 <= a.length - 2) {
        let sum = sumArr(a.slice(0, s1));
        s2 = s1 + 1;
        while (s2 <= a.length - 1) {
            if (sum === sumArr(a.slice(s1, s2))) {
                if (sum === sumArr(a.slice(s2))) {
                    resNum++;
                }
            }
            s2++;
        }
        s1++;
    }
    return resNum;
}

// threeSplit([0, -1, 0, -1, 0, -1]);

function multiples(m, n) {
    let arr = [];
    for (let i = 0; i < m; i++) {
        console.log(i);
        arr.push((i + 1) * n);
    }
    return arr;
}

// multiples(3, 5.0)

snail = function (arr) {
    let resArr = [];
    if (arr === [[]]) return [];
    if (arr.length === 0) {
        return;
    }

    function row1() {
        resArr.push(...arr.splice(0, 1)[0]);
    }

    function col1() {
        let row = arr.length, col = arr[0] ? arr[0].length : 0;
        for (let i = 0; i < row; i++) {
            resArr.push(arr[i].splice(col - 1, 1)[0]);
        }
    }

    function row2() {
        let row = arr.length;
        let a3 = arr.splice([row - 1], 1)[0];
        if (row > 0) {
            resArr.push(...a3.reverse());
        }
    }

    function col2() {
        let row = arr.length;
        for (let i = row - 1; i >= 0; i--) {
            resArr.push(arr[i].splice(0, 1)[0]);
        }
    }

    while (arr.length > 0) {
        row1();
        col1();
        row2();
        col2();
    }
    console.log(resArr);
    return resArr;
};

// snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);//[1, 2, 3, 6, 9, 8, 7, 4, 5]
// snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]);//[1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]
let str = 'user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor.dd=Light%20Blue';

function convertQueryToMap(query) {
    var obj = {};
    query.split('&').map(function (params) {
        var parts = params.split('=');
        if (!parts[1]) return {};
        parts[0].split('.').reduce(function (cur, next, i, arr) {
            if (!cur[next]) cur[next] = {};
            if (i === arr.length - 1) cur[next] = decodeURIComponent(parts[1]);
            return cur[next];
        }, obj);
    });
    return obj;
}


convertQueryToMap(str);

