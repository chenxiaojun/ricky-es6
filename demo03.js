const PI = 3.1415;
// PI = 6  // 会报错，不能重新定义PI的值

// const 和 let命令相同，只在声明所在的块及作用域内有效
name = 'Jack';
age = 20;

{
    const name = 'Ricky';
    age = 21;
}
console.log(name); // Jack
console.log(age); //21

let c = 'cc';
console.log(window.c); //undefined

function a () {
    console.log('haha');
}
console.log(window.a); // 会显示整个function

// var和function定义的变量都属于顶层对象windows都属性，而let, const, class等定义的不属于顶层对象的属性
// 浏览器里面的顶层对象是window， Node和Web Worker没有window，Node顶层对象是global


// 全局环境中，this会返回顶层对象， 但是Node模块和ES6模块，this返回的是当前模块

console.log(this.a); // this指向的是顶层对象
function b () {
    console.log(this.name); // Jack， this指向的是顶层对象
}
b();


