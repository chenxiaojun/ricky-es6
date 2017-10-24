// Iterator 和 for...of循环
// JavaScript 原有的表示"集合"的数据结构，主要是Array和Object, ES6又新增了Map和Set

// 遍历器是这样一种机制，它为各种不同的数据结构提供统一的访问机制。任何结构只要部署Iterator接口，就可以完成遍历

// 作用： 1 为各种数据结构，提供统一的，简便的访问接口; 二是使得数据结构的成员能够按某种次序排列; 三是ES6创造了一种新的遍历命令for...of

var it = makeIterator(['a', 'b']);
console.log(it.next());
console.log(it.next());
console.log(it.next());

function makeIterator(array) {
    let nextIndex = 0;
    return {
        next: function() {
            return nextIndex < array.length ?
                { value: array[nextIndex++], done: false } :
                { value: undefined, done: true };
        }
    };
}

console.log('---');

// Iterator接口的关系
let myIterable = {};
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};
console.log([...myIterable]);

// 任何数据结构只要部署Iterable接口，就可以完成遍历操作
// Iterator接口的目的，就是为所有数据结构，提供统一的访问机制，即for...of循环
// 一种数据结构只要部署了Iterator接口，这种数据结构就是可遍历的
// 默认的Iterator接口部署在数据结构的Symbol.iterator属性，一个接口只要有iterator属性，就是可遍历的
// Symbol.iterator是一个预定义好的，类型为Symbol的特殊值，所以要放在方括号内
const obj = {
    [Symbol.iterator] : function () {
        return {
            next: function () {
                return {
                    value: 1,
                    done: true
                }
            }
        }
    }
};
console.log('-', obj[Symbol.iterator]().next());
// 因为obj具有Symbol.iterable属性，所以它是可遍历的
// 执行该方法，会返回一个遍历器对象，对象本身就有next方法
// 原生具备Iterator接口的数据结构有Array, Map, Set, String, TypedArray, 函数参数, NodeList对象
let arr = ['a', 'b', 'c'];
let iter = arr[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

// someString
let str = 'hi';
let iter2 = str[Symbol.iterator]();
console.log(iter2.next());
console.log(iter2.next());

for (let i of str) {
    console.log(i);
}

for(let i in str) {
    console.log(i);
}























