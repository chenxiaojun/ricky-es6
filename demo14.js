// ES6允许在变量中，直接写变量。 这时，属性名为变量名，属性值为变量的值。
const foo = 'bar';
const baz = {foo};
console.log(baz);

function f(x, y) {
    return {x, y};
}

console.log(f(3, 4)); // {x: 3, y: 4}


const o = {
    t () {
        return 'hello'
    }
};
console.log(o); // {t: f}
console.log(o.t()); // hello

let birth = '2000/01/01';

const Person = {
    name: 'Ricky',
    birth,
    hello () { console.log(`Hello, I am ${this.name}`) }
};

Person.hello(); // Hello, I am Ricky
console.log(Person);

// js 定义对象方法
let obj = {};
obj.foo = true;
obj['abc'] = false;
console.log(obj);

const keyA = {a: 1};
const keyB = {b: 2};

const myObj = {
    [keyA]: 'valueA',
    [keyB]: 'valueB'
};
console.log(Object.keys(myObj.valueOf(1))[0]);

// 函数的name属性返回函数名
const pi = {
    value () {
        return 3.14;
    }
}

console.log(pi.value.name); //value

// Object.assign 方法用于对象的合并
const t1 = { a: 1 };
const t2 = { b: 2 };
const t3 = { c: 3 };
Object.assign(t1, t2, t3);
console.log(t1); //第一个参数是被合并的对象， 后面的是待合并的对象, 遇到同名会被覆盖

s1 = 'ab';
s2 = 23;
s3 = false;

console.log(Object.assign({}, s1, s2, s3)); //{0: 'a', 1: 'b'}
//Object.assign 方法进行的是对象的浅拷贝
const o1 = {a: {b: 21}};
const o2 = Object.assign({}, o1);
o1.a.b = 56;
console.log(o2.a.b); //56
console.log(Object.assign([1,2,3], [4,5]));
//Object 只能进行值的复制，如果要复制一个取值函数，那么求值后再复制

//通过Object.assign可以为对象添加属性，方法，可以克隆方法，可以合并多个对象













































