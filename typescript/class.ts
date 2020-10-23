class Greeter {
    greeting: string

    constructor(msg: string) {
        this.greeting = msg;
    }

    greet() {
        return 'hello,' + this.greeting;
    }
}

let g = new Greeter('fuck');
g.greet()

class Animal {
    name: string

    constructor(name: string) {
        console.log('my name is' + name)
        this.name = name
    }

    move(step: number = 0) {
        console.log('animal moved ' + step)
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }

    move() {
        super.move(50)
    }

    bark() {
        console.log('wa wa')
    }
}

const dog = new Dog('tom');
dog.move();
dog.bark();
console.log(dog.name)

class Person {
    private name: string
    protected age: number

    constructor(name: string) {
        this.age = 1;
        this.name = name;
    }

    tell() {
        console.log(this.name)
        console.log(++this.age)
    }
}

let john = new Person('john');
// console.log(john.name);//private定义的属性只能在类里面使用
john.tell()

class bigAnimal {
    private name: string;
    protected age: number//类似于一个只能在类里面访问的实例属性，每个实例的值都是独立的

    constructor(theName: string) {
        this.age = 100;
        console.log(this.age)
        this.name = theName;
    }
}

class Rhino extends bigAnimal {
    constructor() {
        super("Rhino");
    }

    tell() {
        // console.log(this.name)//name是private属性必须是在父类里面使用
        // this.name='fuck'
        this.age = 1999
        console.log(this.age)//age是protected属性可以在子类里面使用
    }
}

class Employee {
    private name: string;
    static age = 3;

    constructor(theName: string) {
        console.log(Employee.age)
        this.name = theName + Employee.age;
    }
}


let rhino = new Rhino();
let employee = new Employee("Bob");
rhino.tell()
let animal1 = new bigAnimal("Goat");
animal1 = rhino;
// animal1 = employee; // 错误: Animal 与 Employee 不兼容.因为employee里面的age不是来自bigAnimal

//protected修饰符与private修饰符的行为很相似，但有一点不同，protected成员在派生类中仍然可以访问,前提都是在类里面访问

let TestType: typeof Employee = Employee;
TestType.age = 4;//可以通过这样来修改静态属性;
let nTestType: Employee = new TestType('giao');

