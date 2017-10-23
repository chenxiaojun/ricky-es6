// Reflect 它和Proxy对象一样 它设计的目的

// 老的js Object.defineProperty(obj, name, desc)在无法定义属性时，会抛出错误
// Reflect.defineProperty(obj, name, desc) 会返回false

console.log('a' in {'a': 'b'});
console.log(Reflect.has({'a': 'b'}, 'a')); // 那上面的写法可以变成下面函数的写法

const person = observable({
    name: '张三'
});