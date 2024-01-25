let unitArr = ['个', '十', '百', '千', '万', '十万', '百万', '千万', '亿', '十亿', '百亿', '千亿', '万亿']
let numObj = {
    0: '零',
    1: '一',
    2: '二',
    3: '三',
    4: '四',
    5: '五',
    6: '六',
    7: '七',
    8: '八',
    9: '九'
}
let giaoArr1 = ['十万', '百万', '千万'];
let giaoArr2 = ['十亿', '百亿', '千亿', '万亿']
let number = '1300122112114'
// let number = '1300022002134'
let stringArr = number.split('').reverse()
let resText = ''
for (let i = 0; i < stringArr.length; i++) {
    if (numObj[stringArr[i]] !== '零') {
        resText = numObj[stringArr[i]] + unitArr[i] + resText
    }

}
resText = resText.replaceAll('个', '')
let count1 = [];
let count2 = [];
for (const string of giaoArr1) {
    if (resText.indexOf(string) >= 0) {
        count1.push(resText.indexOf(string));
    }
}
for (const string of giaoArr2) {
    if (resText.indexOf(string) >= 0) {
        count2.push(resText.indexOf(string));
    }
}
for (const count2Element of count1) {

}
console.log(count1)
console.log(count2)
console.log(resText)
