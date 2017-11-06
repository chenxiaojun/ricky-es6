window.onload = insertParagraph('I am Ricky!');
window.onload = getHTML;
window.onload = insertElement;
window.onload = myTest;
function insertParagraph (text) {
    var str = '<p>';
    str += text;
    str += '</p>';
    document.write(str);
}

function getHTML(){
    var test_div = document.getElementById('testDiv');
    console.log(test_div.innerHTML);
}

function insertElement(){
    var parent = document.getElementById('testDiv');
    var new_element = document.createElement('p');
    parent.appendChild(new_element);
    var text = document.createTextNode('I love Ruby!');
    new_element.appendChild(text);
}

function myTest(){
    parent = document.getElementById('myTest');
    para = document.createElement('p');
    em_para = document.createElement('em');
    text1 = document.createTextNode('This is ');
    text2 = document.createTextNode('my');
    text3 = document.createTextNode(' test');
    para.appendChild(text1);
    para.appendChild(em_para);
    em_para.appendChild(text2);
    para.appendChild(text3);
    parent.appendChild(para);
}