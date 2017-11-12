function positionMessage(){
    let ele = document.getElementById('message');
    ele.style.position = 'absolute';
    ele.style.left = '440px';
    ele.style.top = '320px';
    //全局的变量，可以在函数外面取消
    moveMessage('message', 300, 300, 100);
}

function moveMessage(elementID, final_x, final_y, internal){
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
    param = `moveMessage('${elementID}', ${final_x}, ${final_y}, ${internal})`;
    ele.movement = setTimeout(param, internal);
}

// addLoadEvent(positionMessage);
