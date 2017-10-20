// 扩展运算符 spread ...
console.log(...[1, 2, 3]);

let add = (x, y) => x + y;

const numbers = [4, 35];
console.log(add(...numbers));

// Array.from 方法用于将两类对象转为真正对数组
let array_like = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};
let arr = Array.from(array_like);
console.log(arr);

str = '131,132,133';
console.log(Array.of(131, 132, 133));
console.log(Array.of(...str.split(',')));

// 数组实例的find()方法 用于找出第一个符合条件的数组成员
// 它的参数是一个回调函数，所有的数组成员会依次执行，直到找出第一个返回true的成员
a = ['Jack', 'Ricky', 'Micky'];
console.log(a.find((x) => /^R.*/.test(x))); //Ricky

// fill方法使用给定的值，填充一个数组
a2 = ['a', 'b', 'c'].fill(3);
console.log(a2);

// entries() -> 对键值对的遍历, keys() -> 对键名的遍历, values() -> 对键值的遍历
for (let index of ['a', 'b'].keys()) {
    console.log('index: ', index);
}

for (let [index, elem] of ['a', 'b'].entries()) {
    console.log(index, elem);
}

// includes() 判断数组中是否包含给定的值

























