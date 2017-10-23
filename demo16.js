// undefined, null, Boolean, String, Number, Object, Symbol
// 凡是属性名属于Symbol类型，就都是独一无二的
let a = Symbol();
console.log(typeof(a));

const a2 = {
    toString () {
        return 'abc';
    }
};

const sym = Symbol(a2); // a2参数是为了便于区分
console.log(sym); // Symbol(abc)
console.log('sym => ' + String(sym)); // 可以显示转为字符串

let mySym = Symbol();

// 每一个Symbol值都是不相等的， Symbol值可以作为字符串
let a3 = {};
a3[mySym] = 'Ricky';
let a4  = {
    [mySym]: 'Micky'
};
console.log(a3);
console.log(a4);


// 这种利于解耦，typeX里面的值不是很重要 可以使用Symbol类型
const shapeType = {
    typeA: Symbol(),
    typeB: Symbol(),
    typeC: Symbol()
};

function f (type) {
    if (type === shapeType.typeA){
        return 'A';
    }else if(type === shapeType.typeB){
        return 'B';
    }else{
        return 'C';
    }
}
console.log(f(shapeType.typeA)); // A
console.log(f(shapeType.typeB)); // B
console.log(f(shapeType.typeC)); // C

// 如果想用同一个Symbol值，可以使用Symbol.for
let s4 = Symbol.for('foo');
let s5 = Symbol.for('foo');
console.log(Object.is(s4, s5));
console.log(s4 === s5);