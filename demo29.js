class A {
    sayHi () {
        console.log('Hi');
    }
}
class B {
    sayHello () {
        console.log('Hello');
    }
}

// 情形一
// B.__proto__ = A;
// (new B).sayHi(); // sayHi is not a function

// 情形二
B.prototype.__proto__ = A.prototype;
(new B).sayHi(); // Hi
console.log((new B) instanceof A); // true

// 情形三
// B 的实例继承 A 的实例
Object.setPrototypeOf(B.prototype, A.prototype);
(new B).sayHi(); // Hi
console.log((new B) instanceof A); // true

// B的实例继承A的静态属性
Object.setPrototypeOf(B, A);

class C {}
console.log(Function.prototype); //ƒ () { [native code] }
console.log(Object.prototype);
console.log(C.__proto__ === Function.prototype); // true
console.log(C.prototype.__proto__ === Object.prototype); // true

// 原生构造函数的继承
// Boolean, Number, String, Array, Date, Function, RegExp, Error, Object
// ES5这些原生函数是无法继承的 ES5先新建子类this，再拷贝父类实例到this上，由于父类的内部属性无法获取
// ES6允许原生构造函数定义子类 ES6先新建父类this，再用子类构造函数修饰this
class MyArray extends Array {
    constructor (...args) {
        super(...args);
    }
}

let arr = new MyArray();
arr[0] = 12;
console.log(arr.length); // 1

class NewObj extends Object {
    constructor () {
        super(...arguments);
    }
}

let o = new NewObj({attr: true});
console.log(o.attr === true);

// Mixin模式的实现
// Mixin 指的是多个对象合成一个新的对象，新对象有各个组成成员的接口
const k = {
    a: 'a'
};

const l = {
    b: 'b'
};

const t = {...k, ...l};
console.log(t); //{a: "a", b: "b"}































