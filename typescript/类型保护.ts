//类型维持
function isFish(pet: Fish | Bird): pet is Fish {//返回判断是不是fish的布尔值
    return (pet as Fish).swim !== undefined
}
