// 异步 简单说是一个任务不是连续完成的，可以理解成该任务被人分成两段，先执行第一段，然后执行其它任务
// JavaScript 语言对异步编程的实现，就是回调函数。所谓的回调，就是把任务的第二段单独写在一个函数里，等到重新执行这个任务的时候，就直接调用这个函数。 回调函数名字是callback

// Generator 函数协程在ES6实现，最大特点是交出函数的执行全(即暂停执行)
function* gen(x) {
    let y = yield x + 2;
    console.log(this.x, x);
    return y;
}

let g = gen(2);
console.log(g.next());
console.log('---');
console.log(g.next());

function* gen2 (x) {
    let y = yield x + 2;
    let z = yield y + 6;
    return z;
}

let g2 = gen2(1);
console.log(g2.next(4));
console.log(g2.next(2));
console.log(g2.next(6));

console.log('---===---');

var k = 12;

function f(m) {
    return m * 2;
}

console.log(f(k));

































