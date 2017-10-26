// ES6 模块设计思想，是尽量的静态化，使得编译时就能确定模块的依赖关系
// ES6 模块不是对象，而是通过export命令显示指定输出的代码，再通过import命令输入

// 这段代码表示从fs加载3个方法，其它方法不加载。 这种加载称为编译时加载
// import { stat, exists, readFile } from 'fs'

// 严格模式：
  // 变量必须先声明后使用
  // 函数的参数不能有同名属性，否则报错
  // ES6模块之中，顶层的this指向的是undefined，即不应该在顶层代码使用this

// 模块主要功能由两个命令构成： export 和 import
// export规定模块对外的接口， import命令用于输入其它模块提供的功能
// 一个模块就是一个独立的文件，该文件内部的所有变量，外部都无法获取
// 如果希望外部可以获取，就要使用export关键字

// 写法一：
export var firstName = 'Michael';
export var lastName = 'Jackson';
export var year = 2001;

// 写法二 推荐写法
var city = 'China';
var time = '9:06';
export {city, time};

// export除了可以输出变量，还可以输出函数或者类
export function add(x, y) {
    return x + y;
}

// 通常情况export输出的变量就是本来的名字，但是可以使用关键字as来重命名
function v1 () {}
function v2 () {}

export {
    v1 as alias_v1,
    v2 as alias_v2
};

// export 命令可以出现在模块的任何位置，只要处于模块顶层就可以
// 如果处于块级作用域内，就会报错，下一节的import命令也是如此

// import 命令，用于加载demo30.js文件，并从中输入变量
// import命令接受一对大括号，里面指定要从其它模块导入的变量名
// 如果想重新命名，需要使用as关键字
import {firstName, lastName, year} from './demo30'
function setName (element) {
    element.textContent = firstName + ' ' + lastName
}

//
import { lastName as surname } from './demo30'

// import 后面的from指定模块文件的位置，可以是相对路径，也可以是绝对路径, .js可以省略
// 如果只是模块名，不带有路径，那么必须有配置文件，告知JavaScript引擎模块的位置
// import 命令有提升效果，会提升到整个模块的头部，首先执行
// import 由于是静态执行，所以不能使用表达式和变量，这些只有在运行时才可以得到结果
// 如果多次重复执行一句import语句，那么只会执行一次,而不会执行多次

// 整体加载的方法
import * as demo from './demo30'
console.log(demo.firstName);

// export default命令
// 使用import命令的时候，用户需要知道所要加载的变量名或函数名，否则无法加载
// 为了给用户提供方便，让他们不用阅读文档就可以加载模块，就要用到

// 比如export-default.js
export default function () {
    console.log('default');
}

// main.js
import anyName from './export-default' // 这里可以任意给名字
anyName();

// 如果在同一个文件中，export和import可以结合在一起，写成一行
export {firstName} from './demo30'
// =>等价于
    // import {firstName} from './demo30'
    // export {firstName}

// 模块之间也可以继承
// 假设有一个circleplus模块 继承circle模块
export * from 'circle';
export var e = 2.16;
export default function (x) {
    return Math.exp(x);
}

// 跨模块常量，有时候，我们想定义的变量在多个模块共享
// constant.js 模块
export const A = 1;

// test1.js 模块
import * as constants from './constant'
console.log(constants.A);

// test2.js 模块
import {A} from './constants'
console.log(A);

// 上面的方法不好
// 可以考虑新建一个constants目录，然后下面建立很多的js文件，然后在index.js里面引入这些js文件
// 后面别的文件需要的时候，只需要import index.js就可以了























































