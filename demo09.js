function log(x, y = 'World') {
    console.log(x, y);
}

log('Hello');
log('Hello', 'Ricky');

let i = 100;

function f(p = i * 20) {
    console.log(p);
}

f(); // 2000

i = 155; // 可以将作用域变量传入到形参里
f(); // 3100

function m1({x = 0, y = 0} = {}) {
    return [x, y];
}

function m2({x, y} = { x: 0, y: 0 }){
    return [x, y];
}

console.log(m1());
console.log(m2());
console.log(m1({x: 3}));
console.log(m2({x: 3}));