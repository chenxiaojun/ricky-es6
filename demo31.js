// 浏览器的异步加载
// 方法一：
 // <script src="path/to/module.js" defer></script>
// 方法二:
 // <script src="path/to/module.js" async></script>

 //script标签打开 defer async属性，浏览器执行到这一行就会开始下载外部脚本，但不会等他下载和执行，而是直接执行后面但命令
 // defer 与 async区别是： 前者要等到整个页面正常渲染结束，才会执行，后者一旦下载完，渲染引擎就会中断渲染
 // defer 是渲染完再执行，多个defer脚本会顺序加载 async是下载完就执行，多个脚本不顺序加载

 // 浏览器加载ES6模块，也使用<script>标签，但是要加入type="module"属性
 // 浏览器对于带有type=module的标签，自动会异步加载，不会造成拥堵，即整个页面渲染完，再执行脚本 defer

// import * as demo from './demo32.js';
// console.log(demo.website); // http://ricky.xin
// console.log(demo.sayHello()); // Hello World

// import {website, sayHello} from './demo32.js'
// console.log(website); // http://ricky.xin
// console.log(sayHello()); // Hello World

// import demo from './demo32.js'
// console.log(demo()); // default fun

// CommonJS模块输出的是一个值的拷贝，ES6输出的是值的引用
// CommonJS模块是运行时加载，ES6是编译时输出接口

import {myName, sayName as say} from './demo32.js'
console.log(myName); // Ricky
console.log(say()); // Hi Ricky





















