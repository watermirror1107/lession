class TestClass {
    static standardGreeting = 'hello,here';
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    greet() {
        if (this.greeting) {
            return 'Hellow,' + this.greeting
        } else {
            return TestClass.standardGreeting
        }
    }
}