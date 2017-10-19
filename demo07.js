// 标签模版语法
let a =  5;
let b = 10;
str = tag `Hello ${ a + b } world ${ a * b } !`;
// tag(['Hello ', ' world ', 15, 50])
function tag(arr, ...values) {
    let output = "";
    let i;
    for( i = 0; i < values.length; i ++ ) {
        output += arr.raw[i] + values[i];
    }
    console.log(`i = ${i}`);
    output += arr.raw[i];
    // i =0 i < 2
    // Hello 15 i = 1 i < 2
    // Hello 15 world 50 i = 2 i = 3
    return output;
}
console.log(`str = ${str}`);
