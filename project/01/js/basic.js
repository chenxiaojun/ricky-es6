function addLoadEvent (func) {
    let oldonload = window.onload;
    if (typeof window.onload !== 'function') {
        window.onload = func;
    }else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}

function insertAfter(newElement, targetElement) {
    let parent = targetElement.parentNode;
    if (parent.lastChild === targetElement){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}

function addClass(element, value) {
    if(!element.className) {
        element.className = value;
    }else{
        newClassName = element.className;
        newClassName += ' ';
        newClassName += value;
        element.className = newClassName;
    }
}

function highlightpage () {
    let headers = document.getElementsByTagName('header');
    if (headers.length === 0) return false;
    let navs = headers[0].getElementsByTagName('nav');
    if (navs.length === 0) return false;
    let links = navs[0].getElementsByTagName('a');
    console.log(links);
    for (let i = 0; i < links.length; i++) {
        linkurl = links[i].getAttribute('href');
        console.log(linkurl);
        if(window.location.href.indexOf(linkurl) !== -1) {
            links[i].className = 'here';
            let linktext = links[i].lastChild.nodeValue.toLowerCase();
            document.body.setAttribute('id', linktext);
        }
    }
}

function moveElement(elementID, final_x, final_y, internal){
    let ele = document.getElementById(elementID);
    if (ele.movement) {
        clearTimeout(ele.movement);
    }
    if(!ele.style.left || !ele.style.top) {
        ele.style.left = '0px';
        ele.style.top = '0px';
    }
    // 获取元素当前位置
    xpos = parseInt(ele.style.left);
    ypos = parseInt(ele.style.top);
    // 判断是否到达了目的地
    if (xpos === final_x && ypos === final_y) return true;
    if (xpos < final_x){
        dist = Math.ceil((final_x - xpos) / 10);
        xpos = xpos + dist;
    }
    if (xpos > final_x){
        dist = Math.ceil((xpos - final_x) / 10);
        xpos = xpos - dist;
    }
    if (ypos < final_y){
        dist = Math.ceil((final_y - ypos) / 10);
        ypos = ypos + dist;
    }
    if (ypos > final_y){
        dist = Math.ceil((ypos - final_y) / 10);
        ypos = ypos - dist;
    }
    ele.style.left = xpos + 'px';
    ele.style.top = ypos + 'px';
    param = `moveElement('${elementID}', ${final_x}, ${final_y}, ${internal})`;
    ele.movement = setTimeout(param, internal);
}

function prepareSlideShow() {
    let intro = document.getElementById('intro');
    let slideshow = document.createElement('div');
    slideshow.setAttribute('id', 'slideshow');
    // frame = document.createElement('img');
    // frame.setAttribute('src', 'images/back.jpg');
    // frame.setAttribute('alt', '');
    // frame.setAttribute('id', 'frame');
    // slideshow.appendChild(frame);
    let preview = document.createElement('img');
    preview.setAttribute('src', 'images/slideshow.jpg');
    preview.setAttribute('alt', 'a glimpse of what awaits you');
    preview.setAttribute('id', 'preview');
    slideshow.appendChild(preview);
    insertAfter(slideshow, intro);
    let links = document.getElementsByTagName('a');
    for (let i = 0; i < links.length; i++) {
        links[i].onmouseover = function () {
            destination = this.getAttribute('href');
            if (destination.indexOf('index.html') !== -1) {
                moveElement('preview', 0, 0, 5);
            }
            if (destination.indexOf('about.html') !== -1) {
                moveElement('preview', -150, 80, 5);
            }
            if (destination.indexOf('contact.html') !== -1) {
                moveElement('preview', -250, 50, 5);
            }
            if (destination.indexOf('photos.html') !== -1) {
                moveElement('preview', -400, 10, 5);
            }
        }
    }
}

function showSection(id) {
    let sections = document.getElementsByTagName('section');
    for (let i = 0; i < sections.length; i++) {
        if (sections[i].getAttribute('id') !== id) {
            sections[i].style.display = 'none';
        }else {
            sections[i].style.display = 'block';
        }
    }
}

function prepareInternalnav(){
    let articles = document.getElementsByTagName('article');
    if (articles.length === 0) return false;
    let navs = articles[0].getElementsByTagName('nav');
    if (navs.length === 0) return false;
    test = navs;
    let links = navs[0].getElementsByTagName('a');
    for (let i = 0; i < links.length; i++) {
        let sectionId = links[i].getAttribute('href').split('#')[1];
        document.getElementById(sectionId).style.display = 'none';
        links[i].destination = sectionId;
        links[i].onclick = function () {
            showSection(this.destination);
            return false;
        }
    }
}

function creGallery(){
    var img = document.createElement('img');
    img.setAttribute('id', 'placeHolder');
    img.setAttribute('src', 'images/5.png');
    img.setAttribute('alt', 'my image gallery');
    var desc = document.createElement('p');
    desc.setAttribute('id', 'description');
    var text = document.createTextNode('Choose an image');
    desc.appendChild(text);
    gallery = document.getElementById('imageGallery');
    insertAfter(img, gallery);
    insertAfter(desc, img);
}

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

























