var nearestPalindromic = function (n) {
    let length = n.length
    let isEven = length % 2 == 0
    let pre = ''
    let next = ''
    let mid = ''
    if (isEven) {
        pre = n.slice(0, length / 2).split('')
        next = n.slice(length / 2).split('').reverse()
    } else {
        pre = n.slice(0, (length - 1) / 2).split('')
        next = n.slice((length + 1) / 2).split('').reverse()
        mid = n[(length - 1) / 2]
    }
    let res = []
    for (let i = 0; i < pre.length; i++) {
        let nN = Number(n[i])
        let disP = Math.abs(nN - Number(pre[i]))
        let disN = Math.abs(nN - Number(next[i]))
        if (disP < disN) {//取小的
            res.push(pre[i])
        } else if (disP > disN) {
            res.push(next[i])
        } else {
            res.push(pre[i])
        }
    }
    let str = ''
    if (mid !== '') {
        str = res.join('') + mid + res.reverse().join('')
    } else {
        str = res.join('') + res.reverse().join('')
    }
    if (str === n) {
        if (mid !== '') {//奇数相同的时候
            let pM = Number(mid) - 1//中位前面的数
            let nM = Number(mid) + 1//中位后面的数
            mid = Math.min(pM, nM)
            return res.join('') + mid + res.reverse().join('')
        } else {

        }
    } else {
        return str
    }
}

// console.log(nearestPalindromic('1'));
console.log(nearestPalindromic('10'));
// console.log(nearestPalindromic('123'));
// console.log(nearestPalindromic('1234567'));
