function show(){
    linklist = document.getElementById('linklist');
    lis = linklist.getElementsByTagName('a');
    preview = document.getElementById('preview');
    preview.style.position = 'absolute';
    lis[0].onmouseover = function () {
        moveMessage('preview', -100, -20, 10);
    };

    lis[1].onmouseover = function () {
        moveMessage('preview', -400, -250, 10);
    };
    lis[2].onmouseover = function () {
        moveMessage('preview', -300, -20, 10);
    };
}

addLoadEvent(show);