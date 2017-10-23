// 对象的每个属性都有一个描述对象(Descriptor), 用来控制对象的行为
// Object.getOwnPropertyDescriptor
let obj = { foo: 123 };
console.log(Object.getOwnPropertyDescriptor(obj, 'foo'));
//  {
//    value: 123,
//    writable: true,
//    enumerable: true,
//    configurable: true
//  }
// 下面的四个会忽略enumerable为false的属性
//for...in, Object.keys, Json.stringify(), Object.assign()

// JavaScript语言的对象继承是通过原型链实现


// this 关键字总是指向函数所在的当前对象
// super 关键字指向当前的对象的原型对象
const proto = {
    foo: 'hello123'
};

const object = {
    find () {
        return super.foo;
    }
};

Object.setPrototypeOf(object, proto);
console.log(object.find());

var o2 = { name: 'micky', age: 20 };
console.log(Object.keys(o2)); //["name", "age"]

for (let [key, value] of Object.entries(o2)) {
    console.log(key, ' => ', value);
}
























