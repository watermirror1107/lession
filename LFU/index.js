class LFUCache {
    cache = {}//{key:{size:'100',file:'a.text'}}
    frequency = {}
    capacity = 104857600 //单位b 默认100MB 也可以根据长度来判断是否还可以继续存储
    constructor(capacity) {
        if (capacity) this.capacity = capacity;
    }

    get calculateSize() {
        return Object.values(this.cache).reduce((p, c) => {
            return p + c.size
        }, 0)
    }

    activeCache(key) {
        this.frequency[key]++
    }

    putCache(item) {//item格式只能是{key:{size:1,file:''}}，可以多个,格式先不做校验
        Object.keys(item).forEach(key => {
            if (JSON.stringify(this.cache[key]) !== JSON.stringify(item[key])) {//存在或不存在的情况下对比是否不同,稍微简单对比，深度对比可以用lodash的equal
                this.setCache(key, item[key])
            }
        })
    }

    setCache(key, dataObj) {
        // 计算单个大小是否超出，单个太大的不处理
        if (this.capacity < dataObj.size) {
            return
        }
        if (this.calculateSize + dataObj.size > this.capacity) {
            //超出删除使用最少的数据 ,使用次数都是最低次数的全删了
            //先循环计算出使用次数最少是几次，
            //再循环删除使用次数是最低次数的数据
            //循环了2次
            let deleteKey = [];
            let min = 0;
            Object.values(this.frequency).forEach(num => {
                if (num < min) {
                    min = num
                }
            })
            Object.keys(this.frequency).forEach(dataKey => {
                if (this.frequency[dataKey] === min) {
                    deleteKey.push(dataKey)
                }
            })
            for (const deleteKeyElement of deleteKey) {
                delete this.frequency[deleteKeyElement]
                delete this.cache[deleteKeyElement]
            }
        }
        //判断缓存是否已经有,有了使用次数叠加
        if (this.cache[key]) {
            this.activeCache(key)
        } else {
            this.frequency[key] = 0
        }
        this.cache = Object.assign(this.cache, {[key]: dataObj})
    }

    getCache(key) {
        if (this.cache[key]) {
            this.activeCache(key)
            return this.cache[key]
        }
        return undefined
    }
}

let oss = new LFUCache(1000)
oss.putCache({a: {size: 200, file: 'a'}})
oss.putCache({b: {size: 300, file: 'b'}, c: {size: 500, file: 'c'}})
console.log(oss.cache)
console.log(oss.getCache('a'));
console.log(oss.frequency)
oss.putCache({d: {size: 100, file: 'd'}, b: {size: 510, file: 'cc'}})
console.log(oss.frequency)
console.log(oss.cache)
console.log(oss.getCache('a'));
console.log(oss.getCache('d'));
console.log(oss.frequency)
