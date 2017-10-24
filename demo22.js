// 形式上generator是一个普通函数，但是有两个特征。
// function 关键字与函数名之间有一个星号
// 函数体内使用yield表达式，定义不同的内部状态

function* helloWorldGenerator() {
    yield 'hello';
    yield 'world';
    return 'ending';
}

let hw = helloWorldGenerator();
console.log(hw);
console.log('---');
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());

// Generator函数调用方法与普通函数一样，也是函数名后面加一对圆括号
// 调用Generator函数后，该函数并不执行，返回的也不是函数运行结果
// 每次调用next 内部指针就从头部或上一次停止的地方开始继续执行, 直到遇到下一个yield表达式或return
// yield表达式是暂停标记，而next方法可以恢复执行
// Generator 可以生成一系列的值进行返回

function* f() {
    yield 'I';
    yield 'am';
    yield 'Ricky';
    return true;
}

let arr = [1, [2, 3], [3, 4, 5]];

let flat = function* (a) {
    let length = a.length;

    for (let i = 0; i < length; i++) {
        let item = a[i];
        if(typeof item !== 'number') {
            yield* flat(item);
        }else{
            yield item;
        }
    }
};

for(let f of flat(arr)) {
    console.log(f);
}




































