let test = 'sssss';

function replaceOne(str, index, wStr) {
    let m = str;
    return m.substring(0, index) + wStr + m.substring(index + 1, str.length)
}

let r = replaceOne(test, 4, 'x')
console.log(r)
