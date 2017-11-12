function addLoadEvent (func) {
    let oldonload = window.onload;
    if (typeof window.onload !== 'function') {
        window.onload = func;
    }else {
        // 说明已经绑定过了，那么把新的函数追加到末尾
        window.onload = function () {
            oldonload();
            func();
        }
    }
}