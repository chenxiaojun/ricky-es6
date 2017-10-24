function* f() {
    for(let i = 0; true; i++) {
        let reset = yield i;
        if (reset) { i = -1; }
    }
}

let g = f();
console.log(g.next());
console.log(g.next());


