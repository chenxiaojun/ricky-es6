// Promise 是异步编程的一种解决方案
// (1) 对象状态不受外界影响。 Promise对象代表一个异步操作，有三种状态pending, fulfilled, rejected
// (2) 一旦状态改变，就不会再变，任何时候都可以得到这个结果
// (3) 所谓的promise简单说是一个容器，里面存着某个未来才会结束的事件
// (4) Promise本身就是一个构造函数，它接受一个函数作为参数，该函数的两个参数分别是resolve和reject，这两个函数JavaScript引擎提供，不用自己部署
// (5) resolve 函数作用是将Promise对象状态从未完成变为成功pending->resolved，reject是未完成变为失败pending->rejected
// (6) Promise实例生成后，可以用then方法分别指定resolved状态和rejected状态的回调函数
function timeout (ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'done');
    });
}

// Promise实例生成以后，可以用then方法分别指定resolved状态和reject状态的回调函数
timeout(2000).then((value) => {
    console.log(value);
});

// promise
let promise = new Promise(function (resolve, reject) {
    console.log('Promise');
    resolve();
});

// then方法指定的回调函数，将在脚本所有同步任务执行完后才会执行
promise.then(function () {
    console.log('resolved.');
}, function(){
    console.log('failed');
});

console.log('Hi!');

// 异步加载图片
function loadImageAsync(url) {
    return new Promise(function(resolve, reject) {
        let image = new Image();

        image.onload = function () {
            resolve(image);
        };

        image.onerror = function () {
            reject(new Error('Could not load image at ' + url));
        }

        image.src = url;
    });
}






















