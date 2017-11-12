function setColor(){
    tables = document.getElementsByTagName('table');
    console.log(tables);
    let odd, rows;
    for (let i = 0; i < tables.length; i++) {
        odd = false;
        rows = tables[i].getElementsByTagName('tr');
        console.log(rows);
        for (let j = 0; j < rows.length; j++){
            if (odd === true) {
                rows[j].style.backgroundColor = '#cccccc';
                odd = false
            }else{
                odd = true
            }
            highLightRows(rows[j]);
        }
    }
}

function highLightRows(row){
    row.onmouseover = function () {
        this.className = 'bold';
    };

    row.onmouseout = function () {
        this.className = 'normal';
    };
}

addLoadEvent(setColor);