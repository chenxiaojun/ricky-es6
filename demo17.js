// Set 类型
const a = new Set();
[2, 3, 4, 4, 6].forEach(x => a.add(x));

console.log(a); //Set(4) { 2, 3, 4, 6 } // 自动去重

const set = new Set([1, 3, 5, 4, 3]);
console.log(...set); // 1, 3, 5, 4

// 可以使用set对数组去重
arr = [3, 4, 2, 4, 3];
console.log([...new Set(arr)]);

console.log(set.size);
console.log(set.has(4));
console.log(set.delete(1));
console.log(set);

// Array.from 可以将set转化为数组
console.log(Array.from(set));

// 遍历
source = new Set(['Ruby', 'PHP', 'Js', 'Ruby']);
console.log(source);

for (let v of source) {
    console.log(v);
}

for (let k of source.entries()) {
    console.log(k);
}

[...source].map(x => console.log('|', x, '|'));
console.log([...source].filter(x => /R.*/.test(x)));