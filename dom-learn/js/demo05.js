// 文档被加载到一个文档里，document对象是windows对象的一个属性。当window对象触发onload事件时，document对象就已经存在了。
window.onload = toBaidu;
function toBaidu(){
    let a_list = document.getElementsByTagName('a')
    for(i = 0; i < a_list.length; i++){
        if(a_list[i].getAttribute('class') === 'popup'){
            a_list[i].onclick = function(){
                popUp(this.getAttribute('href'));
                console.log(123);
                return false;
            }
        }
    }
}

function popUp(url){
    window.open(url, 'popup', 'width=800, height=380')
}