// ...args 用于获取函数多余的变量
function add(...values) {
    console.log(arguments);
    let sum = 0;

    for (let val of values) {
        sum += val;
    }

    return sum;
}

console.log(add(6, 5, 3));

// 箭头函数
f1 = v => v;

// 等价于下面
function f2 (v) {
    return v;
}

console.log(f1(7));
console.log(f2(7));


f3 = () => 5;
// function () { return 5; }
console.log(f3());

setTimeout("document.write('我将在2秒后执行')", 2000); //setTimeout设定一个执行时间, 在该时间到的适合执行第一个参数里面的函数

// 函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象
function foo() {
    setTimeout(() => {
        console.log('id:', this.id);
    }, 100);
}

let id = 23;
foo.call({ id: 42 });

// 箭头函数可以绑定this对象，大大减少了显示绑定this对象的写法























