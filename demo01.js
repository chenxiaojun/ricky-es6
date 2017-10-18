{
    let a = 10; //a只在这个块所在的区间有效
    var b = 1;
}

// a is not defined
// b 1

// var num = 1 是在当前作用域中申明变量，如果是方法中申明，那么是局部变量，如果是全局中这么申明，则为全局变量
// num = 1 事实上是属于对属性赋值对操作，

sum = 0;
for (let i = 0; i < 10; i++){
    sum += i
}
console.log(sum)
// console.log(i) // i is not defined


var a = [];
for (var j = 0; j < 10; j++){
    a[j] = function () {
        console.log(j);
    }
}
console.log(j); // j = 10 var定义的在全局范围内都有效
a[6]();

var t = 100
t = 111
console.log(t) // 111

// let e = 12 // e already defined

var e = 11
e = 12

// let e // e already defined

let g = 'haha'
console.log(typeof(g))


var tmp = new Date()

function f() {
    console.log(tmp);
    if (false) {
        var tmp = 'hello world';
    }
}

f(); // tmp被里层的覆盖了 不合理


function w() {
    var h = '123';
}

// console.log(h) // h is not defined
var aa = 12
var aa = 33
console.log(aa)


if (true) {
    function f1() {
        console.log('coming')
    }
}
f1();



























