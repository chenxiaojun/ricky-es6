function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.toString = function () {
    return '(' + this.x + ', ' + this.y + ')';
};

let p = new Point(1, 2);
console.log(p); // Point{x: 1, y: 2}

// 类的私有方法
class Widget {
    // 共有方法
    foo (baz) {
        this._bar(baz);
    }

    //私有方法
    _bar (baz) { // 这里虽然 _变量名形式指定它是私有方法，但是这种依然可以被外界直接调用到，所以不好
        console.log(baz);
    }
}

let widget = new Widget();
widget.foo('Hello');
widget._bar('World');

// 把方法放到类的外面，实现类的私有方法
class Test {
    go (arg) {
        console.log(this);
        went.call(this, arg); // 动态改变作用域this
    }
}

function went(arg) {
    this.name = 'Ricky';
    console.log(arg);
}

let t = new Test();
t.go('gogo'); // gogo
console.log(t.name); // Ricky

// 利用Symbol的唯一性，将私有方法名字命名为一个Symbol值
const bar = Symbol('bar');
const sna = Symbol('sna');

class myClass {
    // 共有方法
    foo (baz) {
        console.log(this[bar]);
        this[bar](baz);
    }

    // 私有方法
    // 因为Symbol的唯一性，外面无法调用到
    [bar](baz) {
        console.log('in');
        return this.sna = baz;
    }
}

myclass = new myClass();
myclass.foo('haha');
console.log(myclass.sna); // haha

// Class的取值函数get 和 set
class Demo {
    constructor () {
        this.name = 'Ricky';
    }

    get getHobby () {
        return this.hobby;
    }

    set setHobby (hobby) {
        this.hobby = hobby;
    }
}

let demo = new Demo();
demo.setHobby = 'Ruby';
console.log(demo.getHobby); // Ruby

class Foo {
    constructor (...args) {
        this.args = args;
    }

    * [Symbol.iterator] () {
        for (let arg of this.args) {
            yield arg;
        }
    }
}

for (let x of new Foo('hello', 'world')) {
    console.log(x);
}

// 类相当于实例的原型，所有在类中定义的方法，都会被实例继承
// 如果在一个方法前加上static，就表示该方法不会被继承，而是通过类直接调用
// static标记的是类方法，static方法里面的this指向的是该类，不是实例
class Geek {
    static sayHi () {
        return 'Hi, Ricky';
    }
}

console.log(Geek.sayHi());

// 父类的静态方法，可以被子类继承
class Father {
    constructor () {
        this.name = 'Ricky';
    }

    static teach () {
        console.log('Chinese');
    }
}

class Son extends Father {}

Son.teach(); // Chinese
console.log(new Son().name); // Ricky

// Class内部只有静态方法，没有静态属性
class Gift {
    // myProp = 42; // ES6不支持的写法
    // 定义实例属性 目前只能写在constructor里面
}



























