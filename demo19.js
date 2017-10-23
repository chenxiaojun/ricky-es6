// Proxy
let obj = {
    sayName: function () {
        return 'Ricky';
    },
    sayAge () {
        return 20;
    }
};

let o = () => 'hello';
console.log(obj.sayName());
console.log(obj.sayAge());
console.log(o());

// Proxy第一个参数是接受要代理的对象，第二个是一个要配置的对象。
let p = new Proxy(
    {}, {
        get: function (target, key, receiver) {
            console.log(`getting ${key}!`);
            return Reflect.get(target, key, receiver);
        },
        set: function (target, key, value, receiver) {
            console.log(`setting ${key}!`);
            return Reflect.set(target, key, value, receiver);
        }
    }
);

p.count = 1;
console.log('---');
console.log(++p.count);

// Proxy get()用于拦截某个属性的读取操作，可以接受三个参数, 依次为目标对象，属性名和proxy自身
var person = {
    name: 'Ricky'
};

var proxy = new Proxy(person, {
   get: function (target, property) {
       if (property in target) {
           return target[property];
       }else{
           throw new ReferenceError("error");
       }
   }
});

console.log(proxy.name);
// console.log(proxy.age);  //Error

console.log('name' in {name: 'ricky'});

o2 = Object.create(null);
o2.name = 'ricky';
console.log(o2);




