let s = "I am Ricky";
let s2 = "𠮷𠮷";

function codePointLength(string) {
    let result = string.match(/[\s\S]/gu);
    return result ? result.length : 0;
}

console.log(s.length);
console.log(codePointLength(s));

console.log(s2.length);
console.log(codePointLength(s2));

let s3 = '__aa__aa__';
console.log(/a+/g.exec(s3));
console.log(/a+/y.exec(s3));  //y 也是全局匹配，但每次都必须从头部开始匹配

// 字符串分割函数
let s4 = "I am Ricky";
document.write(s4.split(" ")); // I,am,Ricky
document.write("<hr>");
document.write(["I", "am", "Ricky"].join(" ")); // I am Ricky

console.log(Number.parseInt('12.23'));













