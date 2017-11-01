function showPic(whichPic) {
    let source = whichPic.getAttribute('href');
    let placeHolder = document.getElementById('placeHolder');
    placeHolder.setAttribute('src', source);
}

function countBodyChildren(){
    let body = document.getElementsByTagName('body')[0];
    alert(body.childNodes.length);
}