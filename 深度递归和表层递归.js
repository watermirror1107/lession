const tom = {
    name: 'giao',
    sex: 'male',
    dress: {
        clothes: {
            color: 'red',
            style: 'short'
        },
        shoes: 'blue'
    },
    age: '19'
}

function depWalker(obj) {
    for (const key in obj) {
        if (obj[key] instanceof Object) {
            console.log(key)
            depWalker(obj[key])
        } else {
            console.log(key)
        }
    }
}

// depWalker(tom)
function shallowWalker(obj) {
    let newObj = null
    for (const key in obj) {
        if (obj[key] instanceof Object) {
            newObj = obj[key]
        }
    }
    if (newObj) {
        shallowWalker(newObj)
    }
}

// shallowWalker(tom)

