let name = 'Ricky', hobby = 'Ruby';

// 创建对象方式一
let Person = Object();
Person.name = name;
console.log(Person);

// 更简洁的方式
let Person2 = {name, hobby};
console.log(Person2);

// 简洁的if, 如果只有一条语句的话，可以不必有花括号
if (1) console.log('ok');

// == ===
console.log('undefined' == null); // false
console.log('undefined' === false); // false
console.log(null == false); // false
console.log(1 == true); // true
console.log(1 === true); // false
console.log(0 == true); // false

//Array Object
let a = Array();
let b = Object();
console.log(a, b); // [], {}

console.log(new Array, new Object());
