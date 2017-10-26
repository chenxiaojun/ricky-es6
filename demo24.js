function* f() {
    for(let i = 0; true; i++) {
        let reset = yield i;
        if (reset) { i = -1; }
    }
}

let g = f();
console.log(g.next());
console.log(g.next());

// for...of循环可以自动遍历Generator函数生成的Iterator对象

function* f2 () {
    yield 1;
    yield 2;
    yield 3;
    return 4;
}

// 一旦next方法方法返回对象的done属性为true，for...of循环就会中止
for (let v of f2()) {
    console.log(v); // 1, 2, 3
}

// 斐波那契数列
function* fibonacci () {
    let [prev, curr] = [0, 1];
    console.log('haha');
    for (;;) {
        console.log('hehe');
        [prev, curr] = [curr, prev + curr];
        yield curr;
    }
}

for (let n of fibonacci()) {
    if (n > 1000) break;
    // console.log(n);
}

// 利用for...of循环，可以遍历任意对象(object)的方法
let jane = { first: 'Jane', last: 'Doe' };

function* iter () {
    let keys = Object.keys(this);
    for (let k of keys) {
        yield [k, this[k]];
    }
}

// for(let v of iter(jane)) {
//     console.log(v);
// }
jane[Symbol.iterator] = iter;
for (let [k, v] of jane) {
    console.log(`${k}: ${v}`);
}


function* numbers () {
    yield 1;
    yield 2;
    return 3;
}

console.log(...numbers());
console.log(Array.from(numbers()));
let [x, y] = numbers();
console.log(x, y);

// Generator函数返回的遍历器对象，都有一个throw方法
// 可以在函数体外抛出错误，然后Generator函数体内捕获
var gg = function* () {
    try {
        yield;
    } catch (e) {
        console.log('内部捕获', e);
    }
};

var i = gg();
console.log(i.next());

try {
    i.throw('a');
    i.throw('b');
} catch (e) {
    console.log('外部捕获', e);
}



















