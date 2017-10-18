let [a, b, c] = [1, 2, 3];
console.log(b);

// 只要等号两边的模式相同，就可以实现赋值
let [x, y, ...z] = [2, 5, 2, 1, 4];
console.log(z);

let [e, f] = [2, 5];
console.log(e + '|' + f);  // 2 | 5
[e, f] = [f, e];
console.log(e + '|' + f);  // 5 | 2


function* g() {
    let a = 0;
    let b = 1;
    while (true) {
        yield a;
        console.log('(' + a + ')');
        [a, b] = [b, a + b]
    }
}
// return 0; a = 1, b = 1
// return 1; a = 1, b = 2
// return 1; a = 2, b = 3
// return 2; a = 3, b = 5
// return 3; a = 5, b = 8
// return 5; a = 8, b = 13
// return 8; a = 13, b = 21

let [first, second, third, fourth, fifth, sixth, seventh] = g();
console.log(seventh); //5

let { foo: baz } = { foo: 'aaa', bar: 'bbb' }
console.log(baz);  // 这里的foo是匹配模式， baz是变量名， 所以foo = undefined

let k = 23;
function l() {
    console.log(k);
}
l(); // 23

function h() {
    console.log(k); // undefined
    var k = 90;
    console.log(k); // 90
}
h();
console.log(k); // 23

let {toString: s} = 123
// s ?
// 上面是一个解构赋值语句， 根据左边，找出右边所属的对象的toString方法，应该是 Number对象的这个方法
console.log(s === Number.prototype.toString); //true

[(y)] = ['hhh'];
console.log(y);

let [yy] = ['yy']; // 这里是申明语句，里面yy不能加圆括号
console.log(yy);

let jsonData = {
  id: 1,
  status: 'ok'
};

let { status, id } = jsonData

console.log(id) // 1
console.log(status) // ok


let test = new Map();
test.set('first', 'name');
test.set('second', 'age');

for(let [k, v] of test) {
    console.log(k + ' is ' + v)
}



































































