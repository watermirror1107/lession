let attrs = [
    {name: 'name', values: ['张三', '李四', '王五', '赵六']},
    {name: 'age', values: ['12', '18']},
    {name: 'sex', values: ['male', 'female']},
    {name: 'height', values: ['180', '190', '200', '210', '220']},
    {name: 'weight', values: ['100', '110', '120']}
]

function mergeArr(originArr, key, addArr) {
    let result = []
    if (originArr.length === 0) {
        return addArr.map(i => {
            let obj = {}
            obj[key] = i;
            return obj
        })
    } else {
        for (const originArrItem of originArr) {
            for (const addArrItem of addArr) {
                originArrItem[key] = addArrItem
                let obj = JSON.parse(JSON.stringify(originArrItem))
                result.push(obj)
            }
        }
    }
    return result
}

let res = []
for (const attr of attrs) {
    res = mergeArr(res, attr.name, attr.values)
}
console.log(res)
