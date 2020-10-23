var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Greeter = /** @class */ (function () {
    function Greeter(msg) {
        this.greeting = msg;
    }
    Greeter.prototype.greet = function () {
        return 'hello,' + this.greeting;
    };
    return Greeter;
}());
var g = new Greeter('fuck');
g.greet();
var Animal = /** @class */ (function () {
    function Animal(name) {
        console.log('my name is' + name);
        this.name = name;
    }
    Animal.prototype.move = function (step) {
        if (step === void 0) { step = 0; }
        console.log('animal moved ' + step);
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.move = function () {
        _super.prototype.move.call(this, 50);
    };
    Dog.prototype.bark = function () {
        console.log('wa wa');
    };
    return Dog;
}(Animal));
var dog = new Dog('tom');
dog.move();
dog.bark();
console.log(dog.name);
var Person = /** @class */ (function () {
    function Person(name) {
        this.age = 1;
        this.name = name;
    }
    Person.prototype.tell = function () {
        console.log(this.name);
        console.log(++this.age);
    };
    return Person;
}());
var john = new Person('john');
// console.log(john.name);//private定义的属性只能在类里面使用
john.tell();
var bigAnimal = /** @class */ (function () {
    function bigAnimal(theName) {
        this.age = 100;
        console.log(this.age);
        this.name = theName;
    }
    return bigAnimal;
}());
var Rhino = /** @class */ (function (_super) {
    __extends(Rhino, _super);
    function Rhino() {
        return _super.call(this, "Rhino") || this;
    }
    Rhino.prototype.tell = function () {
        // console.log(this.name)//name是private属性必须是在父类里面使用
        // this.name='fuck'
        this.age = 1999;
        console.log(this.age); //age是protected属性可以在子类里面使用
    };
    return Rhino;
}(bigAnimal));
var Employee = /** @class */ (function () {
    function Employee(theName) {
        this.name = theName + Employee.age;
    }
    Employee.age = 3;
    return Employee;
}());
// console.log(animal1.age)
var rhino = new Rhino();
var employee = new Employee("Bob");
rhino.tell();
var animal1 = new bigAnimal("Goat");
animal1 = rhino;
// animal1 = employee; // 错误: Animal 与 Employee 不兼容.因为employee里面的age不是来自bigAnimal
//protected修饰符与private修饰符的行为很相似，但有一点不同，protected成员在派生类中仍然可以访问,前提都是在类里面访问
