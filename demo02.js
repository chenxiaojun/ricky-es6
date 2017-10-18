function f1() { console.log('f1') }

f1();

(function () {
    console.log('aaa');
}());

{
    let a = 'secret'
    function f2() {
        return a;
    }
}

console.log(f2());

function f2(a) { console.log(a); } // 这个会找不到

f2('abc'); //没有输出

console.log('+++' + f2('abc')); //+++secret


function f3() { console.log('f3'); }
function f3() { console.log('new f3'); }
function f3(a, b){ console.log('a + b') } // 会覆盖前面的所有方法  js没有函数重载的概念

f3();  // a + b
f3(3, 4); // a + b

{
    function f4() { console.log('f4'); }
}

function f4() { console.log('new f4'); } // 不能覆盖前面的方法

f4();