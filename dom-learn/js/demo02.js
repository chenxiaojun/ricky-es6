// DOM, D(document), O(object), M(Model)
// JS对象分三种类型，用户自定义对象，内建对象，宿主对象
// window对象对应着浏览器窗口本身，这个对象的属性和方法通常统称为BOM

// getElementById 返回的是一个object
// getElementByTagName 返回的是一个数组
console.log('coming');
let a = document.getElementById('purchase');
let b = document.getElementsByTagName('li');

for (let i of b) {
    console.log(i.innerHTML)
}

// 可以传入通配符，获取文档中的所有标签
let c = document.getElementsByTagName('*');
console.log(c);

// 还可以将这两个方法结合起来使用
let d = a.getElementsByTagName("*");
console.log(d);

for (let i = 0; i < d.length; i++) {
    console.log(d[i].className); // className 获取类选择器名字
}
// js使用indexOf来检测某个字符串是否包含有子字符串， 使用方法:  字符串1.indexOf(字符串2)，如果返回-1则不包括，返回1表示包括
console.log('-------');

// getElementsByClassName 这个方法让我们可以通过class属性中的类名访问元素，它和tagName类似，接受一个参数，返回数组
let e = document.getElementsByClassName('sale');
console.log(e);

// getElementsByClassName 还可以查找那些带有多个类名的元素， 要指定多个类名
let f = document.getElementsByClassName('important sale');
console.log(f);




























