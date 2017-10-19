let x = 1;

function f (x, y = x) {
    x++;
    console.log([x, y]);
}

document.write(x);
