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
