//childNodes 属性用来获取所有子节点 包括元素节点，文本节点和属性节点
//nodeType 用来检测子节点所属的类型
//nodeValue 用来获取子节点的值 12种可能，常用的就3种
//firstChild, lastChild 用户获取第一个节点

function showPic(whichPic) {
    let source = whichPic.getAttribute('href');
    let placeHolder = document.getElementById('placeHolder');
    let pic_text = whichPic.getAttribute('title');
    placeHolder.setAttribute('src', source);
    let description = document.getElementById('description');
    description.firstChild.nodeValue = pic_text;
}

function countBodyChildren(){
    let body = document.getElementsByTagName('body')[0];
    alert(body.childNodes.length);
}