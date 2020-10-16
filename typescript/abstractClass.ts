abstract class Department {//抽象类不能直接实例化
    name: string

    constructor(name: string) {
        this.name = name;
    }

    printName(): void {
        console.log('deparment name ' + this.name)
    }

    abstract printMeeting(): void//抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
}

class AccountingDepartment extends Department {//抽象类的子类可以被实例化
    constructor() {
        super('Accounting');
    }

    printMeeting(): void {
        console.log('meeting at 7:00am')
    }

    createReport() {
        console.log('create Report')
    }
}

let department: Department;
department == new Department()// 错误: 不能创建一个抽象类的实例
department == new AccountingDepartment()
department.printMeeting();
department.printName();
department.createReport();// 错误: 方法在声明的抽象类中不存在