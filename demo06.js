$('.ad').append(`
    I am <b>Ricky</b>, Today is ${current_date()},
    I love Ruby!
`);

// 模板字符串是增强版的字符串， 用反引号(`)标识。 它可以当做普通字符串使用，也可以用来定义多行字符串，或者在里面定义变量

str = `'\n' is a 
                line-feed.`; // 空格和换行会被忽视

console.log(str);

let name = "Ricky", hobby = "Ruby";

console.log(`Hello ${name}, Do you love ${hobby}`);

function current_date(){
    date = new Date();
    return date.toLocaleDateString();
}

$('.ad2').html(`
<ul>
    <li>first</li>
    <li>second</li>
</ul>
`); // 不适用trim()所有的模板字符串的空格和换行都是保留的，如果不想要，可以使用trim去掉


const tmp1 = addrs => `
    <table>
    ${addrs.map(addr => `
        <tr><td>${addr.first}</td></tr>
        <tr><td>${addr.last}</td></tr>
    `).join('')}
    </table>
`;

let data = [
    { first: '<Jane>', last: 'Bond' },
    { first: 'Lars', last: '<Croft>' },
];

console.log(tmp1(data));

let c = 5;
let d = 6;

tag `Hello ${ c + d } ${ d - c } world ${ c * d }`;

function tag(a1, a2, a3, a4) {
    console.log(a1);  // ['Hello ', ' world ', '' ]
    console.log(a2);  // 11
    console.log(a3);  // 1
    console.log(a4);  // 30
}

let total = 30;
let msg = passthru`The total is ${total} (${total*1.05}) with tax`;

function passthru(literals) {
    let result = '';
    let i = 0;

    while (i < literals.length) {
        result += literals[i++];
        if (i < arguments.length) {
            result += arguments[i];
        }
    }

    return result;
}

console.log(msg);




























