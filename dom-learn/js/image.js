window.onload = creGallery();
function creGallery(){
    var img = document.createElement('img');
    img.setAttribute('id', 'placeHolder');
    img.setAttribute('src', 'images/5.png');
    img.setAttribute('alt', 'my image gallery');
    var desc = document.createElement('p');
    desc.setAttribute('id', 'description');
    var text = document.createTextNode('Choose an image');
    desc.appendChild(text);
    var body = document.body;
    body.appendChild(img);
    body.appendChild(desc);
}

//childNodes 属性用来获取所有子节点 包括元素节点，文本节点和属性节点
//nodeType 用来检测子节点所属的类型
//nodeValue 用来获取子节点的值 12种可能，常用的就3种
//firstChild, lastChild 用户获取第一个节点
window.onload = prepareGallery();
window.onload = insertBeforeTest();
function prepareGallery(){
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    target = document.getElementById('imageGallery');
    links = target.getElementsByTagName('a');
    for(let link of links) {
        link.onclick = function(){
            showPic(this);
            return false;
        }
    }
}

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

function insertBeforeTest(){
    var gallery = document.getElementById('imageGallery');
    console.log(gallery.parentNode);
    var p = document.createElement('p');
    var text = document.createTextNode('Coming..');
    p.appendChild(text);
    gallery.parentNode.insertBefore(p, gallery);
}

