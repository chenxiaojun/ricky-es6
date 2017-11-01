// getAttribute 作用于dom节点对象，用来查找节点的某个属性
let a = document.getElementsByTagName('p');
for(let val of a) {
    let title = val.getAttribute('title');
    if (title) console.log(title); // a gentle reminder
}

// setAttribute 也是作用于节点对象，允许对属性值进行修改
let b = document.getElementById('purchase');
console.log(b.getAttribute('title')); // null
b.setAttribute('title', 'a list of goods');
console.log(b.getAttribute('title')); //a list of goods


