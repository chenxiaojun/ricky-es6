// Class 可以通过extends关键字实现继承， 这比ES5通过修改原型链实现继承，要清晰和方便
class Point {}
class ColorPoint extends Point{
    constructor (x, y, color) {
        super(x, y);
        console.log(this); // ColorPoint
        this.color = color;
    }

    toString () {
        return this.color + '' + super.toString();
    }
}
// 子类必须在constructor中调用super方法，否则新建实例会报错
// 因为子类没有自己的this对象，而是继承父类的this，然后对其加工
// 如果不调用super 子类就得不到自己的this对象
let color_point = new ColorPoint(2, 3, 'red');

// ES5继承实质： 先创造子类的实例对象this，然后将父类的方法添加到this上面 Parent.apply(this)
// ES6继承实质： 先创造父类的实例对象this，所以必须先调用super，然后再用子类构造函数修改this

console.log(color_point instanceof ColorPoint); // true
console.log(color_point instanceof Point); // true
console.log(color_point.toString());
// 父类的静态方法也会被子类继承
// Object.getPrototypeOf() 可以用来从子类上获取父类
console.log(Object.getPrototypeOf(ColorPoint) === Point); // true

// ES6 表示子类的构造函数必须执行一次super函数
class A {}
class B extends A {
    constructor () {
        super(); // 相当于 A.prototype.constructor.call(this)
                 // 所以super() 代表的是A的构造函数，但是返回的其实是B的实例
        console.log('coming');
    }
}
console.log((new B).toString());
// 作为函数，super()只能用在构造器中

// super指向的是父类的原型对象，而类的原型对象里面只有方法，所以子类无法通过super获取父类的属性
class C {
    constructor () {
        this.name = 'Ricky';
    }

    sayName () {
        return this.name;
    }
}

class D extends C {
    // get name () {
    //     return super.name;// error
    // }
}

// console.log((new D).name);
console.log((new D).sayName()); // Ricky


// 类的prototype属性 和 __proto__ 属性
class E {}
class F extends E {}
console.log(F.__proto__ === E); // true
console.log(F.prototype.__proto__ === E.prototype); // true
// 子类的__proto__属性，表示构造函数的继承，总是指向父类
console.log(F.__proto__); // class E {}
console.log(E.__proto__); // ƒ () { [native code] }
console.log(F.prototype); // E {constructor: ƒ}
console.log(E.prototype); // {constructor: ƒ}
console.log(F.prototype.__proto__); // {constructor: ƒ}
// 子类的prototype属性的__proto__属性，表示方法的继承，总是指向父类的prototype

console.log(Array.prototype);
console.log(Array.prototype.__proto__);
console.log(Array.__proto__);
// prototype 打印的是当前类的所有原型属性和方法
// __proto__ 可以打印继承的父类是谁
// 而prototype.__proto__ 得到的继承的父类里面的原型属性和方法





























