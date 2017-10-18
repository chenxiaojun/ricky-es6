let a = '*';
// 查看a对应的十进制编码 以及 16进制编码
console.log(a.charCodeAt(0)); //42
console.log(a.codePointAt(0)); //42

console.log(a.charCodeAt(0).toString(16)); // 2a
console.log(a.codePointAt(0).toString(16)); // 2a
console.log(String.fromCodePoint(0x2a)); //2a

// 输出 *
console.log("\u{2a}"); // *   \u 后面跟16进制编码
console.log("\u002a"); // *   \u 后面跟16进制编码
console.log("\x2A"); // *   \u 后面跟16进制编码

for ( let code of 'foa') {
    console.log(code);
} // 对字符串进行遍历

// includes, startsWith, endsWith
let s = 'Hello, I am Ricky';

console.log(s.startsWith('H')); // true
console.log(s.endsWith('yy')); // false
console.log(s.includes('Ricky')); // true

// repeat 可以用来复制变量
// padStart padEnd字符串补全长度的函数

