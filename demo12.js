function add(a, b){
    console.log(a+b);
}

function sub(a, b){
    console.log(a-b);
}

add.call(sub, 4, 2);

//-------

let x = '我是全局变量';

function f1 () {
    this.x = '我是f1中申明的';
}

function f2() {
    console.log(this.x);
}

f2(); // undefined
f2.call(new f1()); // 我是f1中申明的

//setInterval() 间隔一定时间 调用一下里面的
function Timer () {
    this.s1 = 0;
    this.s2 = 0;

    setInterval(() => this.s1++, 1000); // 箭头函数定义,this指向定义时所在作用域,即Timer

    setInterval(function () {  // 普通函数定义 this指向运行时所在作用域
        this.s2++; // 运行时，这里的this是window
    }, 1000);
}

var timer = new Timer();
s2 = 3;
setTimeout(() => console.log('s1: ', timer.s1), 2100); // 2
setTimeout(() => console.log('s2: ', timer.s2), 2100); // 0
setTimeout("alert(s2)", 4000); //7
