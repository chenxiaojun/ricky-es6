let x = 1;

function f (x, y = x) {
    x++;
    console.log([x, y]);
}

document.write(x);
f(); //[NaN undefined] 形式参数如果和外层的变量同名，会重新定义一个自己的作用域，所以函数里面的x是NaN

f(2); // [3, 2]
document.write(x); // 1

m = 3;

function f2 (n = m) {
    m++;
    console.log([m, n]);
}

console.log(m); // 3 //如果形式参数没有外层这个参数名，那么这个参数就可以在函数里面直接调用或赋值
f2(); // [4, 3]
console.log(m); // 4
f2(6); // [5, 6]
