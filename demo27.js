// 定义类
// 定义类的方法，前面不需要加function关键字，直接把函数定义放进去就可以，方法之间也不需要逗号，加了会报错
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString () {
        return '(' + this.x + ', ' + this.y + ')';
    }

    sayHello () {
        return 'Hello World';
    }
}
console.log(typeof Point); // function ES6的类实质上是函数的另一种写法
console.log(Point === Point.prototype.constructor); // true ES6 类名本质上就是构造方法的原型


let p = new Point();
console.log(p.sayHello()); // Hello World 使用的时候 直接对类使用new关键字

// 本质上类的所有方法都定义在prototype上
console.log(Point.prototype);

// Object.assign 可以一次性方便的向类添加多个方法
Object.assign(Point.prototype, {
    toValue () {},
    sayHi () {}
});
console.log(Point.prototype);
// ES5 和 ES6差异： ES5中toString是可枚举的 ES6相反
console.log(Object.keys(Point.prototype)); //["toValue", "sayHi"]

// 类和模块的内部，默认是严格模式，所以不需要使用use strict

// constructor方法是类的默认方法, 通过new命令生成对象实例时，自动调用该方法
// 一个类必须有一个constructor方法，如果没有显示调用，那么默认会是空的方法
class Test {}
// 等价于 class Test { constructor(){} }
class Test2 {
    constructor () {
        return Object.create(null);
    }
}

console.log(new Test() instanceof Test); // true
console.log(new Test2() instanceof Test2); // false 改变返回的对象
// 实例的属性除非显示定义在其本身，否则都定义在原型上(即定义在class上)

class Demo {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }

    toString () {
        return 'I am in Demo';
    }
}

let demo = new Demo(3, 4);

console.log(demo.hasOwnProperty('x')); // true
console.log(demo.hasOwnProperty('y')); // true
console.log(demo.hasOwnProperty('toString')); //false
console.log(demo.__proto__.hasOwnProperty('toString')); //true
console.log(demo.__proto__);
console.log(Demo.prototype === demo.__proto__); // true
// 类的所有实例共享一个原型对象
console.log(new Demo(4, 6).__proto__ === demo.__proto__); // true

// 表达式形式定义类
const MyClass = class Me {
    getClassName () {
        return Me.name
    }
};
console.log(new MyClass().getClassName()); // Me Me并不是类的名字，类的名字是MyClass Me只在类的内部可以这样使用
//如果类的内部没有使用到这个名字，可以省略不写
const MyClass2 = class {};

// 采用Class表达式，可以写出立即执行的class
// person是一个立即执行的类
let person = new class {
    constructor (name) {
        this.name = name;
    }

    sayName () {
        console.log(this.name);
    }

    sayHi () {
        console.log(`Hi, ${this.name}`);
    }
}('Ricky');

person.sayName(); // Ricky
person.sayHi(); // Hi, Ricky

// 类不存在变量提升
