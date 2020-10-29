interface Bird {
    fly()

    breathe()
}

interface Fish {
    swim()

    breathe()
}

function createAnimal(): Fish | Bird {
    return
}

let pet = createAnimal();
pet.breathe();
// pet.fly()//联合类型的对象只能用两个类型公有的方法
