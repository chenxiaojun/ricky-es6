// Map类型
// JavaScript 的对象，本质是键值对的集合(Hash结构)
// ES6 Map数据结构，它类似对象，也是键值对集合，但是键不局限于字符串，各种类型都可以
const m = new Map();
const o = { p: 'Hello World' };

m.set(o, 'content');
console.log(m.get(o)); //content
console.log(m.has(o)); //true
m.delete(o);
console.log(m.has(o)); //false

// Map 可以接受数组参数
const n = new Map([
    ['name', 'Ricky'],
    ['age', '20']
]);

console.log(n);
console.log(n.size); // 2
console.log(n.has('name')); // true
console.log('----');
n.forEach((v, k) => console.log(k, '=>' ,v));

[1, 2, 3].forEach((v, k) => console.log(`${k} => ${v}`)); // forEach 键值是反过来的
[1, 2, 3].forEach(v => console.log(v)); // forEach 键值是反过来的

const k = new Map();
k.set(1, 'aa').set(1, 'bb'); // 1 bb 覆盖
console.log(k);

// Map的键实际上是跟内存地址绑定在一块的, 只要内存地址不同，就视为两个键
