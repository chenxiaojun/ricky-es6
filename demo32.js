export const website = 'http://ricky.xin';

export function sayHello () {
    return 'Hello World';
}

export default function () {
    return 'default fun';
}

let name = 'Ricky';
function sayName () {
    return `Hi, ${name}`;
}

export {
    name as myName,
    sayName
}