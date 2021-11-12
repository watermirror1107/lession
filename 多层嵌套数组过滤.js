let p = [//原始数组
    {key: 'home'},
    {key: 'user', children: [{key: 'userDetail'}, {key: 'userEdit'}]},
    {key: 'email', children: [{key: 'sendEmail', children: [{key: 'test1'}, {key: 'test2'}]}, {key: 'deleteEmail'}]},
], condition = [//过滤目标
    {key: 'home'},
    {key: 'user', children: [{key: 'userEdit'}]},
    {key: 'email', children: [{key: 'sendEmail', children: [{key: 'test1'}]}]},
];


function isSomeKey(arr, key) {//判断是否满足条件
    return arr.some(item => {
        if (item.children) {
            return item.key === key || isSomeKey(item.children, key)
        } else {
            return item.key === key
        }
    })
}


function filterMenu(arr) {
    arr = arr.filter((item) => {//过滤掉没有在条件之内的，
        if (item.children) {//递归判断子数组是否也在条件之内
            item.children = filterMenu(item.children)
        }
        return isSomeKey(condition, item.key)
    })
    return arr
}

let x = filterMenu(p)
console.log(x)
